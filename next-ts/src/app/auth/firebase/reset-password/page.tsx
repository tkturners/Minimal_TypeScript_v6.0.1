import { CONFIG } from 'src/config-global';

import { FirebaseResetPasswordView } from 'src/sections/auth/firebase';

// ----------------------------------------------------------------------

export const metadata = { title: `Reset password | Firebase - ${CONFIG.site.name}` };

export default function Page() {
  return <FirebaseResetPasswordView />;
}
