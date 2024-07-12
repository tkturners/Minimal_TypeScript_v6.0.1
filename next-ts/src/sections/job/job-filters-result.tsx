import type { IJobFilters } from 'src/types/job';
import type { Theme, SxProps } from '@mui/material/styles';
import type { UseSetStateReturn } from 'src/hooks/use-set-state';

import Chip from '@mui/material/Chip';

import { chipProps, FiltersBlock, FiltersResult } from 'src/components/filters-result';

// ----------------------------------------------------------------------

type Props = {
  totalResults: number;
  sx?: SxProps<Theme>;
  filters: UseSetStateReturn<IJobFilters>;
};

export function JobFiltersResult({ filters, totalResults, sx }: Props) {
  const handleRemoveEmploymentTypes = (inputValue: string) => {
    const newValue = filters.state.employmentTypes.filter((item) => item !== inputValue);
    filters.setState({ employmentTypes: newValue });
  };

  const handleRemoveExperience = () => {
    filters.setState({ experience: 'all' });
  };

  const handleRemoveRoles = (inputValue: string) => {
    const newValue = filters.state.roles.filter((item) => item !== inputValue);
    filters.setState({ roles: newValue });
  };

  const handleRemoveLocations = (inputValue: string) => {
    const newValue = filters.state.locations.filter((item) => item !== inputValue);
    filters.setState({ locations: newValue });
  };

  const handleRemoveBenefits = (inputValue: string) => {
    const newValue = filters.state.benefits.filter((item) => item !== inputValue);
    filters.setState({ benefits: newValue });
  };

  return (
    <FiltersResult totalResults={totalResults} onReset={filters.onResetState} sx={sx}>
      <FiltersBlock label="Employment types:" isShow={!!filters.state.employmentTypes.length}>
        {filters.state.employmentTypes.map((item) => (
          <Chip
            {...chipProps}
            key={item}
            label={item}
            onDelete={() => handleRemoveEmploymentTypes(item)}
          />
        ))}
      </FiltersBlock>

      <FiltersBlock label="Experience:" isShow={filters.state.experience !== 'all'}>
        <Chip {...chipProps} label={filters.state.experience} onDelete={handleRemoveExperience} />
      </FiltersBlock>

      <FiltersBlock label="Roles:" isShow={!!filters.state.roles.length}>
        {filters.state.roles.map((item) => (
          <Chip {...chipProps} key={item} label={item} onDelete={() => handleRemoveRoles(item)} />
        ))}
      </FiltersBlock>

      <FiltersBlock label="Locations:" isShow={!!filters.state.locations.length}>
        {filters.state.locations.map((item) => (
          <Chip
            {...chipProps}
            key={item}
            label={item}
            onDelete={() => handleRemoveLocations(item)}
          />
        ))}
      </FiltersBlock>

      <FiltersBlock label="Benefits:" isShow={!!filters.state.benefits.length}>
        {filters.state.benefits.map((item) => (
          <Chip
            {...chipProps}
            key={item}
            label={item}
            onDelete={() => handleRemoveBenefits(item)}
          />
        ))}
      </FiltersBlock>
    </FiltersResult>
  );
}
