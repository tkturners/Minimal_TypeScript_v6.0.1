import { CONFIG } from 'src/config-global';

import { ShadowsView } from 'src/sections/_examples/foundation/shadows-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Shadows | Foundations - ${CONFIG.appName}` };

export default function Page() {
  return <ShadowsView />;
}
