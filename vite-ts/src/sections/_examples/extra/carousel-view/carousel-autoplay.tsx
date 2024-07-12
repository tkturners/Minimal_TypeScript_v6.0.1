import Autoplay from 'embla-carousel-autoplay';

import Box from '@mui/material/Box';

import { Image } from 'src/components/image';
import { Carousel, useCarousel, CarouselDotButtons } from 'src/components/carousel';

import { IndexLabel, PlayButton } from './elements';

// ----------------------------------------------------------------------

type Props = {
  data: {
    id: string;
    title: string;
    coverUrl: string;
    description: string;
  }[];
};

export function CarouselAutoplay({ data }: Props) {
  const carousel = useCarousel({ loop: true }, [Autoplay({ playOnInit: false, delay: 2000 })]);

  return (
    <>
      <PlayButton
        isPlaying={carousel.autoplay.isPlaying}
        onClick={carousel.autoplay.onTogglePlay}
      />

      <Box sx={{ position: 'relative' }}>
        <Carousel carousel={carousel} sx={{ borderRadius: 2 }}>
          {data.map((item, index) => (
            <CarouselItem key={item.id} index={index} item={item} />
          ))}
        </Carousel>

        <CarouselDotButtons
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
          sx={{ top: 16, right: 16, position: 'absolute', color: 'common.white' }}
        />
      </Box>
    </>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
  index: number;
  item: Props['data'][number];
};

function CarouselItem({ item, index }: CarouselItemProps) {
  return (
    <Box sx={{ position: 'relative' }}>
      <IndexLabel index={index + 1} />
      <Image
        visibleByDefault
        alt={item.title}
        src={item.coverUrl}
        ratio={{ xs: '4/3', sm: '16/10' }}
      />
    </Box>
  );
}
