import { CONFIG } from 'src/config-global';

import { FirebaseSignInView } from 'src/sections/auth/firebase';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign in | Firebase - ${CONFIG.site.name}` };

export default function Page() {
  return <FirebaseSignInView />;
}
