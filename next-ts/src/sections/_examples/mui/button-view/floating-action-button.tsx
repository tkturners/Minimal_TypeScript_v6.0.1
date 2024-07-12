import { m } from 'framer-motion';

import Stack from '@mui/material/Stack';
import Fab, { fabClasses } from '@mui/material/Fab';

import { Iconify } from 'src/components/iconify';
import { varHover } from 'src/components/animate';

import { ComponentBlock } from '../../component-block';

// ----------------------------------------------------------------------

const COLORS = [
  'default',
  'inherit',
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
] as const;

const SIZES = ['small', 'medium', 'large'] as const;

// ----------------------------------------------------------------------

export function FloatingActionButton() {
  return (
    <Stack
      rowGap={5}
      columnGap={2.5}
      display="grid"
      gridTemplateColumns={{ xs: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
      sx={{ [`& .${fabClasses.root}`]: { textTransform: 'capitalize' } }}
    >
      <ComponentBlock title="Default">
        {COLORS.map((color) => (
          <Fab key={color} color={color}>
            <Iconify icon="ic:round-access-alarm" width={24} />
          </Fab>
        ))}

        {COLORS.map((color) => (
          <Fab key={color} color={color} variant="extended">
            <Iconify icon="ic:round-access-alarm" width={24} />
            {color}
          </Fab>
        ))}

        <Fab color="info" disabled>
          <Iconify icon="ic:round-access-alarm" width={24} />
        </Fab>
        <Fab color="info" disabled variant="extended">
          <Iconify icon="ic:round-access-alarm" width={24} />
          disabled
        </Fab>
      </ComponentBlock>

      <ComponentBlock title="Outlined">
        {COLORS.map((color) => (
          <Fab key={color} color={color} variant="outlined">
            <Iconify icon="ic:round-access-alarm" width={24} />
          </Fab>
        ))}

        {COLORS.map((color) => (
          <Fab key={color} color={color} variant="outlinedExtended">
            <Iconify icon="ic:round-access-alarm" width={24} />
            {color}
          </Fab>
        ))}

        <Fab color="info" disabled variant="outlined">
          <Iconify icon="ic:round-access-alarm" width={24} />
        </Fab>

        <Fab color="info" disabled variant="outlinedExtended">
          <Iconify icon="ic:round-access-alarm" width={24} />
          disabled
        </Fab>
      </ComponentBlock>

      <ComponentBlock title="Soft">
        {COLORS.map((color) => (
          <Fab key={color} color={color} variant="soft">
            <Iconify icon="ic:round-access-alarm" width={24} />
          </Fab>
        ))}

        {COLORS.map((color) => (
          <Fab key={color} color={color} variant="softExtended">
            <Iconify icon="ic:round-access-alarm" width={24} />
            {color}
          </Fab>
        ))}

        <Fab color="info" disabled variant="soft">
          <Iconify icon="ic:round-access-alarm" width={24} />
        </Fab>

        <Fab color="info" disabled variant="softExtended">
          <Iconify icon="ic:round-access-alarm" width={24} />
          disabled
        </Fab>
      </ComponentBlock>

      <ComponentBlock title="Sizes">
        {SIZES.map((size) => (
          <Fab key={size} size={size} color="info">
            <Iconify icon="ic:round-access-alarm" width={24} />
          </Fab>
        ))}

        {SIZES.map((size) => (
          <Fab key={size} size={size} color="info" variant="extended">
            <Iconify icon="ic:round-access-alarm" width={24} />
            {size}
          </Fab>
        ))}

        {SIZES.map((size) => (
          <Fab key={size} size={size} color="info" variant="soft">
            <Iconify icon="ic:round-access-alarm" width={24} />
          </Fab>
        ))}

        {SIZES.map((size) => (
          <Fab key={size} size={size} color="info" variant="softExtended">
            <Iconify icon="ic:round-access-alarm" width={24} />
            {size}
          </Fab>
        ))}

        {SIZES.map((size) => (
          <Fab key={size} size={size} color="info" variant="outlined">
            <Iconify icon="ic:round-access-alarm" width={24} />
          </Fab>
        ))}

        {SIZES.map((size) => (
          <Fab key={size} size={size} color="info" variant="outlinedExtended">
            <Iconify icon="ic:round-access-alarm" width={24} />
            {size}
          </Fab>
        ))}
      </ComponentBlock>

      <ComponentBlock title="With Animate">
        {SIZES.map((size) => (
          <Fab
            key={size}
            component={m.button}
            whileTap="tap"
            whileHover="hover"
            variants={
              (size === 'small' && varHover(1.1, 0.95)) ||
              (size === 'large' && varHover(1.08, 0.99)) ||
              varHover()
            }
            variant="extended"
            size={size}
            color="info"
          >
            <Iconify icon="ic:round-access-alarm" width={24} />
            {size}
          </Fab>
        ))}
      </ComponentBlock>
    </Stack>
  );
}
