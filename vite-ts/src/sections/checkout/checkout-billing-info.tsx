import type { CardProps } from '@mui/material/Card';
import type { IAddressItem } from 'src/types/common';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = CardProps & {
  onBackStep: () => void;
  billing: IAddressItem | null;
};

export function CheckoutBillingInfo({ billing, onBackStep, sx, ...other }: Props) {
  return (
    <Card sx={{ mb: 3, ...sx }} {...other}>
      <CardHeader
        title="Address"
        action={
          <Button size="small" startIcon={<Iconify icon="solar:pen-bold" />} onClick={onBackStep}>
            Edit
          </Button>
        }
      />
      <Stack spacing={1} sx={{ p: 3 }}>
        <Box sx={{ typography: 'subtitle2' }}>
          {`${billing?.name} `}
          <Box component="span" sx={{ color: 'text.secondary', typography: 'body2' }}>
            ({billing?.addressType})
          </Box>
        </Box>

        <Box sx={{ color: 'text.secondary', typography: 'body2' }}>{billing?.fullAddress}</Box>

        <Box sx={{ color: 'text.secondary', typography: 'body2' }}>{billing?.phoneNumber}</Box>
      </Stack>
    </Card>
  );
}
