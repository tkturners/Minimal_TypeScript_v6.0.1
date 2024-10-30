import { CONFIG } from 'src/config-global';

import { TextfieldView } from 'src/sections/_examples/mui/textfield-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Textfield | MUI - ${CONFIG.appName}` };

export default function Page() {
  return <TextfieldView />;
}
