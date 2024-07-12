import { CONFIG } from 'src/config-global';

import { GridView } from 'src/sections/_examples/foundation/grid-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Grid | Foundations - ${CONFIG.site.name}` };

export default function Page() {
  return <GridView />;
}
