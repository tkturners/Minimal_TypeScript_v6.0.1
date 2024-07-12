import { CONFIG } from 'src/config-global';

import { StepperView } from 'src/sections/_examples/mui/stepper-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Stepper | MUI - ${CONFIG.site.name}` };

export default function Page() {
  return <StepperView />;
}
