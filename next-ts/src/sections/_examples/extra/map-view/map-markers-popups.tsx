import type { MapProps } from 'react-map-gl';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Image } from 'src/components/image';
import { FlagIcon } from 'src/components/iconify';
import { Map, MapPopup, MapMarker, MapControl } from 'src/components/map';

// ----------------------------------------------------------------------

type CountryProps = {
  name: string;
  capital: string;
  latlng: number[];
  photoUrl: string;
  timezones: string[];
  country_code: string;
};

type Props = MapProps & {
  data: CountryProps[];
};

export function MapMarkersPopups({ data, ...other }: Props) {
  const [popupInfo, setPopupInfo] = useState<CountryProps | null>(null);

  return (
    <Map initialViewState={{ zoom: 2 }} {...other}>
      <MapControl />

      {data.map((city, index) => (
        <MapMarker
          key={`marker-${index}`}
          latitude={city.latlng[0]}
          longitude={city.latlng[1]}
          onClick={(event) => {
            event.originalEvent.stopPropagation();
            setPopupInfo(city);
          }}
        />
      ))}

      {popupInfo && (
        <MapPopup
          latitude={popupInfo.latlng[0]}
          longitude={popupInfo.latlng[1]}
          onClose={() => setPopupInfo(null)}
        >
          <Box gap={0.75} display="flex" alignItems="center" sx={{ mb: 1 }}>
            <FlagIcon code={popupInfo.country_code} />

            <Typography variant="subtitle2">{popupInfo.name}</Typography>
          </Box>

          <Typography component="div" variant="caption">
            Timezones: {popupInfo.timezones}
          </Typography>

          <Typography component="div" variant="caption">
            Lat: {popupInfo.latlng[0]}
          </Typography>

          <Typography component="div" variant="caption">
            Long: {popupInfo.latlng[1]}
          </Typography>

          <Image
            alt={popupInfo.name}
            src={popupInfo.photoUrl}
            ratio="4/3"
            sx={{ mt: 1, borderRadius: 1 }}
          />
        </MapPopup>
      )}
    </Map>
  );
}
