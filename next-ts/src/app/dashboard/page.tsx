import { CONFIG } from 'src/config-global';

import { OverviewAppView } from 'src/sections/overview/app/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <OverviewAppView />;
}
