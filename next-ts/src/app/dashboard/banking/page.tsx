import { CONFIG } from 'src/config-global';

import { OverviewBankingView } from 'src/sections/overview/banking/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Banking | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <OverviewBankingView />;
}
