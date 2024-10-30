import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { FirebaseSignInView } from 'src/auth/view/firebase';

// ----------------------------------------------------------------------

const metadata = { title: `Sign in | Firebase - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <FirebaseSignInView />
    </>
  );
}
