import { CONFIG } from 'src/config-global';

import { SplitVerifyView } from 'src/auth/view/auth-demo/split';

// ----------------------------------------------------------------------

export const metadata = { title: `Verify | Layout split - ${CONFIG.appName}` };

export default function Page() {
  return <SplitVerifyView />;
}
