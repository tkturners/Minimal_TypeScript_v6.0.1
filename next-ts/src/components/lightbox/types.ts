import type { LightboxExternalProps } from 'yet-another-react-lightbox';

// ----------------------------------------------------------------------

export type LightBoxProps = LightboxExternalProps & {
  disableZoom?: boolean;
  disableVideo?: boolean;
  disableTotal?: boolean;
  disableCaptions?: boolean;
  disableSlideshow?: boolean;
  disableThumbnails?: boolean;
  disableFullscreen?: boolean;
  onGetCurrentIndex?: (index: number) => void;
};

export type UseLightBoxReturn = {
  open: boolean;
  selected: number;
  onClose: () => void;
  onOpen: (slideUrl: string) => void;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
};
