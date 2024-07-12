import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { SupabaseSignUpView } from 'src/sections/auth/supabase';

// ----------------------------------------------------------------------

const metadata = { title: `Sign up | Supabase - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <SupabaseSignUpView />
    </>
  );
}
