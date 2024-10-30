import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { PickerView } from 'src/sections/_examples/mui/picker-view';

// ----------------------------------------------------------------------

const metadata = { title: `Date picker | MUI - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <PickerView />
    </>
  );
}
