import { CONFIG } from 'src/config-global';

import { SplitSignInView } from 'src/sections/auth-demo/split';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign in | Layout split - ${CONFIG.site.name}` };

export default function Page() {
  return <SplitSignInView />;
}
