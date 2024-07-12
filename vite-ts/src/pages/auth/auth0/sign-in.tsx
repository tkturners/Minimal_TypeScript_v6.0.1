import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { Auth0SignInView } from 'src/sections/auth/auth0';

// ----------------------------------------------------------------------

const metadata = { title: `Sign in | Auth0 - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Auth0SignInView />
    </>
  );
}
