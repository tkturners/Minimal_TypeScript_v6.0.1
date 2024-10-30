import type { BoxProps } from '@mui/material/Box';

import { useCallback } from 'react';

import Box from '@mui/material/Box';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import { useBoolean } from 'src/hooks/use-boolean';

import { fCurrency } from 'src/utils/format-number';

import { CONFIG } from 'src/config-global';

import { Iconify } from 'src/components/iconify';
import { usePopover, CustomPopover } from 'src/components/custom-popover';
import { Carousel, useCarousel, CarouselDotButtons } from 'src/components/carousel';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  list: {
    id: string;
    cardType: string;
    balance: number;
    cardHolder: string;
    cardNumber: string;
    cardValid: string;
  }[];
};

export function BankingCurrentBalance({ list, sx, ...other }: Props) {
  const currency = useBoolean();

  const carousel = useCarousel();

  return (
    <Box
      sx={{
        mb: 2,
        borderRadius: 2,
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url('${CONFIG.assetsDir}/assets/background/background-4.jpg')`,
        '&::before, &::after': {
          left: 0,
          right: 0,
          mx: '28px',
          zIndex: -2,
          height: 40,
          bottom: -16,
          content: "''",
          opacity: 0.16,
          borderRadius: 1.5,
          bgcolor: 'grey.500',
          position: 'absolute',
        },
        '&::after': { mx: '16px', bottom: -8, opacity: 0.32 },
        ...sx,
      }}
      {...other}
    >
      <CarouselDotButtons
        scrollSnaps={carousel.dots.scrollSnaps}
        selectedIndex={carousel.dots.selectedIndex}
        onClickDot={carousel.dots.onClickDot}
        sx={{ right: 16, bottom: 16, position: 'absolute', color: 'primary.main' }}
      />

      <Carousel carousel={carousel} sx={{ color: 'common.white' }}>
        {list.map((item) => (
          <Item
            item={item}
            key={item.id}
            showCurrency={currency.value}
            onToggleCurrency={currency.onToggle}
          />
        ))}
      </Carousel>
    </Box>
  );
}

// ----------------------------------------------------------------------

type ItemProps = {
  item: Props['list'][number];
  showCurrency: boolean;
  onToggleCurrency: () => void;
};

function Item({ item, showCurrency, onToggleCurrency }: ItemProps) {
  const popover = usePopover();

  const handleDelete = useCallback(() => {
    popover.onClose();
    console.info('DELETE', item.id);
  }, [item.id, popover]);

  const handleEdit = useCallback(() => {
    popover.onClose();
    console.info('EDIT', item.id);
  }, [item.id, popover]);

  return (
    <>
      <Box sx={{ p: 3, width: 1 }}>
        <IconButton
          color="inherit"
          onClick={popover.onOpen}
          sx={{
            top: 8,
            right: 8,
            zIndex: 9,
            opacity: 0.48,
            position: 'absolute',
            ...(popover.open && { opacity: 1 }),
          }}
        >
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton>

        <div>
          <Box sx={{ mb: 1.5, typography: 'subtitle2', opacity: 0.48 }}>Current balance</Box>

          <Box sx={{ gap: 1, display: 'flex', alignItems: 'center' }}>
            <Box component="span" sx={{ typography: 'h4' }}>
              {showCurrency ? '********' : fCurrency(item.balance)}
            </Box>

            <IconButton color="inherit" onClick={onToggleCurrency} sx={{ opacity: 0.48 }}>
              <Iconify icon={showCurrency ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
            </IconButton>
          </Box>
        </div>

        <Box
          sx={{
            my: 3,
            gap: 1,
            display: 'flex',
            alignItems: 'center',
            typography: 'subtitle1',
            justifyContent: 'flex-end',
          }}
        >
          <Box
            sx={{
              px: 0.75,
              bgcolor: 'white',
              borderRadius: 0.5,
              display: 'inline-flex',
            }}
          >
            {item.cardType === 'mastercard' && <Iconify width={24} icon="logos:mastercard" />}
            {item.cardType === 'visa' && <Iconify width={24} icon="logos:visa" />}
          </Box>
          {item.cardNumber}
        </Box>

        <Box sx={{ gap: 5, display: 'flex', typography: 'subtitle1' }}>
          <div>
            <Box sx={{ mb: 1, opacity: 0.48, typography: 'caption' }}>Card holder</Box>
            <Box component="span">{item.cardHolder}</Box>
          </div>
          <div>
            <Box sx={{ mb: 1, opacity: 0.48, typography: 'caption' }}>Expiration date</Box>
            <Box component="span">{item.cardValid}</Box>
          </div>
        </Box>
      </Box>

      <CustomPopover open={popover.open} anchorEl={popover.anchorEl} onClose={popover.onClose}>
        <MenuList>
          <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
            <Iconify icon="solar:trash-bin-trash-bold" />
            Delete
          </MenuItem>

          <MenuItem onClick={handleEdit}>
            <Iconify icon="solar:pen-bold" />
            Edit
          </MenuItem>
        </MenuList>
      </CustomPopover>
    </>
  );
}
