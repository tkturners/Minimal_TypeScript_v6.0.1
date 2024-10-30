import { CONFIG } from 'src/config-global';

import { SplitSignUpView } from 'src/auth/view/auth-demo/split';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign up | Layout split - ${CONFIG.appName}` };

export default function Page() {
  return <SplitSignUpView />;
}
