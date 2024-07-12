import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { SupabaseUpdatePasswordView } from 'src/sections/auth/supabase';

// ----------------------------------------------------------------------

const metadata = { title: `Update password | Supabase - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <SupabaseUpdatePasswordView />
    </>
  );
}
