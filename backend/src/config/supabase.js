import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

// TODO: Wire real Supabase credentials for production.
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

export const supabase =
  supabaseUrl && supabaseKey
    ? createClient(supabaseUrl, supabaseKey)
    : null;