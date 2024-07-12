import type { CardProps } from '@mui/material/Card';
import type { InputProps } from '@mui/material/Input';
import type { DialogProps } from '@mui/material/Dialog';

import { useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Slider from '@mui/material/Slider';
import Dialog from '@mui/material/Dialog';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import ListItemText from '@mui/material/ListItemText';
import DialogActions from '@mui/material/DialogActions';
import Input, { inputClasses } from '@mui/material/Input';

import { useBoolean } from 'src/hooks/use-boolean';

import { fCurrency } from 'src/utils/format-number';

import { varAlpha, stylesMode } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { Carousel, useCarousel, CarouselArrowFloatButtons } from 'src/components/carousel';

// ----------------------------------------------------------------------

const STEP = 50;

const MIN_AMOUNT = 0;

const MAX_AMOUNT = 1000;

// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  list: {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
  }[];
};

export function BankingQuickTransfer({ title, subheader, list, sx, ...other }: Props) {
  const theme = useTheme();

  const carousel = useCarousel({
    loop: true,
    dragFree: true,
    slidesToShow: 'auto',
    slideSpacing: '20px',
  });

  const confirm = useBoolean();

  const [amount, setAmount] = useState(0);

  const [autoWidth, setAutoWidth] = useState(24);

  const contactInfo = list.find((_, index) => index === carousel.dots.selectedIndex);

  useEffect(() => {
    if (amount) {
      handleAutoWidth();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount]);

  const handleAutoWidth = useCallback(() => {
    const getNumberLength = amount.toString().length;
    setAutoWidth(getNumberLength * 24);
  }, [amount]);

  const handleChangeSlider = useCallback((event: Event, newValue: number | number[]) => {
    setAmount(newValue as number);
  }, []);

  const handleChangeInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  }, []);

  const handleBlur = useCallback(() => {
    if (amount < 0) {
      setAmount(0);
    } else if (amount > MAX_AMOUNT) {
      setAmount(MAX_AMOUNT);
    }
  }, [amount]);

  const renderCarousel = (
    <Box sx={{ position: 'relative' }}>
      <CarouselArrowFloatButtons
        {...carousel.arrows}
        options={carousel.options}
        slotProps={{
          prevBtn: {
            svgSize: 14,
            sx: {
              p: 0.5,
              borderRadius: '50%',
              bgcolor: varAlpha(theme.vars.palette.text.primaryChannel, 0.48),
              '&:hover': { bgcolor: theme.vars.palette.text.primary },
            },
          },
          nextBtn: {
            svgSize: 14,
            sx: {
              p: 0.5,
              borderRadius: '50%',
              bgcolor: varAlpha(theme.vars.palette.text.primaryChannel, 0.48),
              '&:hover': { bgcolor: theme.vars.palette.text.primary },
            },
          },
        }}
      />

      <Carousel carousel={carousel} sx={{ py: 5 }}>
        {list.map((contact, index) => (
          <Tooltip key={contact.id} title={contact.name} arrow placement="top">
            <Avatar
              src={contact.avatarUrl}
              onClick={() => carousel.dots.onClickDot(index)}
              sx={{
                mx: 'auto',
                opacity: 0.48,
                cursor: 'pointer',
                transition: theme.transitions.create('all'),
                ...(index === carousel.dots.selectedIndex && {
                  opacity: 1,
                  transform: 'scale(1.25)',
                  boxShadow: `-4px 12px 24px 0 ${varAlpha(theme.vars.palette.common.blackChannel, 0.12)}`,
                  [stylesMode.dark]: {
                    boxShadow: `-4px 12px 24px 0 ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
                  },
                }),
              }}
            />
          </Tooltip>
        ))}
      </Carousel>
    </Box>
  );

  const renderInput = (
    <>
      <Typography variant="overline" sx={{ color: 'text.secondary' }}>
        insert amount
      </Typography>

      <InputAmount
        amount={amount}
        onBlur={handleBlur}
        autoWidth={autoWidth}
        onChange={handleChangeInput}
        sx={{ my: 3 }}
      />

      <Slider
        value={typeof amount === 'number' ? amount : 0}
        valueLabelDisplay="auto"
        step={STEP}
        marks
        min={MIN_AMOUNT}
        max={MAX_AMOUNT}
        onChange={handleChangeSlider}
      />

      <Box sx={{ my: 4, display: 'flex', alignItems: 'center', typography: 'subtitle1' }}>
        <Box component="span" sx={{ flexGrow: 1 }}>
          Your balance
        </Box>
        {fCurrency(34212)}
      </Box>

      <Button
        fullWidth
        size="large"
        color="inherit"
        variant="contained"
        disabled={amount === 0}
        onClick={confirm.onTrue}
      >
        Transfer now
      </Button>
    </>
  );

  return (
    <>
      <Box sx={{ borderRadius: 2, bgcolor: 'background.neutral', ...sx }} {...other}>
        <CardHeader title={title} subheader={subheader} />

        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="overline" sx={{ color: 'text.secondary' }}>
              Recent
            </Typography>

            <Button
              size="small"
              color="inherit"
              endIcon={<Iconify icon="eva:arrow-ios-forward-fill" width={18} sx={{ ml: -0.5 }} />}
              sx={{ mr: -1 }}
            >
              View all
            </Button>
          </Box>

          {renderCarousel}

          {renderInput}
        </Box>
      </Box>

      <ConfirmTransferDialog
        amount={amount}
        onBlur={handleBlur}
        open={confirm.value}
        autoWidth={autoWidth}
        onClose={confirm.onFalse}
        contactInfo={contactInfo}
        onChange={handleChangeInput}
      />
    </>
  );
}

// ----------------------------------------------------------------------

type InputAmountProps = InputProps & {
  autoWidth: number;
  amount: number | number[];
};

function InputAmount({ autoWidth, amount, onBlur, onChange, sx, ...other }: InputAmountProps) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', ...sx }}>
      <Box component="span" sx={{ typography: 'h5' }}>
        $
      </Box>

      <Input
        disableUnderline
        size="small"
        value={amount}
        onChange={onChange}
        onBlur={onBlur}
        inputProps={{
          step: STEP,
          min: MIN_AMOUNT,
          max: MAX_AMOUNT,
          type: 'number',
          id: 'input-amount',
        }}
        sx={{
          [`& .${inputClasses.input}`]: {
            p: 0,
            typography: 'h3',
            textAlign: 'center',
            width: autoWidth,
          },
        }}
        {...other}
      />
    </Box>
  );
}

// ----------------------------------------------------------------------

type ConfirmTransferDialogProps = InputAmountProps &
  DialogProps & {
    contactInfo?: {
      id: string;
      name: string;
      email: string;
      avatarUrl: string;
    };
    onClose: () => void;
  };

function ConfirmTransferDialog({
  open,
  amount,
  onBlur,
  onClose,
  onChange,
  autoWidth,
  contactInfo,
}: ConfirmTransferDialogProps) {
  return (
    <Dialog open={open} fullWidth maxWidth="xs" onClose={onClose}>
      <DialogTitle>Transfer to</DialogTitle>

      <Box sx={{ px: 3, gap: 3, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
          <Avatar src={contactInfo?.avatarUrl} sx={{ width: 48, height: 48 }} />

          <ListItemText
            primary={contactInfo?.name}
            secondary={contactInfo?.email}
            secondaryTypographyProps={{ component: 'span', mt: 0.5 }}
          />
        </Box>

        <InputAmount
          onBlur={onBlur}
          onChange={onChange}
          autoWidth={autoWidth}
          amount={amount}
          disableUnderline={false}
          sx={{ justifyContent: 'flex-end' }}
        />

        <TextField fullWidth multiline rows={3} placeholder="Write a message..." />
      </Box>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

        <Button variant="contained" disabled={amount === 0} onClick={onClose}>
          Transfer
        </Button>
      </DialogActions>
    </Dialog>
  );
}
