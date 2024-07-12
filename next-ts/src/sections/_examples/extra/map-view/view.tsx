'use client';

import dynamic from 'next/dynamic';

import Skeleton from '@mui/material/Skeleton';
import { styled } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { cities as CITIES } from 'src/_mock/_map/cities';
import { countries as COUNTRIES } from 'src/_mock/_map/countries';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

const renderLoading = (
  <Skeleton
    variant="rectangular"
    sx={{ top: 0, left: 0, width: 1, height: 1, position: 'absolute' }}
  />
);

const MapHeatmap = dynamic(() => import('./heatmap').then((mod) => mod.MapHeatmap), {
  loading: () => renderLoading,
});
const MapClusters = dynamic(() => import('./clusters').then((mod) => mod.MapClusters), {
  loading: () => renderLoading,
});
const MapInteraction = dynamic(() => import('./interaction').then((mod) => mod.MapInteraction), {
  loading: () => renderLoading,
});
const MapSideBySide = dynamic(() => import('./side-by-side').then((mod) => mod.MapSideBySide), {
  loading: () => renderLoading,
});
const MapChangeTheme = dynamic(() => import('./change-theme').then((mod) => mod.MapChangeTheme), {
  loading: () => renderLoading,
});
const MapMarkersPopups = dynamic(
  () => import('./map-markers-popups').then((mod) => mod.MapMarkersPopups),
  { loading: () => renderLoading }
);
const MapDraggableMarkers = dynamic(
  () => import('./draggable-markers').then((mod) => mod.MapDraggableMarkers),
  { loading: () => renderLoading }
);
const MapViewportAnimation = dynamic(
  () => import('./viewport-animation').then((mod) => mod.MapViewportAnimation),
  { loading: () => renderLoading }
);
const MapGeoJSONAnimation = dynamic(
  () => import('./map-geo-json-animation').then((mod) => mod.MapGeoJSONAnimation),
  { loading: () => renderLoading }
);
const MapHighlightByFilter = dynamic(
  () => import('./map-highlight-by-filter').then((mod) => mod.MapHighlightByFilter),
  { loading: () => renderLoading }
);

// ----------------------------------------------------------------------

const StyledContainer = styled('div')(({ theme }) => ({
  zIndex: 0,
  height: 480,
  overflow: 'hidden',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
}));

const THEMES = {
  streets: 'mapbox://styles/mapbox/streets-v11',
  outdoors: 'mapbox://styles/mapbox/outdoors-v11',
  light: 'mapbox://styles/mapbox/light-v10',
  dark: 'mapbox://styles/mapbox/dark-v10',
  satellite: 'mapbox://styles/mapbox/satellite-v9',
  satelliteStreets: 'mapbox://styles/mapbox/satellite-streets-v11',
};

const baseSettings = { minZoom: 1 };

const DEMO = [
  {
    name: 'Change theme',
    component: (
      <StyledContainer>
        <MapChangeTheme {...baseSettings} themes={THEMES} />
      </StyledContainer>
    ),
  },
  {
    name: 'Markers & popups',
    component: (
      <StyledContainer>
        <MapMarkersPopups {...baseSettings} data={COUNTRIES} mapStyle={THEMES.light} />
      </StyledContainer>
    ),
  },
  {
    name: 'Draggable markers',
    component: (
      <StyledContainer>
        <MapDraggableMarkers {...baseSettings} mapStyle={THEMES.light} />
      </StyledContainer>
    ),
  },
  {
    name: 'Geojson animation',
    component: (
      <StyledContainer>
        <MapGeoJSONAnimation {...baseSettings} mapStyle={THEMES.satelliteStreets} />
      </StyledContainer>
    ),
  },
  {
    name: 'clusters',
    component: (
      <StyledContainer>
        <MapClusters {...baseSettings} mapStyle={THEMES.light} />
      </StyledContainer>
    ),
  },
  {
    name: 'Interaction',
    component: (
      <StyledContainer>
        <MapInteraction {...baseSettings} mapStyle={THEMES.light} />
      </StyledContainer>
    ),
  },
  {
    name: 'Viewport animation',
    component: (
      <StyledContainer>
        <MapViewportAnimation
          {...baseSettings}
          data={CITIES.filter((city) => city.state === 'Texas')}
          mapStyle={THEMES.light}
        />
      </StyledContainer>
    ),
  },
  {
    name: 'Highlight by filter',
    component: (
      <StyledContainer>
        <MapHighlightByFilter {...baseSettings} mapStyle={THEMES.light} />
      </StyledContainer>
    ),
  },
  {
    name: 'Heatmap',
    component: (
      <StyledContainer>
        <MapHeatmap {...baseSettings} mapStyle={THEMES.light} />
      </StyledContainer>
    ),
  },
  {
    name: 'Side by side',
    component: (
      <StyledContainer>
        <MapSideBySide {...baseSettings} />
      </StyledContainer>
    ),
  },
];

// ----------------------------------------------------------------------

export function MapView() {
  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Map"
          links={[{ name: 'Components', href: paths.components }, { name: 'Map' }]}
          moreLink={[
            'http://visgl.github.io/react-map-gl',
            'http://visgl.github.io/react-map-gl/examples',
          ]}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
