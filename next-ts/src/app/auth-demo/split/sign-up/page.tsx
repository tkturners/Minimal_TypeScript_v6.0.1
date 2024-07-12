import { CONFIG } from 'src/config-global';

import { SplitSignUpView } from 'src/sections/auth-demo/split';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign up | Layout split - ${CONFIG.site.name}` };

export default function Page() {
  return <SplitSignUpView />;
}
