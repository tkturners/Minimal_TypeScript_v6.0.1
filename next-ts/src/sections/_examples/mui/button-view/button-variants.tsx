import Stack from '@mui/material/Stack';
import LoadingButton from '@mui/lab/LoadingButton';
import Button, { buttonClasses } from '@mui/material/Button';

import { Iconify } from 'src/components/iconify';

import { ComponentBlock } from '../../component-block';

// ----------------------------------------------------------------------

const COLORS = ['inherit', 'primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

const SIZES = ['small', 'medium', 'large'] as const;

// ----------------------------------------------------------------------

type Props = {
  variant?: 'text' | 'contained' | 'outlined' | 'soft';
};

export function ButtonVariants({ variant = 'text' }: Props) {
  return (
    <Stack
      sx={{
        rowGap: 5,
        columnGap: 3,
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
        [`& .${buttonClasses.root}`]: { textTransform: 'capitalize' },
      }}
    >
      <ComponentBlock title="Base" sx={{ gap: 1 }}>
        <Button variant={variant} color="inherit">
          Default
        </Button>
        <Button variant={variant} color="primary">
          Primary
        </Button>
        <Button variant={variant} color="secondary">
          Secondary
        </Button>
        <Button variant={variant} color="primary" disabled>
          Disabled
        </Button>
        <Button variant={variant}>Link</Button>
      </ComponentBlock>

      <ComponentBlock title="Colors" sx={{ gap: 1 }}>
        {COLORS.map((color) => (
          <Button key={color} variant={variant} color={color}>
            {color === 'inherit' ? 'default' : color}
          </Button>
        ))}
      </ComponentBlock>

      <ComponentBlock title="With icon & loading" sx={{ gap: 1 }}>
        <Button
          color="error"
          variant={variant}
          startIcon={<Iconify icon="ic:round-access-alarm" />}
        >
          Icon Left
        </Button>

        <Button variant={variant} color="error" endIcon={<Iconify icon="ic:round-access-alarm" />}>
          Icon Right
        </Button>

        <LoadingButton loading variant={variant}>
          Submit
        </LoadingButton>

        <LoadingButton loading loadingIndicator="Loading..." variant={variant}>
          Fetch data
        </LoadingButton>

        <LoadingButton
          loading
          size="large"
          loadingPosition="start"
          startIcon={<Iconify icon="ic:round-access-alarm" />}
          variant={variant}
        >
          Start
        </LoadingButton>

        <LoadingButton
          loading
          size="large"
          loadingPosition="end"
          endIcon={<Iconify icon="ic:round-access-alarm" />}
          variant={variant}
        >
          End
        </LoadingButton>
      </ComponentBlock>

      <ComponentBlock title="Sizes" sx={{ gap: 1 }}>
        {SIZES.map((size) => (
          <Button key={size} variant={variant} color="info" size={size}>
            {size}
          </Button>
        ))}

        {SIZES.map((size) => (
          <LoadingButton
            key={size}
            loading
            size={size}
            loadingPosition="start"
            startIcon={<Iconify icon="ic:round-access-alarm" />}
            variant={variant}
          >
            {size}
          </LoadingButton>
        ))}

        {SIZES.map((size) => (
          <LoadingButton
            key={size}
            loading
            size={size}
            loadingPosition="end"
            endIcon={<Iconify icon="ic:round-access-alarm" />}
            variant={variant}
          >
            {size}
          </LoadingButton>
        ))}
      </ComponentBlock>
    </Stack>
  );
}
