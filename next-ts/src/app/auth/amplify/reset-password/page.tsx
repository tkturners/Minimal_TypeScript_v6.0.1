import { CONFIG } from 'src/config-global';

import { AmplifyResetPasswordView } from 'src/auth/view/amplify';

// ----------------------------------------------------------------------

export const metadata = { title: `Reset password | Amplify - ${CONFIG.appName}` };

export default function Page() {
  return <AmplifyResetPasswordView />;
}
