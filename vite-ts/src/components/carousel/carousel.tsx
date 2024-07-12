import { Children, isValidElement } from 'react';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import { carouselClasses } from './classes';
import { CarouselSlide } from './components/carousel-slide';

import type { CarouselProps, CarouselOptions } from './types';

// ----------------------------------------------------------------------

type StyledProps = Pick<CarouselOptions, 'axis' | 'slideSpacing'>;

export const StyledRoot = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'axis',
})<StyledProps>(({ axis }) => ({
  margin: 'auto',
  maxWidth: '100%',
  overflow: 'hidden',
  position: 'relative',
  ...(axis === 'y' && {
    height: '100%',
  }),
}));

export const StyledContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'axis' && prop !== 'slideSpacing',
})<StyledProps>(({ axis, slideSpacing }) => ({
  display: 'flex',
  backfaceVisibility: 'hidden',
  ...(axis === 'x' && {
    touchAction: 'pan-y pinch-zoom',
    marginLeft: `calc(${slideSpacing} * -1)`,
  }),
  ...(axis === 'y' && {
    height: '100%',
    flexDirection: 'column',
    touchAction: 'pan-x pinch-zoom',
    marginTop: `calc(${slideSpacing} * -1)`,
  }),
}));

// ----------------------------------------------------------------------

export function Carousel({ carousel, children, sx, slotProps }: CarouselProps) {
  const { mainRef, options } = carousel;

  const axis = options?.axis ?? 'x';

  const slideSpacing = options?.slideSpacing ?? '0px';

  const direction = options?.direction ?? 'ltr';

  const renderChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      const reactChild = child as React.ReactElement<{ key?: React.Key }>;

      return (
        <CarouselSlide key={reactChild.key} options={carousel.options} sx={slotProps?.slide}>
          {child}
        </CarouselSlide>
      );
    }
    return null;
  });

  return (
    <StyledRoot sx={sx} axis={axis} ref={mainRef} dir={direction} className={carouselClasses.root}>
      <StyledContainer
        component="ul"
        axis={axis}
        slideSpacing={slideSpacing}
        className={carouselClasses.container}
        sx={{
          ...(carousel.pluginNames?.includes('autoHeight') && {
            alignItems: 'flex-start',
            transition: (theme) =>
              theme.transitions.create(['height'], {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.shorter,
              }),
          }),
          ...slotProps?.container,
        }}
      >
        {renderChildren}
      </StyledContainer>
    </StyledRoot>
  );
}
