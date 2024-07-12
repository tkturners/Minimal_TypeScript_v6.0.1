import { CONFIG } from 'src/config-global';

import { LightboxView } from 'src/sections/_examples/extra/lightbox-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Lightbox | Components - ${CONFIG.site.name}` };

export default function Page() {
  return <LightboxView />;
}
