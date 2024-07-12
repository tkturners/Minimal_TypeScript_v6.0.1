import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { SupabaseVerifyView } from 'src/sections/auth/supabase';

// ----------------------------------------------------------------------

const metadata = { title: `Verify | Supabase - ${CONFIG.site.name}` };

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
