import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { AmplifySignUpView } from 'src/sections/auth/amplify';

// ----------------------------------------------------------------------

const metadata = { title: `Sign up | Amplify - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <AmplifySignUpView />
    </>
  );
}
