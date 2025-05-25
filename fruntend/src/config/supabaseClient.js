import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xworazcbmdcnfdjobogu.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3b3JhemNibWRjbmZkam9ib2d1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MDYxOTMsImV4cCI6MjA2Mjk4MjE5M30.zhxKk1s9FETuwriQe0ih9FBsadLfHjNDj-zjD2AoJto'

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 