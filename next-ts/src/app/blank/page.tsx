import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

export const metadata = { title: `Blank - ${CONFIG.appName}` };

export default function Page() {
  return (
    <Container>
      <Typography variant="h4">Blank</Typography>
    </Container>
  );
}
