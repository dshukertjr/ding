import { createClient } from '@supabase/supabase-js'

export const SITE_NAME = 'Ding'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY

export const supabase = createClient(SUPABASE_URL ?? '', SUPABASE_KEY ?? '')
