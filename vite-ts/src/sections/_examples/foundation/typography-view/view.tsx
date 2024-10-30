import type { MediaFontSize } from 'src/theme/styles';
import type { Variant } from '@mui/material/styles/createTypography';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { useResponsive } from 'src/hooks/use-responsive';

import { remToPx } from 'src/theme/styles';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

const VARIANTS = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'overline',
  'button',
] as const;

const BASE = VARIANTS.map((variant) => ({
  name: variant[0].toUpperCase() + variant.substring(1),
  component: <BlockVariant variant={variant} />,
}));

export function TypographyView() {
  const DEMO = [
    ...BASE,
    {
      name: 'Colors',
      component: (
        <Stack spacing={3}>
          {['primary', 'secondary', 'disabled'].map((color) => (
            <Paper key={color}>
              <Typography
                variant="subtitle2"
                sx={{ mb: 1, color: `text.${color}`, textTransform: 'capitalize' }}
              >
                text {color}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1, color: `text.${color}` }}>
                Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel dui. Pellentesque auctor
                neque nec urna. Sed cursus turpis vitae tortor. Curabitur suscipit suscipit tellus.
              </Typography>
            </Paper>
          ))}

          {['primary', 'secondary', 'info', 'warning', 'error'].map((color) => (
            <Paper key={color}>
              <Typography
                variant="subtitle2"
                sx={{ mb: 1, color: `${color}.main`, textTransform: 'capitalize' }}
              >
                {color}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1, color: `${color}.main` }}>
                Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel dui. Pellentesque auctor
                neque nec urna. Sed cursus turpis vitae tortor. Curabitur suscipit suscipit tellus.
              </Typography>
            </Paper>
          ))}
        </Stack>
      ),
    },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Typography"
          links={[{ name: 'Components', href: paths.components }, { name: 'Typography' }]}
          moreLink={['https://mui.com/components/typography']}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}

// ----------------------------------------------------------------------

type BlockVariantProps = {
  variant: Variant;
};

function BlockVariant({ variant }: BlockVariantProps) {
  const theme = useTheme();

  const upSm = useResponsive('up', 'sm');

  const upMd = useResponsive('up', 'md');

  const upLg = useResponsive('up', 'lg');

  const fontProperties = theme.typography[variant];

  const keysStartWith = (obj: Record<string, any>): boolean =>
    Object.keys(obj).some((key) => key.startsWith('@media'));

  const hasMedia = keysStartWith(fontProperties);

  let { fontSize } = fontProperties;

  if (hasMedia) {
    if (upSm) {
      fontSize = (fontProperties as MediaFontSize)[theme.breakpoints.up('sm')]?.fontSize;
    }
    if (upMd) {
      fontSize = (fontProperties as MediaFontSize)[theme.breakpoints.up('md')]?.fontSize;
    }
    if (upLg) {
      fontSize = (fontProperties as MediaFontSize)[theme.breakpoints.up('lg')]?.fontSize;
    }
  }

  return (
    <Paper variant="outlined" sx={{ p: 3 }}>
      <Typography variant={variant}>How can you choose a typeface?</Typography>

      <Stack
        spacing={0.5}
        sx={{
          mt: 2,
          typography: 'body2',
          color: 'text.secondary',
          fontFamily: '"Lucida Console", Courier, monospace',
        }}
      >
        <Box component="span">fontSize: {`${remToPx(fontSize as string)}px`}</Box>

        <Box component="span">lineHeight: {Number(fontProperties.lineHeight).toFixed(2)}</Box>

        <Box component="span">fontWeight: {fontProperties.fontWeight}</Box>
      </Stack>
    </Paper>
  );
}
