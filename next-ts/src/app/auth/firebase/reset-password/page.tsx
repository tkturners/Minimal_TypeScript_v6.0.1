import { CONFIG } from 'src/config-global';

import { FirebaseResetPasswordView } from 'src/auth/view/firebase';

// ----------------------------------------------------------------------

export const metadata = { title: `Reset password | Firebase - ${CONFIG.appName}` };

export default function Page() {
  return <FirebaseResetPasswordView />;
}
