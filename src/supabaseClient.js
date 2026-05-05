import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ctwpalgixjvxcczpzala.supabase.co"
const supabaseKey = "postgresql://postgres:[YOUR-PASSWORD]@db.ctwpalgixjvxcczpzala.supabase.co:5432/postgres"

export const supabase = createClient(supabaseUrl, supabaseKey)