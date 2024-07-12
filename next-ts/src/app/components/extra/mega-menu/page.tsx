import { CONFIG } from 'src/config-global';

import { MegaMenuView } from 'src/sections/_examples/extra/mega-menu-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Mega menu | Components - ${CONFIG.site.name}` };

export default function Page() {
  return <MegaMenuView />;
}
