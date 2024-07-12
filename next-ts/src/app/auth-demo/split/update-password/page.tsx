import { CONFIG } from 'src/config-global';

import { SplitUpdatePasswordView } from 'src/sections/auth-demo/split';

// ----------------------------------------------------------------------

export const metadata = { title: `Update password | Layout split - ${CONFIG.site.name}` };

export default function Page() {
  return <SplitUpdatePasswordView />;
}
