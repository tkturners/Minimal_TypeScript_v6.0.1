import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { FirebaseSignUpView } from 'src/sections/auth/firebase';

// ----------------------------------------------------------------------

const metadata = { title: `Sign up | Firebase - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <FirebaseSignUpView />
    </>
  );
}
