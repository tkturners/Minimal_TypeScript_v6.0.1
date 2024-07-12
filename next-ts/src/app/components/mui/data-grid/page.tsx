import { CONFIG } from 'src/config-global';

import { DataGridView } from 'src/sections/_examples/mui/data-grid-view';

// ----------------------------------------------------------------------

export const metadata = { title: `DataGrid | MUI - ${CONFIG.site.name}` };

export default function Page() {
  return <DataGridView />;
}
