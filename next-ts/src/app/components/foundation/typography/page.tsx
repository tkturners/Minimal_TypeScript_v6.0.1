import { CONFIG } from 'src/config-global';

import { TypographyView } from 'src/sections/_examples/foundation/typography-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Typography | Foundations - ${CONFIG.site.name}` };

export default function Page() {
  return <TypographyView />;
}
