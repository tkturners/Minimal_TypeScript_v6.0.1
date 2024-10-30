import { CONFIG } from 'src/config-global';

import { AlertView } from 'src/sections/_examples/mui/alert-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Alert | MUI - ${CONFIG.appName}` };

export default function Page() {
  return <AlertView />;
}
