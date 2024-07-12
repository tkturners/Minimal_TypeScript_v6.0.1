import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { FirebaseResetPasswordView } from 'src/sections/auth/firebase';

// ----------------------------------------------------------------------

const metadata = { title: `Reset password | Firebase - ${CONFIG.site.name}` };

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
