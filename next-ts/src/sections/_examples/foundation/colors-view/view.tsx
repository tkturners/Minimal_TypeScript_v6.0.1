'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme, hexToRgb } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { useCopyToClipboard } from 'src/hooks/use-copy-to-clipboard';

import { toast } from 'src/components/snackbar';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

const PALETTE = ['primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

const VARIATIONS = ['lighter', 'light', 'main', 'dark', 'darker'] as const;

const GREY = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'] as const;

const boxProps = {
  display: 'grid',
  gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
};

// ----------------------------------------------------------------------

export function ColorsView() {
  const theme = useTheme();

  const { copy } = useCopyToClipboard();

  const onCopy = (color: string) => {
    if (color) {
      toast.success(`Copied: ${color}`);
      copy(color);
    }
  };

  const BASE = PALETTE.map((color) => ({
    name: color[0].toUpperCase() + color.substring(1),
    component: (
      <Box {...boxProps}>
        {VARIATIONS.map((variation) => (
          <ColorCard
            key={variation}
            variation={variation}
            varColor={theme.vars.palette[color][variation]}
            hexColor={theme.palette[color][variation]}
            onCopy={() => onCopy(theme.palette[color][variation])}
          />
        ))}
      </Box>
    ),
  }));

  const DEMO = [
    ...BASE,
    {
      name: 'Grey',
      component: (
        <Box {...boxProps}>
          {GREY.map((variation) => (
            <ColorCard
              key={variation}
              variation={variation}
              varColor={theme.vars.palette.grey[variation]}
              hexColor={theme.palette.grey[variation]}
              onCopy={() => onCopy(theme.palette.grey[variation])}
            />
          ))}
        </Box>
      ),
    },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Color"
          links={[{ name: 'Components', href: paths.components }, { name: 'Color' }]}
          moreLink={['https://mui.com/customization/color', 'https://colors.eva.design']}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}

// ----------------------------------------------------------------------

type ColorCardProps = {
  varColor: string;
  hexColor: string;
  variation: string;
  onCopy: () => void;
};

function ColorCard({ varColor, hexColor, variation, onCopy }: ColorCardProps) {
  return (
    <Stack
      spacing={1}
      onClick={onCopy}
      sx={{
        p: 2,
        cursor: 'pointer',
        bgcolor: varColor,
        color: (theme) => theme.palette.getContrastText(hexColor),
        transition: (theme) =>
          theme.transitions.create(['opacity', 'background-color'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shorter,
          }),
        '&:hover': { opacity: 0.8 },
      }}
    >
      <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', flexGrow: 1 }}>
        {variation}
      </Typography>

      <Stack sx={{ typography: 'caption' }}>
        <Box component="span" sx={{ opacity: 0.64 }}>
          Var
        </Box>
        {varColor}
      </Stack>

      <Stack sx={{ typography: 'caption' }}>
        <Box component="span" sx={{ opacity: 0.64 }}>
          Hex
        </Box>
        {hexColor}
      </Stack>

      <Stack sx={{ typography: 'caption' }}>
        <Box component="span" sx={{ opacity: 0.64 }}>
          Rgb
        </Box>
        {hexToRgb(hexColor).replace('rgb(', '').replace(')', '')}
      </Stack>
    </Stack>
  );
}
