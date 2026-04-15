import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sdjkndfmqhyknjbtaobc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkamtuZGZtcWh5a25qYnRhb2JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYxNzk1ODIsImV4cCI6MjA5MTc1NTU4Mn0.SBr6-DL-jKIVXzm7hiH4DQ4Jo-AM-diop8PdMkERmJg';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testSupabase() {
  console.log("Inserting a dummy inquiry...");
  const { error: insertError } = await supabase
    .from('project_inquiries')
    .insert([{
      name: 'Agent Test',
      email: 'agent@zorvia.tech',
      phone: '1234567890',
      address: 'Test Environment',
      project_type: 'Web Application',
      project_description: 'Validating Admin Dashboard Sync from backend API test script.',
      project_timeline: 'urgent',
      pricing_plan: 'enterprise',
      contact_method: 'Email'
    }]);

  if (insertError) {
    console.error("Error inserting:", insertError);
    return;
  }

  console.log("Successfully inserted. Fetching project inquiries...");
  const { data, error } = await supabase
    .from('project_inquiries')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(2);

  if (error) {
    console.error("Error fetching:", error);
  } else {
    console.log("Recent Inquiries:");
    console.log(JSON.stringify(data, null, 2));
  }
}

testSupabase();
