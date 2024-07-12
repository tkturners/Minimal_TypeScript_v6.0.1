import { CONFIG } from 'src/config-global';

import { BreadcrumbsView } from 'src/sections/_examples/mui/breadcrumbs-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Breadcrumbs | MUI - ${CONFIG.site.name}` };

export default function Page() {
  return <BreadcrumbsView />;
}
