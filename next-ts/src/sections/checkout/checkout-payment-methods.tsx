import type { CardProps } from '@mui/material/Card';
import type { PaperProps } from '@mui/material/Paper';
import type { ICheckoutCardOption, ICheckoutPaymentOption } from 'src/types/checkout';

import { Controller, useFormContext } from 'react-hook-form';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CardHeader from '@mui/material/CardHeader';
import ListItemText from '@mui/material/ListItemText';
import FormHelperText from '@mui/material/FormHelperText';

import { useBoolean } from 'src/hooks/use-boolean';

import { Iconify } from 'src/components/iconify';

import { PaymentNewCardDialog } from '../payment/payment-new-card-dialog';

// ----------------------------------------------------------------------

type Props = CardProps & {
  options: {
    payments: ICheckoutPaymentOption[];
    cards: ICheckoutCardOption[];
  };
};

export function CheckoutPaymentMethods({ options, ...other }: Props) {
  const { control } = useFormContext();

  const newCard = useBoolean();

  return (
    <>
      <Card {...other}>
        <CardHeader title="Payment" />

        <Controller
          name="payment"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Stack sx={{ px: 3, pb: 3 }}>
              {options.payments.map((option) => (
                <OptionItem
                  option={option}
                  key={option.label}
                  onOpen={newCard.onTrue}
                  cardOptions={options.cards}
                  selected={field.value === option.value}
                  isCredit={option.value === 'credit' && field.value === 'credit'}
                  onClick={() => {
                    field.onChange(option.value);
                  }}
                />
              ))}

              {!!error && (
                <FormHelperText error sx={{ pt: 1, px: 2 }}>
                  {error.message}
                </FormHelperText>
              )}
            </Stack>
          )}
        />
      </Card>

      <PaymentNewCardDialog open={newCard.value} onClose={newCard.onFalse} />
    </>
  );
}

// ----------------------------------------------------------------------

type OptionItemProps = PaperProps & {
  selected: boolean;
  isCredit: boolean;
  onOpen: () => void;
  option: ICheckoutPaymentOption;
  cardOptions: ICheckoutCardOption[];
};

function OptionItem({
  option,
  cardOptions,
  selected,
  isCredit,
  onOpen,
  ...other
}: OptionItemProps) {
  const { value, label, description } = option;

  return (
    <Paper
      variant="outlined"
      key={value}
      sx={{
        p: 2.5,
        mt: 2.5,
        cursor: 'pointer',
        ...(selected && { boxShadow: (theme) => `0 0 0 2px ${theme.vars.palette.text.primary}` }),
      }}
      {...other}
    >
      <ListItemText
        primary={
          <Stack direction="row" alignItems="center">
            <Box component="span" sx={{ flexGrow: 1 }}>
              {label}
            </Box>
            <Stack spacing={1} direction="row" alignItems="center">
              {value === 'credit' && (
                <>
                  <Iconify icon="logos:mastercard" width={24} />
                  ,
                  <Iconify icon="logos:visa" width={24} />
                </>
              )}
              {value === 'paypal' && <Iconify icon="logos:paypal" width={24} />}
              {value === 'cash' && <Iconify icon="solar:wad-of-money-bold" width={32} />}
            </Stack>
          </Stack>
        }
        secondary={description}
        primaryTypographyProps={{ typography: 'subtitle1', mb: 0.5 }}
        secondaryTypographyProps={{ typography: 'body2' }}
      />

      {isCredit && (
        <Stack spacing={2.5} alignItems="flex-end" sx={{ pt: 2.5 }}>
          <TextField select fullWidth label="Cards" SelectProps={{ native: true }}>
            {cardOptions.map((card) => (
              <option key={card.value} value={card.value}>
                {card.label}
              </option>
            ))}
          </TextField>

          <Button
            size="small"
            color="primary"
            startIcon={<Iconify icon="mingcute:add-line" />}
            onClick={onOpen}
          >
            Add New Card
          </Button>
        </Stack>
      )}
    </Paper>
  );
}
