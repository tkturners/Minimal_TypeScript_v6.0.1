import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { _socials, _carouselsMembers } from 'src/_mock';

import { Image } from 'src/components/image';
import { Iconify, SocialIcon } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import { Carousel, useCarousel, CarouselArrowFloatButtons } from 'src/components/carousel';

// ----------------------------------------------------------------------

export function AboutTeam() {
  const carousel = useCarousel({
    align: 'start',
    slideSpacing: '24px',
    slidesToShow: { xs: 1, sm: 2, md: 3, lg: 4 },
  });

  return (
    <Container component={MotionViewport} sx={{ textAlign: 'center', py: { xs: 10, md: 15 } }}>
      <m.div variants={varFade().inDown}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Dream team
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ my: 3 }}>
          Great team is the key
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography sx={{ mx: 'auto', maxWidth: 640, color: 'text.secondary' }}>
          Minimal will provide you support if you have any problems, our support team will reply
          within a day and we also have detailed documentation.
        </Typography>
      </m.div>

      <Stack sx={{ position: 'relative' }}>
        <CarouselArrowFloatButtons
          {...carousel.arrows}
          options={carousel.options}
          slotProps={{
            prevBtn: { sx: { left: { xs: -8, md: -40 } } },
            nextBtn: { sx: { right: { xs: -8, md: -40 } } },
          }}
        />

        <Carousel carousel={carousel} sx={{ px: 0.5 }}>
          {_carouselsMembers.map((member) => (
            <Box
              key={member.id}
              component={m.div}
              variants={varFade().in}
              sx={{ py: { xs: 8, md: 10 } }}
            >
              <MemberCard member={member} />
            </Box>
          ))}
        </Carousel>
      </Stack>

      <Button
        size="large"
        color="inherit"
        variant="outlined"
        endIcon={<Iconify icon="eva:arrow-ios-forward-fill" width={24} />}
        sx={{ mx: 'auto' }}
      >
        All members
      </Button>
    </Container>
  );
}

// ----------------------------------------------------------------------

type MemberCardProps = {
  member: (typeof _carouselsMembers)[0];
};

function MemberCard({ member }: MemberCardProps) {
  return (
    <Card>
      <Typography variant="subtitle1" sx={{ mt: 2.5, mb: 0.5 }}>
        {member.name}
      </Typography>

      <Typography variant="body2" sx={{ mb: 2.5, color: 'text.secondary' }}>
        {member.role}
      </Typography>

      <Box sx={{ px: 1 }}>
        <Image alt={member.name} src={member.avatarUrl} ratio="1/1" sx={{ borderRadius: 2 }} />
      </Box>

      <Stack direction="row" alignItems="center" justifyContent="center" sx={{ p: 2 }}>
        {_socials.map((social) => (
          <IconButton key={social.name}>
            <SocialIcon icon={social.name} />
          </IconButton>
        ))}
      </Stack>
    </Card>
  );
}
