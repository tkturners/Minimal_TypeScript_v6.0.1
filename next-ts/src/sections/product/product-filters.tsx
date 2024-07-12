import type { IProductFilters } from 'src/types/product';
import type { UseSetStateReturn } from 'src/hooks/use-set-state';

import { useCallback } from 'react';

import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Drawer from '@mui/material/Drawer';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputBase, { inputBaseClasses } from '@mui/material/InputBase';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';
import { ColorPicker } from 'src/components/color-utils';

// ----------------------------------------------------------------------

type Props = {
  open: boolean;
  canReset: boolean;
  onOpen: () => void;
  onClose: () => void;
  filters: UseSetStateReturn<IProductFilters>;
  options: {
    colors: string[];
    ratings: string[];
    categories: string[];
    genders: { value: string; label: string }[];
  };
};

export function ProductFilters({ open, onOpen, onClose, canReset, filters, options }: Props) {
  const marksLabel = [...Array(21)].map((_, index) => {
    const value = index * 10;

    const firstValue = index === 0 ? `$${value}` : `${value}`;

    return { value, label: index % 4 ? '' : firstValue };
  });

  const handleFilterGender = useCallback(
    (newValue: string) => {
      const checked = filters.state.gender.includes(newValue)
        ? filters.state.gender.filter((value) => value !== newValue)
        : [...filters.state.gender, newValue];

      filters.setState({ gender: checked });
    },
    [filters]
  );

  const handleFilterCategory = useCallback(
    (newValue: string) => {
      filters.setState({ category: newValue });
    },
    [filters]
  );

  const handleFilterColors = useCallback(
    (newValue: string[]) => {
      filters.setState({ colors: newValue });
    },
    [filters]
  );

  const handleFilterPriceRange = useCallback(
    (event: Event, newValue: number | number[]) => {
      filters.setState({ priceRange: newValue as number[] });
    },
    [filters]
  );

  const handleFilterRating = useCallback(
    (newValue: string) => {
      filters.setState({ rating: newValue });
    },
    [filters]
  );

  const renderHead = (
    <>
      <Box display="flex" alignItems="center" sx={{ py: 2, pr: 1, pl: 2.5 }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Filters
        </Typography>

        <Tooltip title="Reset">
          <IconButton onClick={filters.onResetState}>
            <Badge color="error" variant="dot" invisible={!canReset}>
              <Iconify icon="solar:restart-bold" />
            </Badge>
          </IconButton>
        </Tooltip>

        <IconButton onClick={onClose}>
          <Iconify icon="mingcute:close-line" />
        </IconButton>
      </Box>

      <Divider sx={{ borderStyle: 'dashed' }} />
    </>
  );

  const renderGender = (
    <Box display="flex" flexDirection="column">
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Gender
      </Typography>
      {options.genders.map((option) => (
        <FormControlLabel
          key={option.value}
          control={
            <Checkbox
              checked={filters.state.gender.includes(option.label)}
              onClick={() => handleFilterGender(option.label)}
            />
          }
          label={option.label}
        />
      ))}
    </Box>
  );

  const renderCategory = (
    <Box display="flex" flexDirection="column">
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Category
      </Typography>
      {options.categories.map((option) => (
        <FormControlLabel
          key={option}
          control={
            <Radio
              checked={option === filters.state.category}
              onClick={() => handleFilterCategory(option)}
            />
          }
          label={option}
          sx={{ ...(option === 'all' && { textTransform: 'capitalize' }) }}
        />
      ))}
    </Box>
  );

  const renderColor = (
    <Box display="flex" flexDirection="column">
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Color
      </Typography>
      <ColorPicker
        selected={filters.state.colors}
        onSelectColor={(colors) => handleFilterColors(colors as string[])}
        colors={options.colors}
        limit={6}
      />
    </Box>
  );

  const renderPrice = (
    <Box display="flex" flexDirection="column">
      <Typography variant="subtitle2">Price</Typography>

      <Box gap={5} display="flex" sx={{ my: 2 }}>
        <InputRange type="min" value={filters.state.priceRange} onFilters={filters.setState} />
        <InputRange type="max" value={filters.state.priceRange} onFilters={filters.setState} />
      </Box>

      <Slider
        value={filters.state.priceRange}
        onChange={handleFilterPriceRange}
        step={10}
        min={0}
        max={200}
        marks={marksLabel}
        getAriaValueText={(value) => `$${value}`}
        valueLabelFormat={(value) => `$${value}`}
        sx={{ alignSelf: 'center', width: `calc(100% - 24px)` }}
      />
    </Box>
  );

  const renderRating = (
    <Box display="flex" flexDirection="column">
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Rating
      </Typography>

      {options.ratings.map((item, index) => (
        <Box
          key={item}
          onClick={() => handleFilterRating(item)}
          sx={{
            mb: 1,
            gap: 1,
            ml: -1,
            p: 0.5,
            display: 'flex',
            borderRadius: 1,
            cursor: 'pointer',
            typography: 'body2',
            alignItems: 'center',
            '&:hover': { opacity: 0.48 },
            ...(filters.state.rating === item && {
              bgcolor: 'action.selected',
            }),
          }}
        >
          <Rating readOnly value={4 - index} /> & Up
        </Box>
      ))}
    </Box>
  );

  return (
    <>
      <Button
        disableRipple
        color="inherit"
        endIcon={
          <Badge color="error" variant="dot" invisible={!canReset}>
            <Iconify icon="ic:round-filter-list" />
          </Badge>
        }
        onClick={onOpen}
      >
        Filters
      </Button>

      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        slotProps={{ backdrop: { invisible: true } }}
        PaperProps={{ sx: { width: 320 } }}
      >
        {renderHead}

        <Scrollbar sx={{ px: 2.5, py: 3 }}>
          <Stack spacing={3}>
            {renderGender}
            {renderCategory}
            {renderColor}
            {renderPrice}
            {renderRating}
          </Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}

// ----------------------------------------------------------------------

type InputRangeProps = {
  type: 'min' | 'max';
  value: number[];
  onFilters: UseSetStateReturn<IProductFilters>['setState'];
};

function InputRange({ type, value, onFilters }: InputRangeProps) {
  const min = value[0];

  const max = value[1];

  const handleBlurInputRange = useCallback(() => {
    if (min < 0) {
      onFilters({ priceRange: [0, max] });
    }
    if (min > 200) {
      onFilters({ priceRange: [200, max] });
    }
    if (max < 0) {
      onFilters({ priceRange: [min, 0] });
    }
    if (max > 200) {
      onFilters({ priceRange: [min, 200] });
    }
  }, [max, min, onFilters]);

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: 1 }}>
      <Typography
        variant="caption"
        sx={{
          flexShrink: 0,
          color: 'text.disabled',
          textTransform: 'capitalize',
          fontWeight: 'fontWeightSemiBold',
        }}
      >
        {`${type} ($)`}
      </Typography>

      <InputBase
        fullWidth
        value={type === 'min' ? min : max}
        onChange={(event) =>
          type === 'min'
            ? onFilters({ priceRange: [Number(event.target.value), max] })
            : onFilters({ priceRange: [min, Number(event.target.value)] })
        }
        onBlur={handleBlurInputRange}
        inputProps={{
          step: 10,
          min: 0,
          max: 200,
          type: 'number',
          'aria-labelledby': 'input-slider',
        }}
        sx={{
          maxWidth: 48,
          borderRadius: 0.75,
          bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
          [`& .${inputBaseClasses.input}`]: {
            pr: 1,
            py: 0.75,
            textAlign: 'right',
            typography: 'body2',
          },
        }}
      />
    </Stack>
  );
}
