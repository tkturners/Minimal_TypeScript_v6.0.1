import type { ITourItem } from 'src/types/tour';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

import { fDate } from 'src/utils/format-time';

import { TOUR_SERVICE_OPTIONS } from 'src/_mock';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { Markdown } from 'src/components/markdown';
import { Lightbox, useLightBox } from 'src/components/lightbox';

// ----------------------------------------------------------------------

type Props = {
  tour?: ITourItem;
};

export function TourDetailsContent({ tour }: Props) {
  const slides = tour?.images.map((slide) => ({ src: slide })) || [];

  const {
    selected: selectedImage,
    open: openLightbox,
    onOpen: handleOpenLightbox,
    onClose: handleCloseLightbox,
  } = useLightBox(slides);

  const renderGallery = (
    <>
      <Box
        gap={1}
        display="grid"
        gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        sx={{ mb: { xs: 3, md: 5 } }}
      >
        <Image
          alt={slides[0].src}
          src={slides[0].src}
          ratio="1/1"
          onClick={() => handleOpenLightbox(slides[0].src)}
          sx={{
            borderRadius: 2,
            cursor: 'pointer',
            transition: (theme) => theme.transitions.create('opacity'),
            '&:hover': { opacity: 0.8 },
          }}
        />

        <Box gap={1} display="grid" gridTemplateColumns="repeat(2, 1fr)">
          {slides.slice(1, 5).map((slide) => (
            <Image
              key={slide.src}
              alt={slide.src}
              src={slide.src}
              ratio="1/1"
              onClick={() => handleOpenLightbox(slide.src)}
              sx={{
                borderRadius: 2,
                cursor: 'pointer',
                transition: (theme) => theme.transitions.create('opacity'),
                '&:hover': { opacity: 0.8 },
              }}
            />
          ))}
        </Box>
      </Box>

      <Lightbox
        index={selectedImage}
        slides={slides}
        open={openLightbox}
        close={handleCloseLightbox}
      />
    </>
  );

  const renderHead = (
    <>
      <Stack direction="row" sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          {tour?.name}
        </Typography>

        <IconButton>
          <Iconify icon="solar:share-bold" />
        </IconButton>

        <Checkbox
          defaultChecked
          color="error"
          icon={<Iconify icon="solar:heart-outline" />}
          checkedIcon={<Iconify icon="solar:heart-bold" />}
          inputProps={{ id: 'favorite-checkbox', 'aria-label': 'Favorite checkbox' }}
        />
      </Stack>

      <Stack spacing={3} direction="row" flexWrap="wrap" alignItems="center">
        <Stack direction="row" alignItems="center" spacing={0.5} sx={{ typography: 'body2' }}>
          <Iconify icon="eva:star-fill" sx={{ color: 'warning.main' }} />
          <Box component="span" sx={{ typography: 'subtitle2' }}>
            {tour?.ratingNumber}
          </Box>
          <Link sx={{ color: 'text.secondary' }}>(234 reviews)</Link>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={0.5} sx={{ typography: 'body2' }}>
          <Iconify icon="mingcute:location-fill" sx={{ color: 'error.main' }} />
          {tour?.destination}
        </Stack>

        <Stack direction="row" alignItems="center" spacing={0.5} sx={{ typography: 'subtitle2' }}>
          <Iconify icon="solar:flag-bold" sx={{ color: 'info.main' }} />
          <Box component="span" sx={{ typography: 'body2', color: 'text.secondary' }}>
            Guide by
          </Box>
          {tour?.tourGuides.map((tourGuide) => tourGuide.name).join(', ')}
        </Stack>
      </Stack>
    </>
  );

  const renderOverview = (
    <Box
      gap={3}
      display="grid"
      gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
    >
      {[
        {
          label: 'Available',
          value: `${fDate(tour?.available.startDate)} - ${fDate(tour?.available.endDate)}`,
          icon: <Iconify icon="solar:calendar-date-bold" />,
        },
        {
          label: 'Contact name',
          value: tour?.tourGuides.map((tourGuide) => tourGuide.phoneNumber).join(', '),
          icon: <Iconify icon="solar:user-rounded-bold" />,
        },
        {
          label: 'Durations',
          value: tour?.durations,
          icon: <Iconify icon="solar:clock-circle-bold" />,
        },
        {
          label: 'Contact phone',
          value: tour?.tourGuides.map((tourGuide) => tourGuide.name).join(', '),
          icon: <Iconify icon="solar:phone-bold" />,
        },
      ].map((item) => (
        <Stack key={item.label} spacing={1.5} direction="row">
          {item.icon}
          <ListItemText
            primary={item.label}
            secondary={item.value}
            primaryTypographyProps={{ mb: 0.5, typography: 'body2', color: 'text.secondary' }}
            secondaryTypographyProps={{
              component: 'span',
              color: 'text.primary',
              typography: 'subtitle2',
            }}
          />
        </Stack>
      ))}
    </Box>
  );

  const renderContent = (
    <>
      <Markdown children={tour?.content} />

      <Stack spacing={2}>
        <Typography variant="h6"> Services</Typography>

        <Box
          rowGap={2}
          display="grid"
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        >
          {TOUR_SERVICE_OPTIONS.map((service) => (
            <Stack
              key={service.label}
              spacing={1}
              direction="row"
              alignItems="center"
              sx={{ ...(tour?.services.includes(service.label) && { color: 'text.disabled' }) }}
            >
              <Iconify
                icon="eva:checkmark-circle-2-outline"
                sx={{
                  color: 'primary.main',
                  ...(tour?.services.includes(service.label) && { color: 'text.disabled' }),
                }}
              />
              {service.label}
            </Stack>
          ))}
        </Box>
      </Stack>
    </>
  );

  return (
    <>
      {renderGallery}

      <Stack sx={{ maxWidth: 720, mx: 'auto' }}>
        {renderHead}

        <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

        {renderOverview}

        <Divider sx={{ borderStyle: 'dashed', mt: 5, mb: 2 }} />

        {renderContent}
      </Stack>
    </>
  );
}
