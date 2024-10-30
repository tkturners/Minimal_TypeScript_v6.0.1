import { CONFIG } from 'src/config-global';

import { BlankView } from 'src/sections/blank/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Blank | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <BlankView />;
}
