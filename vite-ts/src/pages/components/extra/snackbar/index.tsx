import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { SnackbarView } from 'src/sections/_examples/extra/snackbar-view';

// ----------------------------------------------------------------------

const metadata = { title: `Snackbar | Components - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <SnackbarView />
    </>
  );
}
