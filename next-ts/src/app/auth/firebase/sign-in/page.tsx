import { CONFIG } from 'src/config-global';

import { FirebaseSignInView } from 'src/auth/view/firebase';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign in | Firebase - ${CONFIG.appName}` };

export default function Page() {
  return <FirebaseSignInView />;
}
