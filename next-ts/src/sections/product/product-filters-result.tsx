import type { IProductFilters } from 'src/types/product';
import type { Theme, SxProps } from '@mui/material/styles';
import type { UseSetStateReturn } from 'src/hooks/use-set-state';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import { varAlpha } from 'src/theme/styles';

import { chipProps, FiltersBlock, FiltersResult } from 'src/components/filters-result';

// ----------------------------------------------------------------------

type Props = {
  totalResults: number;
  sx?: SxProps<Theme>;
  filters: UseSetStateReturn<IProductFilters>;
};

export function ProductFiltersResult({ filters, totalResults, sx }: Props) {
  const handleRemoveGender = (inputValue: string) => {
    const newValue = filters.state.gender.filter((item) => item !== inputValue);

    filters.setState({ gender: newValue });
  };

  const handleRemoveCategory = () => {
    filters.setState({ category: 'all' });
  };

  const handleRemoveColor = (inputValue: string | string[]) => {
    const newValue = filters.state.colors.filter((item: string) => item !== inputValue);

    filters.setState({ colors: newValue });
  };

  const handleRemovePrice = () => {
    filters.setState({ priceRange: [0, 200] });
  };

  const handleRemoveRating = () => {
    filters.setState({ rating: '' });
  };

  return (
    <FiltersResult totalResults={totalResults} onReset={filters.onResetState} sx={sx}>
      <FiltersBlock label="Gender:" isShow={!!filters.state.gender.length}>
        {filters.state.gender.map((item) => (
          <Chip {...chipProps} key={item} label={item} onDelete={() => handleRemoveGender(item)} />
        ))}
      </FiltersBlock>

      <FiltersBlock label="Category:" isShow={filters.state.category !== 'all'}>
        <Chip {...chipProps} label={filters.state.category} onDelete={handleRemoveCategory} />
      </FiltersBlock>

      <FiltersBlock label="Colors:" isShow={!!filters.state.colors.length}>
        {filters.state.colors.map((item) => (
          <Chip
            {...chipProps}
            key={item}
            label={
              <Box
                sx={{
                  ml: -0.5,
                  width: 18,
                  height: 18,
                  bgcolor: item,
                  borderRadius: '50%',
                  border: (theme) =>
                    `solid 1px ${varAlpha(theme.vars.palette.common.whiteChannel, 0.24)}`,
                }}
              />
            }
            onDelete={() => handleRemoveColor(item)}
          />
        ))}
      </FiltersBlock>

      <FiltersBlock
        label="Price:"
        isShow={filters.state.priceRange[0] !== 0 || filters.state.priceRange[1] !== 200}
      >
        <Chip
          {...chipProps}
          label={`$${filters.state.priceRange[0]} - ${filters.state.priceRange[1]}`}
          onDelete={handleRemovePrice}
        />
      </FiltersBlock>

      <FiltersBlock label="Rating:" isShow={!!filters.state.rating}>
        <Chip {...chipProps} label={filters.state.rating} onDelete={handleRemoveRating} />
      </FiltersBlock>
    </FiltersResult>
  );
}
