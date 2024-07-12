import type { StackProps } from '@mui/material/Stack';

import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';

// ----------------------------------------------------------------------

type Props = StackProps & {
  variantKey: {
    type: string;
    values: string[];
  }[];
  selectVariant: string;
  onChangeVariant: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function ControlPanel({ variantKey, selectVariant, onChangeVariant, sx, ...other }: Props) {
  return (
    <Stack
      sx={{
        p: 2.5,
        width: 320,
        overflowX: 'auto',
        borderLeft: (theme) => `solid 1px ${theme.vars.palette.divider}`,
        ...sx,
      }}
      {...other}
    >
      <RadioGroup value={selectVariant} onChange={onChangeVariant}>
        {variantKey.map((variant) => (
          <Box key={variant.type} sx={{ my: 1.5 }}>
            <Typography variant="overline" sx={{ px: 1, mb: 1, display: 'block' }}>
              {variant.type}
            </Typography>

            {variant.values.map((value) => (
              <FormControlLabel
                key={value}
                value={value}
                label={value}
                control={<Radio sx={{ display: 'none' }} />}
                sx={{
                  px: 1,
                  py: 0.5,
                  mx: 0,
                  my: 0.25,
                  width: '100%',
                  borderRadius: 0.75,
                  color: 'text.secondary',
                  ...(selectVariant === value && { color: 'warning.contrastText' }),
                  ...(selectVariant === value && { bgcolor: 'warning.main' }),
                }}
              />
            ))}
          </Box>
        ))}
      </RadioGroup>
    </Stack>
  );
}
