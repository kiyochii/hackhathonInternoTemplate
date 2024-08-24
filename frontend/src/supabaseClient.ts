import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl: string = 'https://djmrmeygrxqlvaptwsbu.supabase.co';
const supabaseAnonKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqbXJtZXlncnhxbHZhcHR3c2J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ0NzA1NjEsImV4cCI6MjA0MDA0NjU2MX0.WuS5fE91BbIWRd-bgb7bytKM7mTq4Isyry0jrCOGI8E';

export const supabaseClient: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);
