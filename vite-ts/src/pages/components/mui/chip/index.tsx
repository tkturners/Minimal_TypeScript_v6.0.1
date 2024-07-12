import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ChipView } from 'src/sections/_examples/mui/chip-view';

// ----------------------------------------------------------------------

const metadata = { title: `Chip | MUI - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ChipView />
    </>
  );
}
