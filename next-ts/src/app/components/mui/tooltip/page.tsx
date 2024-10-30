import { CONFIG } from 'src/config-global';

import { TooltipView } from 'src/sections/_examples/mui/tooltip-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Tooltip | MUI - ${CONFIG.appName}` };

export default function Page() {
  return <TooltipView />;
}
