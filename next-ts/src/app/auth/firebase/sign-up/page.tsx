import { CONFIG } from 'src/config-global';

import { FirebaseSignUpView } from 'src/sections/auth/firebase';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign up | Firebase - ${CONFIG.site.name}` };

export default function Page() {
  return <FirebaseSignUpView />;
}
