import { CONFIG } from 'src/config-global';

import { CenteredResetPasswordView } from 'src/sections/auth-demo/centered';

// ----------------------------------------------------------------------

export const metadata = { title: `Reset password | Layout centered - ${CONFIG.site.name}` };

export default function Page() {
  return <CenteredResetPasswordView />;
}
