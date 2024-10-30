import { CONFIG } from 'src/config-global';

import { FirebaseVerifyView } from 'src/auth/view/firebase';

// ----------------------------------------------------------------------

export const metadata = { title: `Verify | Firebase - ${CONFIG.appName}` };

export default function Page() {
  return <FirebaseVerifyView />;
}
