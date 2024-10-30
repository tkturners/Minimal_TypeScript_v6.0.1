import { CONFIG } from 'src/config-global';

import { AccountView } from 'src/sections/account/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Account settings | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <AccountView />;
}
