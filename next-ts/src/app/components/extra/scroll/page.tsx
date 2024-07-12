import { CONFIG } from 'src/config-global';

import { ScrollbarView } from 'src/sections/_examples/extra/scrollbar-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Scrollbar | Components - ${CONFIG.site.name}` };

export default function Page() {
  return <ScrollbarView />;
}
