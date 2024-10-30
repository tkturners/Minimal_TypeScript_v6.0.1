import { CONFIG } from 'src/config-global';

import { AmplifySignUpView } from 'src/auth/view/amplify';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign up | Amplify - ${CONFIG.appName}` };

export default function Page() {
  return <AmplifySignUpView />;
}
