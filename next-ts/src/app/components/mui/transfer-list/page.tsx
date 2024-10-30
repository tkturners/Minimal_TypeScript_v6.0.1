import { CONFIG } from 'src/config-global';

import { TransferListView } from 'src/sections/_examples/mui/transfer-list-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Transfer list | MUI - ${CONFIG.appName}` };

export default function Page() {
  return <TransferListView />;
}
