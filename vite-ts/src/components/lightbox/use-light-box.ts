import type { Slide, SlideImage, SlideVideo } from 'yet-another-react-lightbox';

import { useState, useCallback } from 'react';

import type { UseLightBoxReturn } from './types';

// ----------------------------------------------------------------------

export function useLightBox(slides: Slide[]): UseLightBoxReturn {
  const [selected, setSelected] = useState(-1);

  const handleOpen = useCallback(
    (slideUrl: string) => {
      const slideIndex = slides.findIndex((slide) =>
        slide.type === 'video'
          ? (slide as SlideVideo).poster === slideUrl
          : (slide as SlideImage).src === slideUrl
      );

      setSelected(slideIndex);
    },
    [slides]
  );

  const handleClose = useCallback(() => {
    setSelected(-1);
  }, []);

  return {
    selected,
    open: selected >= 0,
    onOpen: handleOpen,
    onClose: handleClose,
    setSelected,
  };
}
