import { CONFIG } from 'src/config-global';

import { SnackbarView } from 'src/sections/_examples/extra/snackbar-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Snackbar | Components - ${CONFIG.site.name}` };

export default function Page() {
  return <SnackbarView />;
}
