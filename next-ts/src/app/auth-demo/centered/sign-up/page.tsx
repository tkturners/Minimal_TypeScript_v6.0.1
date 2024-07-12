import { CONFIG } from 'src/config-global';

import { CenteredSignUpView } from 'src/sections/auth-demo/centered';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign up | Layout centered - ${CONFIG.site.name}` };

export default function Page() {
  return <CenteredSignUpView />;
}
