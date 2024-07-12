import type { IJobItem, IJobFilters } from 'src/types/job';

import { useState, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';
import { useSetState } from 'src/hooks/use-set-state';

import { orderBy } from 'src/utils/helper';

import { DashboardContent } from 'src/layouts/dashboard';
import {
  _jobs,
  _roles,
  JOB_SORT_OPTIONS,
  JOB_BENEFIT_OPTIONS,
  JOB_EXPERIENCE_OPTIONS,
  JOB_EMPLOYMENT_TYPE_OPTIONS,
} from 'src/_mock';

import { Iconify } from 'src/components/iconify';
import { EmptyContent } from 'src/components/empty-content';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { JobList } from '../job-list';
import { JobSort } from '../job-sort';
import { JobSearch } from '../job-search';
import { JobFilters } from '../job-filters';
import { JobFiltersResult } from '../job-filters-result';

// ----------------------------------------------------------------------

export function JobListView() {
  const openFilters = useBoolean();

  const [sortBy, setSortBy] = useState('latest');

  const search = useSetState<{
    query: string;
    results: IJobItem[];
  }>({ query: '', results: [] });

  const filters = useSetState<IJobFilters>({
    roles: [],
    locations: [],
    benefits: [],
    experience: 'all',
    employmentTypes: [],
  });

  const dataFiltered = applyFilter({ inputData: _jobs, filters: filters.state, sortBy });

  const canReset =
    filters.state.roles.length > 0 ||
    filters.state.locations.length > 0 ||
    filters.state.benefits.length > 0 ||
    filters.state.employmentTypes.length > 0 ||
    filters.state.experience !== 'all';

  const notFound = !dataFiltered.length && canReset;

  const handleSortBy = useCallback((newValue: string) => {
    setSortBy(newValue);
  }, []);

  const handleSearch = useCallback(
    (inputValue: string) => {
      search.setState({ query: inputValue });

      if (inputValue) {
        const results = _jobs.filter(
          (job) => job.title.toLowerCase().indexOf(search.state.query.toLowerCase()) !== -1
        );

        search.setState({ results });
      }
    },
    [search]
  );

  const renderFilters = (
    <Stack
      spacing={3}
      justifyContent="space-between"
      alignItems={{ xs: 'flex-end', sm: 'center' }}
      direction={{ xs: 'column', sm: 'row' }}
    >
      <JobSearch search={search} onSearch={handleSearch} />

      <Stack direction="row" spacing={1} flexShrink={0}>
        <JobFilters
          filters={filters}
          canReset={canReset}
          open={openFilters.value}
          onOpen={openFilters.onTrue}
          onClose={openFilters.onFalse}
          options={{
            roles: _roles,
            benefits: JOB_BENEFIT_OPTIONS.map((option) => option.label),
            employmentTypes: JOB_EMPLOYMENT_TYPE_OPTIONS.map((option) => option.label),
            experiences: ['all', ...JOB_EXPERIENCE_OPTIONS.map((option) => option.label)],
          }}
        />

        <JobSort sort={sortBy} onSort={handleSortBy} sortOptions={JOB_SORT_OPTIONS} />
      </Stack>
    </Stack>
  );

  const renderResults = <JobFiltersResult filters={filters} totalResults={dataFiltered.length} />;

  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="List"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Job', href: paths.dashboard.job.root },
          { name: 'List' },
        ]}
        action={
          <Button
            component={RouterLink}
            href={paths.dashboard.job.new}
            variant="contained"
            startIcon={<Iconify icon="mingcute:add-line" />}
          >
            New job
          </Button>
        }
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Stack spacing={2.5} sx={{ mb: { xs: 3, md: 5 } }}>
        {renderFilters}

        {canReset && renderResults}
      </Stack>

      {notFound && <EmptyContent filled sx={{ py: 10 }} />}

      <JobList jobs={dataFiltered} />
    </DashboardContent>
  );
}

// ----------------------------------------------------------------------

type ApplyFilterProps = {
  inputData: IJobItem[];
  filters: IJobFilters;
  sortBy: string;
};

const applyFilter = ({ inputData, filters, sortBy }: ApplyFilterProps) => {
  const { employmentTypes, experience, roles, locations, benefits } = filters;

  // Sort by
  if (sortBy === 'latest') {
    inputData = orderBy(inputData, ['createdAt'], ['desc']);
  }

  if (sortBy === 'oldest') {
    inputData = orderBy(inputData, ['createdAt'], ['asc']);
  }

  if (sortBy === 'popular') {
    inputData = orderBy(inputData, ['totalViews'], ['desc']);
  }

  // Filters
  if (employmentTypes.length) {
    inputData = inputData.filter((job) =>
      job.employmentTypes.some((item) => employmentTypes.includes(item))
    );
  }

  if (experience !== 'all') {
    inputData = inputData.filter((job) => job.experience === experience);
  }

  if (roles.length) {
    inputData = inputData.filter((job) => roles.includes(job.role));
  }

  if (locations.length) {
    inputData = inputData.filter((job) => job.locations.some((item) => locations.includes(item)));
  }

  if (benefits.length) {
    inputData = inputData.filter((job) => job.benefits.some((item) => benefits.includes(item)));
  }

  return inputData;
};
