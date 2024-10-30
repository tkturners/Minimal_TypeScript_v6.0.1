import { CONFIG } from 'src/config-global';

import { UserCardsView } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export const metadata = { title: `User cards | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <UserCardsView />;
}
