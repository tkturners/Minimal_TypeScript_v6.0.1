import type { BoxProps } from '@mui/material/Box';
import type { CardProps } from '@mui/material/Card';

import Autoplay from 'embla-carousel-autoplay';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Image } from 'src/components/image';
import { Carousel, useCarousel, CarouselDotButtons } from 'src/components/carousel';

// ----------------------------------------------------------------------

type Props = CardProps & {
  list: {
    id: string;
    name: string;
    coverUrl: string;
  }[];
};

export function EcommerceNewProducts({ list, sx, ...other }: Props) {
  const carousel = useCarousel({ loop: true }, [Autoplay({ playOnInit: true, delay: 8000 })]);

  return (
    <Card sx={{ bgcolor: 'common.black', ...sx }} {...other}>
      <CarouselDotButtons
        scrollSnaps={carousel.dots.scrollSnaps}
        selectedIndex={carousel.dots.selectedIndex}
        onClickDot={carousel.dots.onClickDot}
        sx={{ right: 20, bottom: 20, position: 'absolute', color: 'primary.light' }}
      />

      <Carousel carousel={carousel}>
        {list.map((item) => (
          <CarouselItem key={item.id} item={item} />
        ))}
      </Carousel>
    </Card>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = BoxProps & {
  item: Props['list'][number];
};

function CarouselItem({ item, ...other }: CarouselItemProps) {
  const theme = useTheme();

  return (
    <Box sx={{ width: 1, position: 'relative', ...other }}>
      <Box
        sx={{
          p: 3,
          left: 0,
          width: 1,
          bottom: 0,
          zIndex: 9,
          display: 'flex',
          position: 'absolute',
          color: 'common.white',
          flexDirection: 'column',
        }}
      >
        <Typography variant="overline" sx={{ opacity: 0.48 }}>
          New
        </Typography>

        <Link color="inherit" underline="none" variant="h5" noWrap sx={{ mt: 1, mb: 3 }}>
          {item.name}
        </Link>

        <Button color="primary" variant="contained" sx={{ alignSelf: 'flex-start' }}>
          Buy now
        </Button>
      </Box>

      <Image
        alt={item.name}
        src={item.coverUrl}
        slotProps={{
          overlay: {
            background: `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.grey['900Channel'], 0)} 0%, ${theme.vars.palette.grey[900]} 75%)`,
          },
        }}
        sx={{
          width: 1,
          height: { xs: 288, xl: 320 },
        }}
      />
    </Box>
  );
}
