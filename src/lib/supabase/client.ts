import { createClient } from '@supabase/supabase-js'
import { env } from '$env/dynamic/private';

const supabaseUrl = env.SUPABASE_URL
const supabaseAnonKey = env.SUPABASE_ANON_KEY

const supabase = supabaseUrl && supabaseAnonKey && createClient(supabaseUrl, supabaseAnonKey)

export default supabase
