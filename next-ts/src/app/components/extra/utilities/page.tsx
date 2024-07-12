import { CONFIG } from 'src/config-global';

import { UtilitiesView } from 'src/sections/_examples/extra/utilities-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Utilities | Components - ${CONFIG.site.name}` };

export default function Page() {
  return <UtilitiesView />;
}
