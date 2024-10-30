import type { BoxProps } from '@mui/material/Box';
import type { TextFieldProps } from '@mui/material/TextField';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import { useBoolean } from 'src/hooks/use-boolean';

import { Field } from 'src/components/hook-form';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type PaymentNewCardFormProps = BoxProps & {
  isRHF?: boolean;
  numberField?: TextFieldProps & { name: string };
  holderField?: TextFieldProps & { name: string };
  dateField?: TextFieldProps & { name: string };
  cvvField?: TextFieldProps & { name: string };
};

export function PaymentNewCardForm({
  sx,
  isRHF,
  cvvField,
  dateField,
  numberField,
  holderField,
  ...other
}: PaymentNewCardFormProps) {
  const FormField = isRHF ? Field.Text : TextField;

  const showPassword = useBoolean();

  return (
    <Box gap={2.5} display="flex" flexDirection="column" sx={{ width: 1, ...sx }} {...other}>
      <FormField
        label="Card number"
        placeholder="xxxx xxxx xxxx xxxx"
        InputLabelProps={{ shrink: true }}
        {...numberField}
        name={numberField?.name ?? ''}
      />

      <FormField
        label="Card holder"
        placeholder="John Doe"
        InputLabelProps={{ shrink: true }}
        {...holderField}
        name={holderField?.name ?? ''}
      />

      <Box gap={2} display="flex">
        <FormField
          fullWidth
          label="Expiration date"
          placeholder="MM/YY"
          InputLabelProps={{ shrink: true }}
          {...dateField}
          name={dateField?.name ?? ''}
        />
        <FormField
          fullWidth
          label="Cvv/Cvc"
          placeholder="***"
          InputLabelProps={{ shrink: true }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={showPassword.onToggle} edge="end">
                  <Iconify icon={showPassword.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          type={showPassword.value ? 'text' : 'password'}
          {...cvvField}
          name={cvvField?.name ?? ''}
        />
      </Box>

      <Box
        gap={1}
        display="flex"
        alignItems="center"
        sx={{ typography: 'caption', color: 'text.disabled' }}
      >
        <Iconify icon="solar:lock-password-outline" />
        Your transaction is secured with SSL encryption
      </Box>
    </Box>
  );
}
