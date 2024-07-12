import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { SupabaseResetPasswordView } from 'src/sections/auth/supabase';

// ----------------------------------------------------------------------

const metadata = { title: `Reset password | Supabase - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <SupabaseResetPasswordView />
    </>
  );
}
