import type { IPaymentCard } from 'src/types/common';
import type { PaperProps } from '@mui/material/Paper';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

type PaymentItemProps = PaperProps & {
  card: IPaymentCard;
};

export function PaymentCardItem({ card, sx, ...other }: PaymentItemProps) {
  const popover = usePopover();

  return (
    <>
      <Paper variant="outlined" sx={{ p: 2.5, width: 1, position: 'relative', ...sx }} {...other}>
        <Box gap={1} display="flex" alignItems="center" sx={{ mb: 1 }}>
          <Iconify
            width={36}
            icon={(card.cardType === 'visa' && 'logos:visa') || 'logos:mastercard'}
          />

          {card.primary && <Label color="info">Default</Label>}
        </Box>

        <Typography variant="subtitle2">{card.cardNumber}</Typography>

        <IconButton onClick={popover.onOpen} sx={{ top: 8, right: 8, position: 'absolute' }}>
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton>
      </Paper>

      <CustomPopover open={popover.open} anchorEl={popover.anchorEl} onClose={popover.onClose}>
        <MenuList>
          <MenuItem onClick={popover.onClose}>
            <Iconify icon="eva:star-fill" />
            Set as primary
          </MenuItem>

          <MenuItem onClick={popover.onClose}>
            <Iconify icon="solar:pen-bold" />
            Edit
          </MenuItem>

          <MenuItem onClick={popover.onClose} sx={{ color: 'error.main' }}>
            <Iconify icon="solar:trash-bin-trash-bold" />
            Delete
          </MenuItem>
        </MenuList>
      </CustomPopover>
    </>
  );
}
