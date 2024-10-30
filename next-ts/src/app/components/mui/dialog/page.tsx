import { CONFIG } from 'src/config-global';

import { DialogView } from 'src/sections/_examples/mui/dialog-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Dialog | MUI - ${CONFIG.appName}` };

export default function Page() {
  return <DialogView />;
}
