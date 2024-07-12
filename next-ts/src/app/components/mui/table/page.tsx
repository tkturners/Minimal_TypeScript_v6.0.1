import { CONFIG } from 'src/config-global';

import { TableView } from 'src/sections/_examples/mui/table-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Table | MUI - ${CONFIG.site.name}` };

export default function Page() {
  return <TableView />;
}
