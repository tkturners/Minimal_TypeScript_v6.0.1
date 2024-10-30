import { CONFIG } from 'src/config-global';

import { SupabaseResetPasswordView } from 'src/auth/view/supabase';

// ----------------------------------------------------------------------

export const metadata = { title: `Reset password | Supabase - ${CONFIG.appName}` };

export default function Page() {
  return <SupabaseResetPasswordView />;
}
