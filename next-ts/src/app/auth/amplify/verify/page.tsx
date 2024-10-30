import { CONFIG } from 'src/config-global';

import { AmplifyVerifyView } from 'src/auth/view/amplify';

// ----------------------------------------------------------------------

export const metadata = { title: `Verify | Amplify - ${CONFIG.appName}` };

export default function Page() {
  return <AmplifyVerifyView />;
}
