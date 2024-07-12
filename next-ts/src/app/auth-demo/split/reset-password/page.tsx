import { CONFIG } from 'src/config-global';

import { SplitResetPasswordView } from 'src/sections/auth-demo/split';

// ----------------------------------------------------------------------

export const metadata = { title: `Reset password | Layout split - ${CONFIG.site.name}` };

export default function Page() {
  return <SplitResetPasswordView />;
}
