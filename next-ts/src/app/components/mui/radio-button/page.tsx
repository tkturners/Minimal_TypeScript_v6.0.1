import { CONFIG } from 'src/config-global';

import { RadioButtonView } from 'src/sections/_examples/mui/radio-button-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Radio button | MUI - ${CONFIG.site.name}` };

export default function Page() {
  return <RadioButtonView />;
}
