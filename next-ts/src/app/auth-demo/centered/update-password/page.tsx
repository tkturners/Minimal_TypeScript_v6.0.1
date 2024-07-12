import { CONFIG } from 'src/config-global';

import { CenteredUpdatePasswordView } from 'src/sections/auth-demo/centered';

// ----------------------------------------------------------------------

export const metadata = { title: `Update password | Layout centered - ${CONFIG.site.name}` };

export default function Page() {
  return <CenteredUpdatePasswordView />;
}
