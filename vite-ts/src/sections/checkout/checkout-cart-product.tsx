import type { ICheckoutItem } from 'src/types/checkout';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { fCurrency } from 'src/utils/format-number';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { ColorPreview } from 'src/components/color-utils';

import { IncrementerButton } from '../product/components/incrementer-button';

// ----------------------------------------------------------------------

type Props = {
  row: ICheckoutItem;
  onDelete: () => void;
  onDecrease: () => void;
  onIncrease: () => void;
};

export function CheckoutCartProduct({ row, onDelete, onDecrease, onIncrease }: Props) {
  return (
    <TableRow>
      <TableCell>
        <Stack spacing={2} direction="row" alignItems="center">
          <Avatar
            variant="rounded"
            alt={row.name}
            src={row.coverUrl}
            sx={{ width: 64, height: 64 }}
          />

          <Stack spacing={0.5}>
            <Typography noWrap variant="subtitle2" sx={{ maxWidth: 240 }}>
              {row.name}
            </Typography>

            <Stack
              direction="row"
              alignItems="center"
              sx={{ typography: 'body2', color: 'text.secondary' }}
            >
              size: <Label sx={{ ml: 0.5 }}> {row.size} </Label>
              <Divider orientation="vertical" sx={{ mx: 1, height: 16 }} />
              <ColorPreview colors={row.colors} />
            </Stack>
          </Stack>
        </Stack>
      </TableCell>

      <TableCell>{fCurrency(row.price)}</TableCell>

      <TableCell>
        <Box sx={{ width: 88, textAlign: 'right' }}>
          <IncrementerButton
            quantity={row.quantity}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
            disabledDecrease={row.quantity <= 1}
            disabledIncrease={row.quantity >= row.available}
          />

          <Typography variant="caption" component="div" sx={{ color: 'text.secondary', mt: 1 }}>
            available: {row.available}
          </Typography>
        </Box>
      </TableCell>

      <TableCell align="right">{fCurrency(row.price * row.quantity)}</TableCell>

      <TableCell align="right" sx={{ px: 1 }}>
        <IconButton onClick={onDelete}>
          <Iconify icon="solar:trash-bin-trash-bold" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
