import type { StackProps } from '@mui/material/Stack';

import Stack from '@mui/material/Stack';

// ----------------------------------------------------------------------

type Props = StackProps & {
  slots: {
    header: React.ReactNode;
    nav: React.ReactNode;
    list: React.ReactNode;
    details: React.ReactNode;
  };
};

export function Layout({ slots, sx, ...other }: Props) {
  return (
    <Stack sx={sx} {...other}>
      {slots.header}

      <Stack spacing={1} direction="row" sx={{ flex: '1 1 auto', overflow: 'hidden' }}>
        <Stack
          sx={{
            flex: '0 0 200px',
            overflow: 'hidden',
            display: { xs: 'none', md: 'flex' },
          }}
        >
          {slots.nav}
        </Stack>

        <Stack
          sx={{
            borderRadius: 1.5,
            flex: '0 0 320px',
            overflow: 'hidden',
            bgcolor: 'background.default',
            display: { xs: 'none', md: 'flex' },
          }}
        >
          {slots.list}
        </Stack>

        <Stack
          sx={{
            minWidth: 0,
            flex: '1 1 auto',
            borderRadius: 1.5,
            overflow: 'hidden',
            bgcolor: 'background.default',
          }}
        >
          {slots.details}
        </Stack>
      </Stack>
    </Stack>
  );
}
