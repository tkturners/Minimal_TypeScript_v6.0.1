import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { TableView } from 'src/sections/_examples/mui/table-view';

// ----------------------------------------------------------------------

const metadata = { title: `Table | MUI - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <TableView />
    </>
  );
}
