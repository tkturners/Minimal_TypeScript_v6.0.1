import type { StackProps } from '@mui/material/Stack';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Backdrop from '@mui/material/Backdrop';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';
import CircularProgress from '@mui/material/CircularProgress';

import { useBoolean } from 'src/hooks/use-boolean';

import { today } from 'src/utils/format-time';

import { Iconify } from 'src/components/iconify';
import { Form, Field } from 'src/components/hook-form';

import { FormSchema } from './schema';
import { ValuesPreview } from './values-preview';

import type { FormSchemaType } from './schema';

// ----------------------------------------------------------------------

const OPTIONS = [
  { value: 'option 1', label: 'Option 1' },
  { value: 'option 2', label: 'Option 2' },
  { value: 'option 3', label: 'Option 3' },
  { value: 'option 4', label: 'Option 4' },
  { value: 'option 5', label: 'Option 5' },
  { value: 'option 6', label: 'Option 6' },
  { value: 'option 7', label: 'Option 7' },
  { value: 'option 8', label: 'Option 8' },
];

type OptionType = {
  value: string;
  label: string;
};

export const defaultValues = {
  age: 0,
  email: '',
  fullName: '',
  phoneNumber: '',
  //
  editor: '',
  autocomplete: null,
  //
  password: '',
  confirmPassword: '',
  //
  startDate: today(),
  endDate: null,
  //
  singleUpload: '',
  multiUpload: [],
  //
  singleSelect: '',
  multiSelect: [],
  //
  singleCountry: '',
  multiCountry: [],
  //
  rating: 0,
  radioGroup: '',
  //
  switch: false,
  multiSwitch: [],
  //
  checkbox: false,
  multiCheckbox: [],
  //
  slider: 8,
  sliderRange: [15, 80],
};

type Props = {
  debug: boolean;
};

