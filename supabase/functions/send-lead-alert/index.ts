import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "npm:resend"

const resend = new Resend(Deno.env.get('RESEND_API_KEY'))
const targetEmail = Deno.env.get('ZORVIA_ADMIN_EMAIL') || 'hello@zorvia.com' // Fallback for safety

serve(async (req) => {
  try {
    // Basic CORS headers
    if (req.method === 'OPTIONS') {
      return new Response('ok', { headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      } })
    }

    const payload = await req.json()

    // Supabase Webhook payload provides 'type' (INSERT, UPDATE, DELETE) and 'record'
    const { type, record, table } = payload

    if (type !== 'INSERT') {
      return new Response(JSON.stringify({ message: "Not an INSERT event, skipping." }), {
        headers: { "Content-Type": "application/json" },
        status: 200,
      })
    }

    let subject = ""
    let htmlContent = ""

    if (table === 'project_inquiries') {
      subject = `[NEW LEAD] Zorvia Inquiry: ${record.client_name || 'Unknown Client'}`
      htmlContent = `
        <div style="font-family: Arial, sans-serif; background-color: #f8f9fa; padding: 20px;">
          <div style="max-w-xl p-8 bg-white border border-gray-200 rounded-xl shadow-lg">
            <h2 style="color: #0e0a17; border-bottom: 2px solid #ec4899; padding-bottom: 10px; margin-bottom: 20px;">🚨 New Zorvia Project Inquiry</h2>
            
            <p><strong>Name:</strong> ${record.client_name || 'N/A'}</p>
            <p><strong>Email:</strong> ${record.client_email || 'N/A'} (Method: ${record.contact_method || 'Email'})</p>
            <p><strong>Phone:</strong> ${record.client_phone || 'N/A'}</p>
            <p><strong>Address:</strong> ${record.client_address || 'N/A'}</p>
            
            <h3 style="color: #3b82f6; margin-top: 30px;">Strategic Details</h3>
            <p><strong>Timeline:</strong> ${record.project_timeline || 'N/A'}</p>
            <p><strong>Pricing Tier:</strong> ${record.pricing_plan || 'N/A'}</p>
            <p><strong>Category:</strong> ${record.project_type || 'N/A'}</p>
            <p><strong>Design Style:</strong> ${record.design_preference || 'N/A'}</p>
            
            <div style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-top: 20px;">
              <p style="margin:0; font-weight: bold; color: #334155;">Project Vision:</p>
              <p style="margin-top:5px; color: #0a0a0a;">${record.project_description || 'N/A'}</p>
            </div>
            
            <p style="margin-top:30px; font-size: 12px; color: #9ca3af;">Please check the <a href="https://zorvia.agency/zorvia-hq">Zorvia Command Center</a> for full details.</p>
          </div>
        </div>
      `
    } else if (table === 'strategic_updates') {
      subject = `[ZORVIA PING] Strategic Update from ${record.email || 'System'}`
      htmlContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Strategic Update Submitted</h2>
          <p><strong>Email:</strong> ${record.email}</p>
          <p><strong>Update Notes:</strong></p>
          <blockquote style="background-color: #f3f4f6; padding: 15px; border-left: 4px solid #3b82f6;">
            ${record.update_note}
          </blockquote>
        </div>
      `
    } else {
      return new Response(JSON.stringify({ message: "Table not supported for emails." }), {
        headers: { "Content-Type": "application/json" },
        status: 200,
      })
    }

    // Send the email using Resend
    const data = await resend.emails.send({
      from: 'Zorvia Intelligence System <onboarding@resend.dev>', // Update with verified domain eventually
      to: [targetEmail],
      subject: subject,
      html: htmlContent,
    })

    return new Response(JSON.stringify({ success: true, data }), {
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      status: 200,
    })
  } catch (error) {
    console.error("Critical Failure in Lead Trigger:", error)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      status: 500,
    })
  }
})
