import type { MapRef, MapProps } from 'react-map-gl';

import { useRef, useState, useCallback } from 'react';

import { Map, MapControl } from 'src/components/map';

import { ControlPanel } from './control-panel';

import type { CityProps } from './control-panel';

// ----------------------------------------------------------------------

type Props = MapProps & {
  data: CityProps[];
};

export function MapViewportAnimation({ data, ...other }: Props) {
  const mapRef = useRef<MapRef>(null);

  const [selectedCity, setSelectedCity] = useState(data[2].city);

  const onSelectCity = useCallback(
    (
      event: React.ChangeEvent<HTMLInputElement>,
      {
        longitude,
        latitude,
      }: {
        longitude: number;
        latitude: number;
      }
    ) => {
      setSelectedCity(event.target.value);
      mapRef.current?.flyTo({ center: [longitude, latitude], duration: 2000 });
    },
    []
  );

  return (
    <Map
      initialViewState={{
        latitude: 37.7751,
        longitude: -122.4193,
        zoom: 11,
        bearing: 0,
        pitch: 0,
      }}
      ref={mapRef}
      {...other}
    >
      <MapControl />

      <ControlPanel data={data} selectedCity={selectedCity} onSelectCity={onSelectCity} />
    </Map>
  );
}
