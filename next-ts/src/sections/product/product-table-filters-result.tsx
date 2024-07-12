import type { Theme, SxProps } from '@mui/material/styles';
import type { IProductTableFilters } from 'src/types/product';
import type { UseSetStateReturn } from 'src/hooks/use-set-state';

import { useCallback } from 'react';

import Chip from '@mui/material/Chip';

import { sentenceCase } from 'src/utils/change-case';

import { chipProps, FiltersBlock, FiltersResult } from 'src/components/filters-result';

// ----------------------------------------------------------------------

type Props = {
  totalResults: number;
  sx?: SxProps<Theme>;
  filters: UseSetStateReturn<IProductTableFilters>;
};

export function ProductTableFiltersResult({ filters, totalResults, sx }: Props) {
  const handleRemoveStock = useCallback(
    (inputValue: string) => {
      const newValue = filters.state.stock.filter((item) => item !== inputValue);

      filters.setState({ stock: newValue });
    },
    [filters]
  );

  const handleRemovePublish = useCallback(
    (inputValue: string) => {
      const newValue = filters.state.publish.filter((item) => item !== inputValue);

      filters.setState({ publish: newValue });
    },
    [filters]
  );

  return (
    <FiltersResult totalResults={totalResults} onReset={filters.onResetState} sx={sx}>
      <FiltersBlock label="Stock:" isShow={!!filters.state.stock.length}>
        {filters.state.stock.map((item) => (
          <Chip
            {...chipProps}
            key={item}
            label={sentenceCase(item)}
            onDelete={() => handleRemoveStock(item)}
          />
        ))}
      </FiltersBlock>

      <FiltersBlock label="Publish:" isShow={!!filters.state.publish.length}>
        {filters.state.publish.map((item) => (
          <Chip
            {...chipProps}
            key={item}
            label={sentenceCase(item)}
            onDelete={() => handleRemovePublish(item)}
          />
        ))}
      </FiltersBlock>
    </FiltersResult>
  );
}
