import { styled } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { cities as CITIES } from 'src/_mock/_map/cities';
import { countries as COUNTRIES } from 'src/_mock/_map/countries';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { MapHeatmap } from './heatmap';
import { MapClusters } from './clusters';
import { MapInteraction } from './interaction';
import { MapSideBySide } from './side-by-side';
import { MapChangeTheme } from './change-theme';
import { ComponentHero } from '../../component-hero';
import { MapMarkersPopups } from './map-markers-popups';
import { MapDraggableMarkers } from './draggable-markers';
import { MapViewportAnimation } from './viewport-animation';
import { MapGeoJSONAnimation } from './map-geo-json-animation';
import { ScrollToViewTemplate } from '../../component-template';
import { MapHighlightByFilter } from './map-highlight-by-filter';

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
