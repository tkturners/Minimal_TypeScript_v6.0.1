import { CONFIG } from 'src/config-global';

import { CenteredUpdatePasswordView } from 'src/auth/view/auth-demo/centered';

// ----------------------------------------------------------------------

export const metadata = { title: `Update password | Layout centered - ${CONFIG.appName}` };

export default function Page() {
  return <CenteredUpdatePasswordView />;
}
