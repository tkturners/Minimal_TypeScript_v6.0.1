import { CONFIG } from 'src/config-global';

import { FileManagerView } from 'src/sections/file-manager/view';

// ----------------------------------------------------------------------

export const metadata = { title: `File manager | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <FileManagerView />;
}
