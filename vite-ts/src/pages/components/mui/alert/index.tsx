import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { AlertView } from 'src/sections/_examples/mui/alert-view';

// ----------------------------------------------------------------------

const metadata = { title: `Alert | MUI - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <AlertView />
    </>
  );
}
