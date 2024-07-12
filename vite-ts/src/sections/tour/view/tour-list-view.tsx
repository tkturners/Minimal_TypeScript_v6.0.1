import type { ITourItem, ITourFilters } from 'src/types/tour';

import { useState, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';
import { useSetState } from 'src/hooks/use-set-state';

import { orderBy } from 'src/utils/helper';
import { fIsAfter, fIsBetween } from 'src/utils/format-time';

import { DashboardContent } from 'src/layouts/dashboard';
import { _tours, _tourGuides, TOUR_SORT_OPTIONS, TOUR_SERVICE_OPTIONS } from 'src/_mock';

import { Iconify } from 'src/components/iconify';
import { EmptyContent } from 'src/components/empty-content';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { TourList } from '../tour-list';
import { TourSort } from '../tour-sort';
import { TourSearch } from '../tour-search';
import { TourFilters } from '../tour-filters';
import { TourFiltersResult } from '../tour-filters-result';

// ----------------------------------------------------------------------

export function TourListView() {
  const openFilters = useBoolean();

  const [sortBy, setSortBy] = useState('latest');

  const search = useSetState<{
    query: string;
    results: ITourItem[];
  }>({ query: '', results: [] });

  const filters = useSetState<ITourFilters>({
    destination: [],
    tourGuides: [],
    services: [],
    startDate: null,
    endDate: null,
  });

  const dateError = fIsAfter(filters.state.startDate, filters.state.endDate);

  const dataFiltered = applyFilter({
    inputData: _tours,
    filters: filters.state,
    sortBy,
    dateError,
  });

  const canReset =
    filters.state.destination.length > 0 ||
    filters.state.tourGuides.length > 0 ||
    filters.state.services.length > 0 ||
    (!!filters.state.startDate && !!filters.state.endDate);

  const notFound = !dataFiltered.length && canReset;

  const handleSortBy = useCallback((newValue: string) => {
    setSortBy(newValue);
  }, []);

  const handleSearch = useCallback(
    (inputValue: string) => {
      search.setState({ query: inputValue });

      if (inputValue) {
        const results = _tours.filter(
          (tour) => tour.name.toLowerCase().indexOf(search.state.query.toLowerCase()) !== -1
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
      <TourSearch search={search} onSearch={handleSearch} />

      <Stack direction="row" spacing={1} flexShrink={0}>
        <TourFilters
          filters={filters}
          canReset={canReset}
          dateError={dateError}
          open={openFilters.value}
          onOpen={openFilters.onTrue}
          onClose={openFilters.onFalse}
          options={{
            tourGuides: _tourGuides,
            services: TOUR_SERVICE_OPTIONS.map((option) => option.label),
          }}
        />

        <TourSort sort={sortBy} onSort={handleSortBy} sortOptions={TOUR_SORT_OPTIONS} />
      </Stack>
    </Stack>
  );

  const renderResults = <TourFiltersResult filters={filters} totalResults={dataFiltered.length} />;

  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="List"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Tour', href: paths.dashboard.tour.root },
          { name: 'List' },
        ]}
        action={
          <Button
            component={RouterLink}
            href={paths.dashboard.tour.new}
            variant="contained"
            startIcon={<Iconify icon="mingcute:add-line" />}
          >
            New Tour
          </Button>
        }
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Stack spacing={2.5} sx={{ mb: { xs: 3, md: 5 } }}>
        {renderFilters}

        {canReset && renderResults}
      </Stack>

      {notFound && <EmptyContent filled sx={{ py: 10 }} />}

      <TourList tours={dataFiltered} />
    </DashboardContent>
  );
}

// ----------------------------------------------------------------------

type ApplyFilterProps = {
  sortBy: string;
  dateError: boolean;
  filters: ITourFilters;
  inputData: ITourItem[];
};

const applyFilter = ({ inputData, filters, sortBy, dateError }: ApplyFilterProps) => {
  const { services, destination, startDate, endDate, tourGuides } = filters;

  const tourGuideIds = tourGuides.map((tourGuide) => tourGuide.id);

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
  if (destination.length) {
    inputData = inputData.filter((tour) => destination.includes(tour.destination));
  }

  if (tourGuideIds.length) {
    inputData = inputData.filter((tour) =>
      tour.tourGuides.some((filterItem) => tourGuideIds.includes(filterItem.id))
    );
  }

  if (services.length) {
    inputData = inputData.filter((tour) => tour.services.some((item) => services.includes(item)));
  }

  if (!dateError) {
    if (startDate && endDate) {
      inputData = inputData.filter((tour) =>
        fIsBetween(startDate, tour.available.startDate, tour.available.endDate)
      );
    }
  }

  return inputData;
};
