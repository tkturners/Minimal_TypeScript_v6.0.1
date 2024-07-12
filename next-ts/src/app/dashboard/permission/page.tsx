import { CONFIG } from 'src/config-global';

import { PermissionDeniedView } from 'src/sections/permission/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Permission | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return <PermissionDeniedView />;
}
