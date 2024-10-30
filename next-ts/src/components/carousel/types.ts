import type { Theme, SxProps } from '@mui/material/styles';
import type { UseEmblaCarouselType } from 'embla-carousel-react';
import type { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';

// ----------------------------------------------------------------------

/**
 * Dot Buttons
 */
export type UseCarouselDotsReturn = {
  dotCount: number;
  selectedIndex: number;
  scrollSnaps: number[];
  onClickDot: (index: number) => void;
};

export type CarouselDotButtonsProps = Omit<UseCarouselDotsReturn, 'dotCount'> & {
  gap?: number;
  variant?: 'circular' | 'rounded' | 'number';
  slotProps?: {
    dot?: {
      size?: number;
      sx?: SxProps<Theme>;
      selected?: SxProps<Theme>;
    };
  };
};

// ----------------------------------------------------------------------

/**
 * Prev & Next Buttons
 */
export type UseCarouselArrowsReturn = {
  disablePrev: boolean;
  disableNext: boolean;
  onClickPrev: () => void;
  onClickNext: () => void;
};

export type CarouselArrowButtonProps = {
  svgSize?: number;
  variant: 'prev' | 'next';
  svgIcon?: React.ReactNode;
  options?: CarouselArrowButtonsProps['options'];
};

export type CarouselArrowButtonsProps = UseCarouselArrowsReturn & {
  totalSlides?: number;
  selectedIndex?: number;
  options?: Partial<CarouselOptions>;
  slotProps?: {
    prevBtn?: Pick<CarouselArrowButtonProps, 'svgIcon' | 'svgSize'> & {
      sx?: SxProps<Theme>;
    };
    nextBtn?: Pick<CarouselArrowButtonProps, 'svgIcon' | 'svgSize'> & {
      sx?: SxProps<Theme>;
    };
  };
};

// ----------------------------------------------------------------------

/**
 * Thumbs
 */
export type UseCarouselThumbsReturn = {
  selectedIndex: number;
  thumbsApi?: EmblaCarouselType;
  thumbsRef: UseEmblaCarouselType[0];
  onClickThumb: (index: number) => void;
};

export type CarouselThumbProps = {
  src: string;
  index: number;
  selected: boolean;
};

export type CarouselThumbsProps = {
  options?: Partial<CarouselOptions>;
  slotProps?: {
    slide?: SxProps<Theme>;
    container?: SxProps<Theme>;
    disableMask?: boolean;
  };
};

// ----------------------------------------------------------------------

/**
 * Progress
 */
export type UseCarouselProgressReturn = {
  value: number;
};

export type CarouselProgressBarProps = UseCarouselProgressReturn;

// ----------------------------------------------------------------------

/**
 * Autoplay
 */
export type UseCarouselAutoPlayReturn = {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onClickAutoplay: (callback: () => void) => void;
};

// ----------------------------------------------------------------------

/**
 * Slide
 */
export type CarouselSlideProps = {
  options?: Partial<CarouselOptions>;
};

// ----------------------------------------------------------------------

/**
 * Carousel
 */
export type CarouselBaseOptions = EmblaOptionsType & {
  slideSpacing?: string;
  parallax?: boolean | number;
  slidesToShow?: string | number | { [key: string]: string | number };
};

export type CarouselOptions = CarouselBaseOptions & {
  thumbs?: CarouselBaseOptions;
  breakpoints?: {
    [key: string]: Omit<CarouselBaseOptions, 'slidesToShow'>;
  };
};

export type UseCarouselReturn = {
  pluginNames?: string[];
  options?: CarouselOptions;
  mainRef: UseEmblaCarouselType[0];
  mainApi?: EmblaCarouselType;
  thumbs: UseCarouselThumbsReturn;
  dots: UseCarouselDotsReturn;
  autoplay: UseCarouselAutoPlayReturn;
  progress: UseCarouselProgressReturn;
  autoScroll: UseCarouselAutoPlayReturn;
  arrows: UseCarouselArrowsReturn;
};

export type CarouselProps = {
  carousel: UseCarouselReturn;
  children: React.ReactNode;
  slotProps?: {
    container?: SxProps<Theme>;
    slide?: SxProps<Theme>;
  };
};
