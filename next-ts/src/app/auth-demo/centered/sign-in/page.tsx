import { CONFIG } from 'src/config-global';

import { CenteredSignInView } from 'src/auth/view/auth-demo/centered';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign in | Layout centered - ${CONFIG.appName}` };

export default function Page() {
  return <CenteredSignInView />;
}
