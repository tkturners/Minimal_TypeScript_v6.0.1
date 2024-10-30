import type { BoxProps } from '@mui/material/Box';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { MapPopup, MapMarker, MapControl } from 'src/components/map';

// ----------------------------------------------------------------------

const Map = dynamic(() => import('src/components/map').then((mod) => mod.Map), {
  loading: () => (
    <Skeleton
      variant="rectangular"
      sx={{ top: 0, left: 0, width: 1, height: 1, position: 'absolute' }}
    />
  ),
});

// ----------------------------------------------------------------------

type ContactMapProps = BoxProps & {
  contacts: {
    latlng: number[];
    address: string;
    phoneNumber: string;
  }[];
};

export function ContactMap({ contacts, sx, ...other }: ContactMapProps) {
  const theme = useTheme();

  const [popupInfo, setPopupInfo] = useState<ContactMapProps['contacts'][0] | null>(null);

  return (
    <Box
      sx={{
        zIndex: 0,
        borderRadius: 1.5,
        overflow: 'hidden',
        position: 'relative',
        height: { xs: 320, md: 560 },
        ...sx,
      }}
      {...other}
    >
      <Map
        initialViewState={{ latitude: 12, longitude: 42, zoom: 2 }}
        mapStyle={`mapbox://styles/mapbox/${theme.palette.mode === 'light' ? 'light' : 'dark'}-v10`}
      >
        <MapControl hideGeolocate />

        {contacts.map((country, index) => (
          <MapMarker
            key={`marker-${index}`}
            latitude={country.latlng[0]}
            longitude={country.latlng[1]}
            onClick={(event) => {
              event.originalEvent.stopPropagation();
              setPopupInfo(country);
            }}
          />
        ))}

        {popupInfo && (
          <MapPopup
            longitude={popupInfo.latlng[1]}
            latitude={popupInfo.latlng[0]}
            onClose={() => setPopupInfo(null)}
          >
            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
              Address
            </Typography>

            <Typography component="div" variant="caption">
              {popupInfo.address}
            </Typography>

            <Typography
              component="div"
              variant="caption"
              sx={{ mt: 1, display: 'flex', alignItems: 'center' }}
            >
              <Iconify icon="solar:phone-bold" width={14} sx={{ mr: 0.5 }} />
              {popupInfo.phoneNumber}
            </Typography>
          </MapPopup>
        )}
      </Map>
    </Box>
  );
}
