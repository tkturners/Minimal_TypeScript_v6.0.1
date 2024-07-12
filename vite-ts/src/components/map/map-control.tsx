import { ScaleControl, GeolocateControl, NavigationControl, FullscreenControl } from 'react-map-gl';

// ----------------------------------------------------------------------

type Props = {
  hideScale?: boolean;
  hideGeolocate?: boolean;
  hideFullscreen?: boolean;
  hideNavigation?: boolean;
};

export function MapControl({ hideScale, hideGeolocate, hideFullscreen, hideNavigation }: Props) {
  return (
    <>
      {!hideGeolocate && (
        <GeolocateControl position="top-left" positionOptions={{ enableHighAccuracy: true }} />
      )}

      {!hideFullscreen && <FullscreenControl position="top-left" />}

      {!hideScale && <ScaleControl position="bottom-left" />}

      {!hideNavigation && <NavigationControl position="bottom-left" />}
    </>
  );
}
