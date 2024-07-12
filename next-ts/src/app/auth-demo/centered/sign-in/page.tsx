import { CONFIG } from 'src/config-global';

import { CenteredSignInView } from 'src/sections/auth-demo/centered';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign in | Layout centered - ${CONFIG.site.name}` };

export default function Page() {
  return <CenteredSignInView />;
}
