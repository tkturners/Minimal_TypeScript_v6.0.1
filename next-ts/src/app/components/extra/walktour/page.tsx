import { CONFIG } from 'src/config-global';

import { WalktourView } from 'src/sections/_examples/extra/walktour-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Walktour | Components - ${CONFIG.appName}` };

export default function Page() {
  return <WalktourView />;
}
