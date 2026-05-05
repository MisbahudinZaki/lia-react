import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ctwpalgixjvxcczpzala.supabase.co"
const supabaseKey = "sb_publishable_AnDBTlFFC3e-aRK5pVcXTw_pCLd52it"

export const supabase = createClient(supabaseUrl, supabaseKey)