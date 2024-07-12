import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { StepperView } from 'src/sections/_examples/mui/stepper-view';

// ----------------------------------------------------------------------

const metadata = { title: `Stepper | MUI - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <StepperView />
    </>
  );
}
