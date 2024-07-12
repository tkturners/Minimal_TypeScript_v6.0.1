import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { FirebaseVerifyView } from 'src/sections/auth/firebase';

// ----------------------------------------------------------------------

const metadata = { title: `Verify | Firebase - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <FirebaseVerifyView />
    </>
  );
}
