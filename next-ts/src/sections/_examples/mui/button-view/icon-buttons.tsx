import { m } from 'framer-motion';

import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import { Iconify } from 'src/components/iconify';
import { varHover } from 'src/components/animate';

import { ComponentBlock } from '../../component-block';

// ----------------------------------------------------------------------

const COLORS = [
  'inherit',
  'default',
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
] as const;

const SIZES = ['small', 'medium', 'large'] as const;

// ----------------------------------------------------------------------

export function IconButtons() {
  return (
    <Stack
      rowGap={5}
      columnGap={2.5}
      display="grid"
      gridTemplateColumns={{ xs: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
    >
      <ComponentBlock title="Base">
        <IconButton color="inherit">
          <Iconify icon="ic:round-access-alarm" />
        </IconButton>

        <IconButton>
          <Iconify icon="ic:round-access-alarm" />
        </IconButton>

        <IconButton color="primary">
          <Iconify icon="ic:round-access-alarm" />
        </IconButton>

        <IconButton color="secondary">
          <Iconify icon="ic:round-access-alarm" />
        </IconButton>

        <IconButton disabled>
          <Iconify icon="ic:round-access-alarm" />
        </IconButton>
      </ComponentBlock>

      <ComponentBlock title="Colors">
        {COLORS.map((color) => (
          <IconButton key={color} color={color}>
            <Iconify icon="ic:round-access-alarm" />
          </IconButton>
        ))}
      </ComponentBlock>

      <ComponentBlock title="Sizes">
        {SIZES.map((size) => (
          <IconButton key={size} size={size} color="info">
            <Iconify icon="ic:round-access-alarm" />
          </IconButton>
        ))}
      </ComponentBlock>

      <ComponentBlock title="With Animate">
        {SIZES.map((size) => (
          <IconButton
            key={size}
            component={m.button}
            whileTap="tap"
            whileHover="hover"
            variants={
              (size === 'small' && varHover(1.1, 0.95)) ||
              (size === 'large' && varHover(1.08, 0.99)) ||
              varHover()
            }
            size={size}
            color="error"
          >
            <Iconify fontSize="inherit" icon="ic:round-access-alarm" />
          </IconButton>
        ))}
      </ComponentBlock>
    </Stack>
  );
}