export function ReactHookForm({ debug }: Props) {
  const password = useBoolean();

  const methods = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
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

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      reset();
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <>
      {isSubmitting && (
        <Backdrop open sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }}>
          <CircularProgress color="primary" />
        </Backdrop>
      )}
      <Form methods={methods} onSubmit={onSubmit}>
        {debug && <ValuesPreview sx={{ display: { xs: 'none', lg: 'block' } }} />}

        <Box
          gap={5}
          display="flex"
          alignItems="flex-start"
          flexDirection={{ xs: 'column', md: 'row' }}
          sx={{
            width: 1,
            ...(debug && { pr: { lg: '320px' } }),
          }}
        >
          <Box
            gap={3}
            display="flex"
            flex="1 0 auto"
            flexDirection="column"
            sx={{ width: { xs: 1, md: 0.5 } }}
          >
            <Grid2>
              <Block>
                <Field.Text name="fullName" label="Full name" helperText="Helper text" />
              </Block>

              <Block>
                <Field.Text name="email" label="Email address" />
              </Block>
            </Grid2>

            <Grid2>
              <Block label="RHFPhone">
                <Field.Phone name="phoneNumber" label="Phone number" />
              </Block>

              <Block>
                <Field.Text name="age" label="Age" type="number" />
              </Block>
            </Grid2>

            <Grid2>
              <Field.DatePicker name="startDate" label="Start date" />
              <Field.DatePicker name="endDate" label="End date" />
            </Grid2>

            <Grid2>
              <Block>
                <Field.Text
                  name="password"
                  label="Password"
                  type={password.value ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={password.onToggle} edge="end">
                          <Iconify
                            icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'}
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Block>

              <Block>
                <Field.Text
                  name="confirmPassword"
                  label="Confirm password"
                  type={password.value ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={password.onToggle} edge="end">
                          <Iconify
                            icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'}
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Block>
            </Grid2>

            <Block label="RHFAutocomplete">
              <Field.Autocomplete
                name="autocomplete"
                label="Autocomplete"
                options={OPTIONS}
                getOptionLabel={(option: OptionType | string) => (option as OptionType).label}
                isOptionEqualToValue={(option, value) => option.value === value.value}
                renderOption={(props, option) => (
                  <li {...props} key={option.value}>
                    {option.label}
                  </li>
                )}
              />
            </Block>

            <Block label="RHFAutocomplete">
              <Field.CountrySelect
                fullWidth
                name="singleCountry"
                label="Single country"
                placeholder="Choose a country"
              />
            </Block>

            <Block label="RHFAutocomplete">
              <Field.CountrySelect
                multiple
                fullWidth
                limitTags={3}
                name="multiCountry"
                label="Multi country"
                placeholder="Choose a country"
                helperText="Helper text"
              />
            </Block>

            <Grid2>
              <Block label="RHFSelect">
                <Field.Select name="singleSelect" label="Single select">
                  <MenuItem value="">None</MenuItem>
                  <Divider sx={{ borderStyle: 'dashed' }} />
                  {OPTIONS.map((option) => (
                    <MenuItem key={option.value} value={option.label}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field.Select>
              </Block>

              <Block label="RHFMultiSelect">
                <Field.MultiSelect
                  chip
                  checkbox
                  name="multiSelect"
                  label="Multi select"
                  options={OPTIONS}
                />
              </Block>
            </Grid2>

            <Block label="RHFEditor">
              <Field.Editor fullItem name="editor" sx={{ maxHeight: 480 }} />
            </Block>
          </Box>

          <Box
            gap={3}
            display="flex"
            flex="1 0 auto"
            flexDirection="column"
            sx={{ width: { xs: 1, md: 0.5 } }}
          >
            <Block label="RHFUpload">
              <Field.Upload
                name="singleUpload"
                maxSize={3145728}
                onDelete={() => setValue('singleUpload', null, { shouldValidate: true })}
              />
            </Block>

            <Block label="RHFUpload">
              <Field.Upload
                multiple
                thumbnail
                name="multiUpload"
                maxSize={3145728}
                onRemove={(inputFile) =>
                  setValue(
                    'multiUpload',
                    values.multiUpload.filter((file) => file !== inputFile),
                    { shouldValidate: true }
                  )
                }
                onRemoveAll={() => setValue('multiUpload', [], { shouldValidate: true })}
                onUpload={() => console.info('ON UPLOAD')}
              />
            </Block>

            <Field.Rating name="rating" />

            <Field.Checkbox name="checkbox" label="RHFCheckbox" />

            <Field.Switch name="switch" label="RHFSwitch" />

            <Field.RadioGroup
              row
              name="radioGroup"
              label="RHFRadioGroup"
              options={[
                { label: 'Option 1', value: 'radio-1' },
                { label: 'Option 2', value: 'radio-2' },
                { label: 'Option 3', value: 'radio-3' },
              ]}
              sx={{ gap: 4 }}
            />

            <Field.MultiCheckbox
              row
              name="multiCheckbox"
              label="RHFMultiCheckbox"
              options={[
                { label: 'Option 1', value: 'checkbox-1' },
                { label: 'Option 2', value: 'checkbox-2' },
                { label: 'Option 3', value: 'checkbox-3' },
              ]}
              sx={{ gap: 4 }}
            />

            <Field.MultiSwitch
              name="multiSwitch"
              label="RHFMultiSwitch"
              options={[
                { label: 'Option 1', value: 'switch-1' },
                { label: 'Option 2', value: 'switch-2' },
                { label: 'Option 3', value: 'switch-3' },
              ]}
            />

            <Block label="RHFSlider">
              <Field.Slider name="slider" />
            </Block>

            <Block label="RHFSlider">
              <Field.Slider name="sliderRange" />
            </Block>

            <LoadingButton
              fullWidth
              color="info"
              size="large"
              type="submit"
              variant="soft"
              loading={isSubmitting}
            >
              Submit to check
            </LoadingButton>
          </Box>
        </Box>
      </Form>
    </>
  );
}
// ----------------------------------------------------------------------

type BlockProps = StackProps & {
  label?: string;
  children: React.ReactNode;
};

function Block({ sx, children, label = 'RHFTextField' }: BlockProps) {
  return (
    <Stack spacing={1} sx={{ width: 1, ...sx }}>
      <Typography
        variant="caption"
        sx={{
          textAlign: 'right',
          fontStyle: 'italic',
          color: 'text.disabled',
          fontSize: (theme) => theme.typography.pxToRem(10),
        }}
      >
        {label}
      </Typography>
      {children}
    </Stack>
  );
}

// ----------------------------------------------------------------------

function Grid2({ children, sx, ...other }: BlockProps) {
  return (
    <Box
      rowGap={3}
      columnGap={2}
      display="grid"
      gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      sx={{ ...sx }}
      {...other}
    >
      {children}
    </Box>
  );
}
