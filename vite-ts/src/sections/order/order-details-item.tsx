import type { IOrderProductItem } from 'src/types/order';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';

import { fCurrency } from 'src/utils/format-number';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';

// ----------------------------------------------------------------------

type Props = {
  taxes?: number;
  shipping?: number;
  discount?: number;
  subtotal?: number;
  totalAmount?: number;
  items?: IOrderProductItem[];
};

export function OrderDetailsItems({
  taxes,
  shipping,
  discount,
  subtotal,
  items = [],
  totalAmount,
}: Props) {
  const renderTotal = (
    <Stack spacing={2} alignItems="flex-end" sx={{ p: 3, textAlign: 'right', typography: 'body2' }}>
      <Stack direction="row">
        <Box sx={{ color: 'text.secondary' }}>Subtotal</Box>
        <Box sx={{ width: 160, typography: 'subtitle2' }}>{fCurrency(subtotal) || '-'}</Box>
      </Stack>

      <Stack direction="row">
        <Box sx={{ color: 'text.secondary' }}>Shipping</Box>
        <Box sx={{ width: 160, ...(shipping && { color: 'error.main' }) }}>
          {shipping ? `- ${fCurrency(shipping)}` : '-'}
        </Box>
      </Stack>

      <Stack direction="row">
        <Box sx={{ color: 'text.secondary' }}>Discount</Box>
        <Box sx={{ width: 160, ...(discount && { color: 'error.main' }) }}>
          {discount ? `- ${fCurrency(discount)}` : '-'}
        </Box>
      </Stack>

      <Stack direction="row">
        <Box sx={{ color: 'text.secondary' }}>Taxes</Box>
        <Box sx={{ width: 160 }}>{taxes ? fCurrency(taxes) : '-'}</Box>
      </Stack>

      <Stack direction="row" sx={{ typography: 'subtitle1' }}>
        <div>Total</div>
        <Box sx={{ width: 160 }}>{fCurrency(totalAmount) || '-'}</Box>
      </Stack>
    </Stack>
  );

  return (
    <Card>
      <CardHeader
        title="Details"
        action={
          <IconButton>
            <Iconify icon="solar:pen-bold" />
          </IconButton>
        }
      />

      <Scrollbar>
        {items.map((item) => (
          <Stack
            key={item.id}
            direction="row"
            alignItems="center"
            sx={{
              p: 3,
              minWidth: 640,
              borderBottom: (theme) => `dashed 2px ${theme.vars.palette.background.neutral}`,
            }}
          >
            <Avatar src={item.coverUrl} variant="rounded" sx={{ width: 48, height: 48, mr: 2 }} />

            <ListItemText
              primary={item.name}
              secondary={item.sku}
              primaryTypographyProps={{ typography: 'body2' }}
              secondaryTypographyProps={{ component: 'span', color: 'text.disabled', mt: 0.5 }}
            />

            <Box sx={{ typography: 'body2' }}>x{item.quantity}</Box>

            <Box sx={{ width: 110, textAlign: 'right', typography: 'subtitle2' }}>
              {fCurrency(item.price)}
            </Box>
          </Stack>
        ))}
      </Scrollbar>

      {renderTotal}
    </Card>
  );
}
