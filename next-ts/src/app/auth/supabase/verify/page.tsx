import { CONFIG } from 'src/config-global';

import { SupabaseVerifyView } from 'src/sections/auth/supabase';

// ----------------------------------------------------------------------

export const metadata = { title: `Verify | Supabase - ${CONFIG.site.name}` };

export default function Page() {
  return <SupabaseVerifyView />;
}
