import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { PermissionDeniedView } from 'src/sections/permission/view';

// ----------------------------------------------------------------------

const metadata = { title: `Permission | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <PermissionDeniedView />
    </>
  );
}
