import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { FirebaseResetPasswordView } from 'src/auth/view/firebase';

// ----------------------------------------------------------------------

const metadata = { title: `Reset password | Firebase - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <FirebaseResetPasswordView />
    </>
  );
}
