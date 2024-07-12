import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { BreadcrumbsView } from 'src/sections/_examples/mui/breadcrumbs-view';

// ----------------------------------------------------------------------

const metadata = { title: `Breadcrumbs | MUI - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <BreadcrumbsView />
    </>
  );
}
