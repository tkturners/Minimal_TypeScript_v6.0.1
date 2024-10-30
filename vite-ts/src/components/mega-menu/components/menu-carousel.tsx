import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { maxLine } from 'src/theme/styles';

import { Image } from '../../image';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  CarouselArrowBasicButtons,
} from '../../carousel';

import type { SlideProps, MenuCarouselProps } from '../types';

// ----------------------------------------------------------------------

export function MenuCarousel({ slides, displayCount = 8, sx }: MenuCarouselProps) {
  const carousel = useCarousel({ slidesToShow: displayCount, slidesToScroll: displayCount });

  return (
    <Stack sx={{ position: 'relative', pt: 2, ...sx }}>
      <Carousel carousel={carousel}>
        {slides.map((item) => (
          <CarouselItem key={item.name} item={item} />
        ))}
      </Carousel>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 2 }}>
        <CarouselArrowBasicButtons {...carousel.arrows} options={carousel.options} />
        <CarouselDotButtons
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
          sx={{ color: 'primary.main' }}
        />
      </Stack>
    </Stack>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
  item: SlideProps;
};

function CarouselItem({ item }: CarouselItemProps) {
  return (
    <Link
      component={RouterLink}
      href={item.path}
      color="inherit"
      underline="none"
      sx={{
        px: 1,
        display: 'block',
        transition: (theme) => theme.transitions.create('color'),
        '&:hover': { color: 'primary.main' },
      }}
    >
      <Image alt={item.coverUrl} src={item.coverUrl} ratio="1/1" sx={{ borderRadius: 1, mb: 1 }} />

      <Typography
        variant="caption"
        sx={(theme) => ({
          ...maxLine({ line: 2, persistent: theme.typography.caption }),
          fontWeight: 'fontWeightSemiBold',
        })}
      >
        {item.name}
      </Typography>
    </Link>
  );
}
