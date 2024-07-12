import { CONFIG } from 'src/config-global';

import { OverviewBankingView } from 'src/sections/overview/banking/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Banking | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return <OverviewBankingView />;
}
