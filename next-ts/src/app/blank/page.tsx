import { Typography } from '@mui/material';
import Container from '@mui/material/Container';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

export const metadata = { title: `Blank - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <Container>
      <Typography variant="h4">Blank</Typography>
    </Container>
  );
}
