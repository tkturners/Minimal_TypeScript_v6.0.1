import { CONFIG } from 'src/config-global';

import { ListView } from 'src/sections/_examples/mui/list-view';

// ----------------------------------------------------------------------

export const metadata = { title: `List | MUI - ${CONFIG.appName}` };

export default function Page() {
  return <ListView />;
}
