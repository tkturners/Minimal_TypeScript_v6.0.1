import type { BoxProps } from '@mui/material/Box';
import type { CardProps } from '@mui/material/Card';
import type { ICheckoutDeliveryOption } from 'src/types/checkout';

import { Controller, useFormContext } from 'react-hook-form';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = CardProps & {
  name: string;
  options: ICheckoutDeliveryOption[];
  onApplyShipping: (shipping: number) => void;
};

export function CheckoutDelivery({ name, options, onApplyShipping, sx, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Card sx={sx} {...other}>
      <CardHeader title="Delivery" />

      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <Box
            columnGap={2}
            rowGap={2.5}
            display="grid"
            gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}
            sx={{ p: 3 }}
          >
            {options.map((option) => (
              <OptionItem
                key={option.label}
                option={option}
                selected={value === option.value}
                onClick={() => {
                  onChange(option.value);
                  onApplyShipping(option.value);
                }}
              />
            ))}
          </Box>
        )}
      />
    </Card>
  );
}

// ----------------------------------------------------------------------

type OptionItemProps = BoxProps & {
  selected: boolean;
  option: ICheckoutDeliveryOption;
};

function OptionItem({ option, selected, sx, ...other }: OptionItemProps) {
  return (
    <Box
      display="flex"
      sx={{
        p: 2.5,
        gap: 2,
        cursor: 'pointer',
        borderRadius: 1.5,
        border: (theme) => `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
        transition: (theme) =>
          theme.transitions.create(['box-shadow'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shortest,
          }),
        ...(selected && {
          boxShadow: (theme) => `0 0 0 2px ${theme.vars.palette.text.primary}`,
        }),
        ...sx,
      }}
      {...other}
    >
      <Iconify
        width={28}
        icon={
          (option.label === 'Standard' && 'carbon:delivery') ||
          (option.label === 'Express' && 'carbon:rocket') ||
          'carbon:bicycle'
        }
      />

      <Box flex="1 1 auto">
        <Box display="flex" alignItems="center" sx={{ mb: 0.5, typography: 'h6' }}>
          <Box component="span" flexGrow={1} sx={{ typography: 'subtitle1' }}>
            {option.label}
          </Box>
          {`$${option.value}`}
        </Box>
        <Box component="span" display="flex" sx={{ typography: 'body2', color: 'text.secondary' }}>
          {option.description}
        </Box>
      </Box>
    </Box>
  );
}
