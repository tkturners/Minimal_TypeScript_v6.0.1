import type { StackProps } from '@mui/material/Stack';
import type { ContainerProps } from '@mui/material/Container';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { varAlpha, stylesMode } from 'src/theme/styles';

// ----------------------------------------------------------------------

type ComponentBlockProps = StackProps & {
  title?: string;
};

export function ComponentBlock({ title, sx, children, ...other }: ComponentBlockProps) {
  return (
    <Stack
      sx={{
        px: 3,
        py: 6,
        gap: 2,
        width: 1,
        flexWrap: 'wrap',
        borderRadius: 1.5,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.04),
        boxShadow: (theme) => `0 0 0 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
        ...sx,
      }}
      {...other}
    >
      {title && (
        <Box
          component="span"
          sx={{
            px: 1,
            top: 0,
            ml: 2.5,
            left: 0,
            py: 0.25,
            borderRadius: 2,
            position: 'absolute',
            color: 'text.primary',
            bgcolor: 'common.white',
            transform: 'translateY(-50%)',
            fontSize: (theme) => theme.typography.caption.fontSize,
            fontWeight: (theme) => theme.typography.fontWeightSemiBold,
            border: (theme) => `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
            [stylesMode.dark]: { bgcolor: 'background.neutral' },
          }}
        >
          {title}
        </Box>
      )}

      {children}
    </Stack>
  );
}

// ----------------------------------------------------------------------

export function ComponentContainer({ children, sx, ...other }: ContainerProps) {
  return (
    <Container
      sx={{
        mt: 10,
        mb: 15,
        gap: 5,
        display: 'flex',
        flexDirection: 'column',
        ...sx,
      }}
      {...other}
    >
      {children}
    </Container>
  );
}
