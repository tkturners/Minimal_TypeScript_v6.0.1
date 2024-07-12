import type { IDatePickerControl } from 'src/types/common';
import type { ITourGuide, ITourFilters } from 'src/types/tour';
import type { UseSetStateReturn } from 'src/hooks/use-set-state';

import { useCallback } from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControlLabel from '@mui/material/FormControlLabel';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';
import { CountrySelect } from 'src/components/country-select';

// ----------------------------------------------------------------------

type Props = {
  open: boolean;
  canReset: boolean;
  dateError: boolean;
  onOpen: () => void;
  onClose: () => void;
  filters: UseSetStateReturn<ITourFilters>;
  options: {
    services: string[];
    tourGuides: ITourGuide[];
  };
};

export function TourFilters({
  open,
  onOpen,
  onClose,
  filters,
  options,
  canReset,
  dateError,
}: Props) {
  const handleFilterServices = useCallback(
    (newValue: string) => {
      const checked = filters.state.services.includes(newValue)
        ? filters.state.services.filter((value) => value !== newValue)
        : [...filters.state.services, newValue];

      filters.setState({ services: checked });
    },
    [filters]
  );

  const handleFilterStartDate = useCallback(
    (newValue: IDatePickerControl) => {
      filters.setState({ startDate: newValue });
    },
    [filters]
  );

  const handleFilterEndDate = useCallback(
    (newValue: IDatePickerControl) => {
      filters.setState({ endDate: newValue });
    },
    [filters]
  );

  const handleFilterDestination = useCallback(
    (newValue: string[]) => {
      filters.setState({ destination: newValue });
    },
    [filters]
  );

  const handleFilterTourGuide = useCallback(
    (newValue: ITourGuide[]) => {
      filters.setState({ tourGuides: newValue });
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

  const renderDateRange = (
    <Box display="flex" flexDirection="column">
      <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
        Durations
      </Typography>

      <DatePicker
        label="Start date"
        value={filters.state.startDate}
        onChange={handleFilterStartDate}
        sx={{ mb: 2.5 }}
      />

      <DatePicker
        label="End date"
        value={filters.state.endDate}
        onChange={handleFilterEndDate}
        slotProps={{
          textField: {
            error: dateError,
            helperText: dateError ? 'End date must be later than start date' : null,
          },
        }}
      />
    </Box>
  );

  const renderDestination = (
    <Box display="flex" flexDirection="column">
      <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
        Destination
      </Typography>

      <CountrySelect
        id="multiple-destinations"
        multiple
        fullWidth
        placeholder={filters.state.destination.length ? '+ Destination' : 'Select Destination'}
        value={filters.state.destination}
        onChange={(event, newValue) => handleFilterDestination(newValue)}
      />
    </Box>
  );

  const renderTourGuide = (
    <Box display="flex" flexDirection="column">
      <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
        Tour guide
      </Typography>

      <Autocomplete
        multiple
        disableCloseOnSelect
        options={options.tourGuides}
        value={filters.state.tourGuides}
        onChange={(event, newValue) => handleFilterTourGuide(newValue)}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField placeholder="Select Tour Guides" {...params} />}
        renderOption={(props, tourGuide) => (
          <li {...props} key={tourGuide.id}>
            <Avatar
              key={tourGuide.id}
              alt={tourGuide.avatarUrl}
              src={tourGuide.avatarUrl}
              sx={{ mr: 1, width: 24, height: 24, flexShrink: 0 }}
            />

            {tourGuide.name}
          </li>
        )}
        renderTags={(selected, getTagProps) =>
          selected.map((tourGuide, index) => (
            <Chip
              {...getTagProps({ index })}
              key={tourGuide.id}
              size="small"
              variant="soft"
              label={tourGuide.name}
              avatar={<Avatar alt={tourGuide.name} src={tourGuide.avatarUrl} />}
            />
          ))
        }
      />
    </Box>
  );

  const renderServices = (
    <Box display="flex" flexDirection="column">
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Services
      </Typography>
      {options.services.map((option) => (
        <FormControlLabel
          key={option}
          control={
            <Checkbox
              checked={filters.state.services.includes(option)}
              onClick={() => handleFilterServices(option)}
            />
          }
          label={option}
        />
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
            {renderDateRange}
            {renderDestination}
            {renderTourGuide}
            {renderServices}
          </Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}
