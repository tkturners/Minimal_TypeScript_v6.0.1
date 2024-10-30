import { CONFIG } from 'src/config-global';

import { AmplifyUpdatePasswordView } from 'src/auth/view/amplify';

// ----------------------------------------------------------------------

export const metadata = { title: `Update password | Amplify - ${CONFIG.appName}` };

export default function Page() {
  return <AmplifyUpdatePasswordView />;
}
