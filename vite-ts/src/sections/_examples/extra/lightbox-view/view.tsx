import type { Slide, SlideImage, SlideVideo } from 'yet-another-react-lightbox';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import { paths } from 'src/routes/paths';

import { _mock } from 'src/_mock';

import { Image } from 'src/components/image';
import { Lightbox, useLightBox } from 'src/components/lightbox';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ComponentContainer } from '../../component-block';

// ----------------------------------------------------------------------

const images = [...Array(4)].map((_, index) => ({
  src: _mock.image.cover(index + 1),
  title: 'Flamingo',
  description: 'Vicko Mozara \n Veliki zali, Dubravica, Croatia',
}));

const slides: Slide[] = [
  ...images,
  {
    type: 'video',
    width: 1280,
    height: 720,
    poster:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    sources: [
      {
        src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        type: 'video/mp4',
      },
    ],
  },
];

// ----------------------------------------------------------------------

export function LightboxView() {
  const lightbox = useLightBox(slides);

  const [state, setState] = useState({
    disableZoom: false,
    disableVideo: false,
    disableTotal: false,
    disableCaptions: false,
    disableSlideshow: false,
    disableThumbnails: false,
    disableFullscreen: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Lightbox"
          links={[{ name: 'Components', href: paths.components }, { name: 'Lightbox' }]}
          moreLink={['https://www.npmjs.com/package/yet-another-react-lightbox']}
        />
      </ComponentHero>

      <ComponentContainer>
        <Card sx={{ display: 'flex' }}>
          <Box
            gap={2}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(4, 1fr)',
            }}
            sx={{ p: 3 }}
          >
            {slides.map((slide) => {
              const thumbnail =
                slide.type === 'video' ? (slide as SlideVideo).poster : (slide as SlideImage).src;

              return (
                <Image
                  key={thumbnail}
                  alt={thumbnail}
                  src={thumbnail}
                  ratio="1/1"
                  onClick={() => lightbox.onOpen(`${thumbnail}`)}
                  sx={{ borderRadius: 1, cursor: 'pointer', width: 200 }}
                />
              );
            })}
          </Box>

          <Stack
            sx={{
              p: 2.5,
              width: 320,
              flexShrink: 0,
              borderLeft: (theme) => `solid 1px ${theme.vars.palette.divider}`,
            }}
          >
            <FormControl component="fieldset" variant="standard">
              <Stack spacing={2}>
                <FormLabel component="legend" sx={{ typography: 'body2' }}>
                  Controls
                </FormLabel>

                <FormControlLabel
                  control={
                    <Switch
                      size="small"
                      name="disableZoom"
                      checked={state.disableZoom}
                      onChange={handleChange}
                    />
                  }
                  label="Disable zoom"
                />

                <FormControlLabel
                  control={
                    <Switch
                      size="small"
                      name="disableTotal"
                      checked={state.disableTotal}
                      onChange={handleChange}
                    />
                  }
                  label="Disable total"
                />

                <FormControlLabel
                  control={
                    <Switch
                      size="small"
                      name="disableVideo"
                      checked={state.disableVideo}
                      onChange={handleChange}
                    />
                  }
                  label="Disable video"
                />

                <FormControlLabel
                  control={
                    <Switch
                      size="small"
                      name="disableCaptions"
                      checked={state.disableCaptions}
                      onChange={handleChange}
                    />
                  }
                  label="Disable captions"
                />

                <FormControlLabel
                  control={
                    <Switch
                      size="small"
                      name="disableSlideshow"
                      checked={state.disableSlideshow}
                      onChange={handleChange}
                    />
                  }
                  label="Disable slideshow"
                />

                <FormControlLabel
                  control={
                    <Switch
                      size="small"
                      name="disableThumbnails"
                      checked={state.disableThumbnails}
                      onChange={handleChange}
                    />
                  }
                  label="Disable thumbnails"
                />

                <FormControlLabel
                  control={
                    <Switch
                      size="small"
                      name="disableFullscreen"
                      checked={state.disableFullscreen}
                      onChange={handleChange}
                    />
                  }
                  label="Disable fullscreen"
                />
              </Stack>
            </FormControl>
          </Stack>
        </Card>
      </ComponentContainer>

      <Lightbox
        open={lightbox.open}
        close={lightbox.onClose}
        slides={slides}
        index={lightbox.selected}
        disableZoom={state.disableZoom}
        disableTotal={state.disableTotal}
        disableVideo={state.disableVideo}
        disableCaptions={state.disableCaptions}
        disableSlideshow={state.disableSlideshow}
        disableThumbnails={state.disableThumbnails}
        disableFullscreen={state.disableFullscreen}
      />
    </>
  );
}
