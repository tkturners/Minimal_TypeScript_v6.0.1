import { CONFIG } from 'src/config-global';

import { DndView } from 'src/sections/_examples/extra/dnd-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Dnd | Components - ${CONFIG.appName}` };

export default function Page() {
  return <DndView />;
}
