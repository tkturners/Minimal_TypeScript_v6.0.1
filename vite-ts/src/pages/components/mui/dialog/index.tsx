import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { DialogView } from 'src/sections/_examples/mui/dialog-view';

// ----------------------------------------------------------------------

const metadata = { title: `Dialog | MUI - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <DialogView />
    </>
  );
}
