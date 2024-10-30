import { CONFIG } from 'src/config-global';

import { TypographyView } from 'src/sections/_examples/foundation/typography-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Typography | Foundations - ${CONFIG.appName}` };

export default function Page() {
  return <TypographyView />;
}
