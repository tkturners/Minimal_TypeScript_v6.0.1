import { CONFIG } from 'src/config-global';

import { ButtonView } from 'src/sections/_examples/mui/button-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Button | MUI - ${CONFIG.site.name}` };

export default function Page() {
  return <ButtonView />;
}
