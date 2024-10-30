import { CONFIG } from 'src/config-global';

import { SupabaseSignInView } from 'src/auth/view/supabase';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign in | Supabase - ${CONFIG.appName}` };

export default function Page() {
  return <SupabaseSignInView />;
}
