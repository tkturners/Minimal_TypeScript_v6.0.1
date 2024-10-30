import { CONFIG } from 'src/config-global';

import { SplitUpdatePasswordView } from 'src/auth/view/auth-demo/split';

// ----------------------------------------------------------------------

export const metadata = { title: `Update password | Layout split - ${CONFIG.appName}` };

export default function Page() {
  return <SplitUpdatePasswordView />;
}
