import { CONFIG } from 'src/config-global';

import { UploadView } from 'src/sections/_examples/extra/upload-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Upload | Components - ${CONFIG.site.name}` };

export default function Page() {
  return <UploadView />;
}
