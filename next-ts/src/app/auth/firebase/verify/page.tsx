import { CONFIG } from 'src/config-global';

import { FirebaseVerifyView } from 'src/sections/auth/firebase';

// ----------------------------------------------------------------------

export const metadata = { title: `Verify | Firebase - ${CONFIG.site.name}` };

export default function Page() {
  return <FirebaseVerifyView />;
}
