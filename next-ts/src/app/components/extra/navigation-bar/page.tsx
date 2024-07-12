import { CONFIG } from 'src/config-global';

import { NavigationBarView } from 'src/sections/_examples/extra/navigation-bar-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Navigation bar | Components - ${CONFIG.site.name}` };

export default function Page() {
  return <NavigationBarView />;
}
