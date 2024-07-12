import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { TooltipView } from 'src/sections/_examples/mui/tooltip-view';

// ----------------------------------------------------------------------

const metadata = { title: `Tooltip | MUI - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <TooltipView />
    </>
  );
}
