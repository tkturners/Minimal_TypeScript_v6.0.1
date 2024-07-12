import { CONFIG } from 'src/config-global';

import { ProgressView } from 'src/sections/_examples/mui/progress-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Progress | MUI - ${CONFIG.site.name}` };

export default function Page() {
  return <ProgressView />;
}
