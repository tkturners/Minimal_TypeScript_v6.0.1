import { CONFIG } from 'src/config-global';

import { FirebaseSignUpView } from 'src/auth/view/firebase';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign up | Firebase - ${CONFIG.appName}` };

export default function Page() {
  return <FirebaseSignUpView />;
}
