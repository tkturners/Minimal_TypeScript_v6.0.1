import { CONFIG } from 'src/config-global';

import { LabelView } from 'src/sections/_examples/extra/label-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Label | Components - ${CONFIG.site.name}` };

export default function Page() {
  return <LabelView />;
}
