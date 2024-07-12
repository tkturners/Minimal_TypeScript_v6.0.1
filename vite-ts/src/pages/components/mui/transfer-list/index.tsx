import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { TransferListView } from 'src/sections/_examples/mui/transfer-list-view';

// ----------------------------------------------------------------------

const metadata = { title: `Transfer list | MUI - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <TransferListView />
    </>
  );
}
