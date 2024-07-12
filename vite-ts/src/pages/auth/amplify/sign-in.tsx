import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { AmplifySignInView } from 'src/sections/auth/amplify';

// ----------------------------------------------------------------------

const metadata = { title: `Sign in | Amplify - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <AmplifySignInView />
    </>
  );
}
