import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { CONFIG } from 'src/config-global';
import { varAlpha, bgGradient, textGradient } from 'src/theme/styles';

import { ComponentBlock, ComponentContainer } from '../../component-block';

// ----------------------------------------------------------------------

export function Gradient() {
  const theme = useTheme();

  return (
    <ComponentContainer
      sx={{
        rowGap: 5,
        columnGap: 3,
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
      }}
    >
      <ComponentBlock title="Text">
        <Box
          component="h1"
          sx={{
            typography: 'h1',
            ...textGradient(
              `to right, ${theme.vars.palette.warning.light}, ${theme.vars.palette.primary.main}`
            ),
          }}
        >
          Minimals UI
        </Box>
      </ComponentBlock>

      <ComponentBlock title="Background">
        <Box
          sx={{
            ...bgGradient({
              color: `135deg, ${varAlpha(theme.vars.palette.warning.lighterChannel, 0.8)}, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.8)}`,
              imgUrl: `${CONFIG.assetsDir}/assets/background/background-3.webp`,
            }),
            width: 1,
            height: 160,
          }}
        />
      </ComponentBlock>
    </ComponentContainer>
  );
}
