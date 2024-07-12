import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';
import { varAlpha, bgGradient } from 'src/theme/styles';

import { varFade, AnimateText, MotionContainer, animateTextClasses } from 'src/components/animate';

// ----------------------------------------------------------------------

const CONTACTS = [
  { country: 'Bali', address: '508 Bridle Avenue Newnan, GA 30263', phoneNumber: '(239) 555-0108' },
  {
    country: 'London',
    address: '508 Bridle Avenue Newnan, GA 30263',
    phoneNumber: '(319) 555-0115',
  },
  {
    country: 'Prague',
    address: '508 Bridle Avenue Newnan, GA 30263',
    phoneNumber: '(252) 555-0126',
  },
  { country: 'Moscow', address: '508 Bridle', phoneNumber: '(307) 555-0133' },
];

// ----------------------------------------------------------------------

export function ContactHero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: `0deg, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.8)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.8)}`,
          imgUrl: `${CONFIG.site.basePath}/assets/images/contact/hero.webp`,
        }),
        height: { md: 560 },
        py: { xs: 10, md: 0 },
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Container component={MotionContainer}>
        <Box
          sx={{
            bottom: { md: 80 },
            position: { md: 'absolute' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <AnimateText
            component="h1"
            variant="h1"
            text={['Where', 'to find us?']}
            variants={varFade({ distance: 24 }).inUp}
            sx={{
              color: 'common.white',
              [`& .${animateTextClasses.line}[data-index="0"]`]: {
                [`& .${animateTextClasses.word}[data-index="0"]`]: { color: 'primary.main' },
              },
            }}
          />

          <Box
            columnGap={{ xs: 2, md: 5 }}
            rowGap={{ xs: 5, md: 0 }}
            display={{ xs: 'grid', md: 'flex' }}
            gridTemplateColumns={{ xs: 'repeat(2, 1fr)' }}
            sx={{ mt: 5, color: 'common.white' }}
          >
            {CONTACTS.map((contact) => (
              <Box key={contact.country}>
                <m.div variants={varFade({ distance: 24 }).inUp}>
                  <Typography variant="h6" gutterBottom>
                    {contact.country}
                  </Typography>
                </m.div>

                <m.div variants={varFade({ distance: 24 }).inUp}>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {contact.address}
                  </Typography>
                </m.div>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
