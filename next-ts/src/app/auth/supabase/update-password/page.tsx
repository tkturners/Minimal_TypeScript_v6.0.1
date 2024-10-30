import { CONFIG } from 'src/config-global';

import { SupabaseUpdatePasswordView } from 'src/auth/view/supabase';

// ----------------------------------------------------------------------

export const metadata = { title: `Update password | Supabase - ${CONFIG.appName}` };

export default function Page() {
  return <SupabaseUpdatePasswordView />;
}
