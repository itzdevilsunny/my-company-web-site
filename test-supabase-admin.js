import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sdjkndfmqhyknjbtaobc.supabase.co';
const supabaseAdminKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkamtuZGZtcWh5a25qYnRhb2JjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NjE3OTU4MiwiZXhwIjoyMDkxNzU1NTgyfQ.njjpq0dqy2t99kl3g3MOTNyXaq9c2WHysJMA792gZ7I';
const supabase = createClient(supabaseUrl, supabaseAdminKey);

async function checkAdminRecords() {
  console.log("Fetching project inquiries using Admin Service Key...");
  const { data, error } = await supabase
    .from('project_inquiries')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Error fetching:", error);
  } else {
    console.log(`Found ${data.length} inquiries.`);
    if (data.length > 0) {
      console.log("Recent Inquiries:", JSON.stringify(data.slice(0, 2), null, 2));
    }
  }
}

checkAdminRecords();
