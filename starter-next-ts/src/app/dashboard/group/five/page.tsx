import { CONFIG } from 'src/config-global';

import { BlankView } from 'src/sections/blank/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Page five | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return <BlankView title="Page five" />;
}
