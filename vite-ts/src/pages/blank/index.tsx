import { Helmet } from 'react-helmet-async';

import { Typography } from '@mui/material';
import Container from '@mui/material/Container';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

const metadata = { title: `Blank - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Container>
        <Typography variant="h4">Blank</Typography>
      </Container>
    </>
  );
}
