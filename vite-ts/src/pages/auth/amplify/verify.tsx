import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { AmplifyVerifyView } from 'src/sections/auth/amplify';

// ----------------------------------------------------------------------

const metadata = { title: `Verify | Amplify - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <AmplifyVerifyView />
    </>
  );
}
