import type { StackProps } from '@mui/material/Stack';
import type { Theme, SxProps } from '@mui/material/styles';
import type { ITourGuide, ITourFilters } from 'src/types/tour';
import type { UseSetStateReturn } from 'src/hooks/use-set-state';

import { useCallback } from 'react';

import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';

import { fDateRangeShortLabel } from 'src/utils/format-time';

import { chipProps, FiltersBlock, FiltersResult } from 'src/components/filters-result';

// ----------------------------------------------------------------------

type Props = StackProps & {
  totalResults: number;
  sx?: SxProps<Theme>;
  filters: UseSetStateReturn<ITourFilters>;
};

export function TourFiltersResult({ filters, totalResults, sx }: Props) {
  const handleRemoveServices = useCallback(
    (inputValue: string) => {
      const newValue = filters.state.services.filter((item) => item !== inputValue);

      filters.setState({ services: newValue });
    },
    [filters]
  );

  const handleRemoveAvailable = useCallback(() => {
    filters.setState({ startDate: null, endDate: null });
  }, [filters]);

  const handleRemoveTourGuide = useCallback(
    (inputValue: ITourGuide) => {
      const newValue = filters.state.tourGuides.filter((item) => item.name !== inputValue.name);

      filters.setState({ tourGuides: newValue });
    },
    [filters]
  );

  const handleRemoveDestination = useCallback(
    (inputValue: string) => {
      const newValue = filters.state.destination.filter((item) => item !== inputValue);

      filters.setState({ destination: newValue });
    },
    [filters]
  );

  return (
    <FiltersResult totalResults={totalResults} onReset={filters.onResetState} sx={sx}>
      <FiltersBlock
        label="Available:"
        isShow={Boolean(filters.state.startDate && filters.state.endDate)}
      >
        <Chip
          {...chipProps}
          label={fDateRangeShortLabel(filters.state.startDate, filters.state.endDate)}
          onDelete={handleRemoveAvailable}
        />
      </FiltersBlock>

      <FiltersBlock label="Services:" isShow={!!filters.state.services.length}>
        {filters.state.services.map((item) => (
          <Chip
            {...chipProps}
            key={item}
            label={item}
            onDelete={() => handleRemoveServices(item)}
          />
        ))}
      </FiltersBlock>

      <FiltersBlock label="Tour guide:" isShow={!!filters.state.tourGuides.length}>
        {filters.state.tourGuides.map((item) => (
          <Chip
            {...chipProps}
            key={item.id}
            avatar={<Avatar alt={item.name} src={item.avatarUrl} />}
            label={item.name}
            onDelete={() => handleRemoveTourGuide(item)}
          />
        ))}
      </FiltersBlock>

      <FiltersBlock label="Destination:" isShow={!!filters.state.destination.length}>
        {filters.state.destination.map((item) => (
          <Chip
            {...chipProps}
            key={item}
            label={item}
            onDelete={() => handleRemoveDestination(item)}
          />
        ))}
      </FiltersBlock>
    </FiltersResult>
  );
}
