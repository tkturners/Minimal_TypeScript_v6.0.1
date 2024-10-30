import type { BoxProps } from '@mui/material/Box';
import type { Breakpoint } from '@mui/material/styles';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { layoutClasses } from 'src/layouts/classes';

// ----------------------------------------------------------------------

type MainProps = BoxProps & {
  layoutQuery: Breakpoint;
};

export function Main({ sx, children, layoutQuery, ...other }: MainProps) {
  const theme = useTheme();

  return (
    <Box
      component="main"
      className={layoutClasses.main}
      sx={{
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        [theme.breakpoints.up(layoutQuery)]: {
          flexDirection: 'row',
        },
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}

// ----------------------------------------------------------------------

export function Content({ sx, children, layoutQuery, ...other }: MainProps) {
  const theme = useTheme();

  const renderContent = (
    <Box
      sx={{
        width: 1,
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 'var(--layout-auth-content-width)',
      }}
    >
      {children}
    </Box>
  );

  return (
    <Box
      className={layoutClasses.content}
      sx={{
        display: 'flex',
        flex: '1 1 auto',
        alignItems: 'center',
        flexDirection: 'column',
        p: theme.spacing(3, 2, 10, 2),
        [theme.breakpoints.up(layoutQuery)]: {
          justifyContent: 'center',
          p: theme.spacing(10, 2, 10, 2),
        },
        ...sx,
      }}
      {...other}
    >
      {renderContent}
    </Box>
  );
}
