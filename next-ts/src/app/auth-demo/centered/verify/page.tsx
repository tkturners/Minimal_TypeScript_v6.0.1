import { CONFIG } from 'src/config-global';

import { CenteredVerifyView } from 'src/sections/auth-demo/centered';

// ----------------------------------------------------------------------

export const metadata = { title: `Verify | Layout centered - ${CONFIG.site.name}` };

export default function Page() {
  return <CenteredVerifyView />;
}
