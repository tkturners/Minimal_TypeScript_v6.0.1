import type { CardProps } from '@mui/material/Card';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

import { varAlpha } from 'src/theme/styles';
import { GoogleIcon, TwitterIcon, FacebookIcon, LinkedinIcon } from 'src/assets/icons';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  list: { value: string; label: string; total: number }[];
};

export function AnalyticsTrafficBySite({ title, subheader, list, sx, ...other }: Props) {
  return (
    <Card sx={sx} {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box display="grid" gap={2} gridTemplateColumns="repeat(2, 1fr)" sx={{ p: 3 }}>
        {list.map((site) => (
          <Box
            key={site.label}
            sx={(theme) => ({
              py: 2.5,
              display: 'flex',
              borderRadius: 1.5,
              textAlign: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              border: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
            })}
          >
            {site.value === 'facebook' && <FacebookIcon width={32} />}
            {site.value === 'google' && <GoogleIcon width={32} />}
            {site.value === 'linkedin' && <LinkedinIcon width={32} />}
            {site.value === 'twitter' && <TwitterIcon width={32} />}

            <Typography variant="h6" sx={{ mt: 1 }}>
              {fShortenNumber(site.total)}
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {site.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Card>
  );
}
