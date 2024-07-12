import type { ITourItem, ITourGuide } from 'src/types/tour';

import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo, useEffect, useCallback } from 'react';

import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControlLabel from '@mui/material/FormControlLabel';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { fIsAfter } from 'src/utils/format-time';

import { _tags, _tourGuides, TOUR_SERVICE_OPTIONS } from 'src/_mock';

import { toast } from 'src/components/snackbar';
import { Form, Field, schemaHelper } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export type NewTourSchemaType = zod.infer<typeof NewTourSchema>;

export const NewTourSchema = zod
  .object({
    name: zod.string().min(1, { message: 'Name is required!' }),
    content: schemaHelper.editor({ message: { required_error: 'Content is required!' } }),
    images: schemaHelper.files({ message: { required_error: 'Images is required!' } }),
    tourGuides: zod
      .array(
        zod.object({
          id: zod.string(),
          name: zod.string(),
          avatarUrl: zod.string(),
          phoneNumber: zod.string(),
        })
      )
      .nonempty({ message: 'Must have at least 1 guide!' }),
    available: zod.object({
      startDate: schemaHelper.date({ message: { required_error: 'Start date is required!' } }),
      endDate: schemaHelper.date({ message: { required_error: 'End date is required!' } }),
    }),
    durations: zod.string().min(1, { message: 'Durations is required!' }),
    destination: schemaHelper.objectOrNull<string | null>({
      message: { required_error: 'Destination is required!' },
    }),
    services: zod.string().array().min(2, { message: 'Must have at least 2 items!' }),
    tags: zod.string().array().min(2, { message: 'Must have at least 2 items!' }),
  })
  .refine((data) => !fIsAfter(data.available.startDate, data.available.endDate), {
    message: 'End date cannot be earlier than start date!',
    path: ['available.endDate'],
  });

// ----------------------------------------------------------------------

type Props = {
  currentTour?: ITourItem;
};

export function TourNewEditForm({ currentTour }: Props) {
  const router = useRouter();

  const defaultValues = useMemo(
    () => ({
      name: currentTour?.name || '',
      content: currentTour?.content || '',
      images: currentTour?.images || [],
      tourGuides: currentTour?.tourGuides || [],
      available: {
        startDate: currentTour?.available.startDate || null,
        endDate: currentTour?.available.endDate || null,
      },
      durations: currentTour?.durations || '',
      destination: currentTour?.destination || '',
      services: currentTour?.services || [],
      tags: currentTour?.tags || [],
    }),
    [currentTour]
  );

  const methods = useForm<NewTourSchemaType>({
    mode: 'all',
    resolver: zodResolver(NewTourSchema),
    defaultValues,
  });

  const {
    watch,
    reset,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (currentTour) {
      reset(defaultValues);
    }
  }, [currentTour, defaultValues, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      toast.success(currentTour ? 'Update success!' : 'Create success!');
      router.push(paths.dashboard.tour.root);
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const handleRemoveFile = useCallback(
    (inputFile: File | string) => {
      const filtered = values.images && values.images?.filter((file) => file !== inputFile);
      setValue('images', filtered, { shouldValidate: true });
    },
    [setValue, values.images]
  );

  const handleRemoveAllFiles = useCallback(() => {
    setValue('images', [], { shouldValidate: true });
  }, [setValue]);

  const renderDetails = (
    <Card>
      <CardHeader title="Details" subheader="Title, short description, image..." sx={{ mb: 3 }} />

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Name</Typography>
          <Field.Text name="name" placeholder="Ex: Adventure Seekers Expedition..." />
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Content</Typography>
          <Field.Editor name="content" sx={{ maxHeight: 480 }} />
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Images</Typography>
          <Field.Upload
            multiple
            thumbnail
            name="images"
            maxSize={3145728}
            onRemove={handleRemoveFile}
            onRemoveAll={handleRemoveAllFiles}
            onUpload={() => console.info('ON UPLOAD')}
          />
        </Stack>
      </Stack>
    </Card>
  );

  const renderProperties = (
    <Card>
      <CardHeader
        title="Properties"
        subheader="Additional functions and attributes..."
        sx={{ mb: 3 }}
      />

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        <div>
          <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
            Tour guide
          </Typography>

          <Field.Autocomplete
            multiple
            name="tourGuides"
            placeholder="+ Tour Guides"
            disableCloseOnSelect
            options={_tourGuides}
            getOptionLabel={(option) => (option as ITourGuide).name}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderOption={(props, tourGuide) => (
              <li {...props} key={tourGuide.id}>
                <Avatar
                  key={tourGuide.id}
                  alt={tourGuide.avatarUrl}
                  src={tourGuide.avatarUrl}
                  sx={{ mr: 1, width: 24, height: 24, flexShrink: 0 }}
                />

                {tourGuide.name}
              </li>
            )}
            renderTags={(selected, getTagProps) =>
              selected.map((tourGuide, index) => (
                <Chip
                  {...getTagProps({ index })}
                  key={tourGuide.id}
                  size="small"
                  variant="soft"
                  label={tourGuide.name}
                  avatar={<Avatar alt={tourGuide.name} src={tourGuide.avatarUrl} />}
                />
              ))
            }
          />
        </div>

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Available</Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
            <Field.DatePicker name="available.startDate" label="Start date" />
            <Field.DatePicker name="available.endDate" label="End date" />
          </Stack>
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Duration</Typography>
          <Field.Text name="durations" placeholder="Ex: 2 days, 4 days 3 nights..." />
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Destination</Typography>
          <Field.CountrySelect fullWidth name="destination" placeholder="+ Destination" />
        </Stack>

        <Stack spacing={1}>
          <Typography variant="subtitle2">Services</Typography>
          <Field.MultiCheckbox
            name="services"
            options={TOUR_SERVICE_OPTIONS}
            sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}
          />
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Tags</Typography>
          <Field.Autocomplete
            name="tags"
            placeholder="+ Tags"
            multiple
            freeSolo
            disableCloseOnSelect
            options={_tags.map((option) => option)}
            getOptionLabel={(option) => option}
            renderOption={(props, option) => (
              <li {...props} key={option}>
                {option}
              </li>
            )}
            renderTags={(selected, getTagProps) =>
              selected.map((option, index) => (
                <Chip
                  {...getTagProps({ index })}
                  key={option}
                  label={option}
                  size="small"
                  color="info"
                  variant="soft"
                />
              ))
            }
          />
        </Stack>
      </Stack>
    </Card>
  );

  const renderActions = (
    <Stack direction="row" alignItems="center" flexWrap="wrap">
      <FormControlLabel
        control={<Switch defaultChecked inputProps={{ id: 'publish-switch' }} />}
        label="Publish"
        sx={{ flexGrow: 1, pl: 3 }}
      />

      <LoadingButton
        type="submit"
        variant="contained"
        size="large"
        loading={isSubmitting}
        sx={{ ml: 2 }}
      >
        {!currentTour ? 'Create tour' : 'Save changes'}
      </LoadingButton>
    </Stack>
  );

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Stack spacing={{ xs: 3, md: 5 }} sx={{ mx: 'auto', maxWidth: { xs: 720, xl: 880 } }}>
        {renderDetails}

        {renderProperties}

        {renderActions}
      </Stack>
    </Form>
  );
}
