import { CONFIG } from 'src/config-global';

import { CenteredSignUpView } from 'src/auth/view/auth-demo/centered';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign up | Layout centered - ${CONFIG.appName}` };

export default function Page() {
  return <CenteredSignUpView />;
}
