import { CONFIG } from 'src/config-global';

import { ComponentsView } from 'src/sections/_examples/view';

// ----------------------------------------------------------------------

export const metadata = { title: `All components | MUI - ${CONFIG.appName}` };

export default function Page() {
  return <ComponentsView />;
}
