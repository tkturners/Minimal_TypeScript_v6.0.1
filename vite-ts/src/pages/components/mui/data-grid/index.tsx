import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { DataGridView } from 'src/sections/_examples/mui/data-grid-view';

// ----------------------------------------------------------------------

const metadata = { title: `DataGrid | MUI - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <DataGridView />
    </>
  );
}
