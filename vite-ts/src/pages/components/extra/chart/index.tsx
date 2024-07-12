import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ChartView } from 'src/sections/_examples/extra/chart-view';

// ----------------------------------------------------------------------

const metadata = { title: `Chart | Components - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ChartView />
    </>
  );
}
