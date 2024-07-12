import { CONFIG } from 'src/config-global';

import { MapView } from 'src/sections/_examples/extra/map-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Map | Components - ${CONFIG.site.name}` };

export default function Page() {
  return <MapView />;
}
