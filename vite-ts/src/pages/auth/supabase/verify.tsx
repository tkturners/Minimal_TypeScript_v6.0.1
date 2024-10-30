import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { SupabaseVerifyView } from 'src/auth/view/supabase';

// ----------------------------------------------------------------------

const metadata = { title: `Verify | Supabase - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <SupabaseVerifyView />
    </>
  );
}
