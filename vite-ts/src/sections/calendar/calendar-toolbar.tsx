import type { IDateValue } from 'src/types/common';
import type { ICalendarView } from 'src/types/calendar';

import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import { Iconify } from 'src/components/iconify';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

const VIEW_OPTIONS = [
  { value: 'dayGridMonth', label: 'Month', icon: 'mingcute:calendar-month-line' },
  { value: 'timeGridWeek', label: 'Week', icon: 'mingcute:calendar-week-line' },
  { value: 'timeGridDay', label: 'Day', icon: 'mingcute:calendar-day-line' },
  { value: 'listWeek', label: 'Agenda', icon: 'fluent:calendar-agenda-24-regular' },
] as const;

// ----------------------------------------------------------------------

type Props = {
  loading: boolean;
  canReset: boolean;
  view: ICalendarView;
  date: IDateValue;
  onToday: () => void;
  onNextDate: () => void;
  onPrevDate: () => void;
  onOpenFilters: () => void;
  onChangeView: (newView: ICalendarView) => void;
};

export function CalendarToolbar({
  date,
  view,
  loading,
  onToday,
  canReset,
  onNextDate,
  onPrevDate,
  onChangeView,
  onOpenFilters,
}: Props) {
  const popover = usePopover();

  const selectedItem = VIEW_OPTIONS.filter((item) => item.value === view)[0];

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ p: 2.5, pr: 2, position: 'relative' }}
      >
        <Button
          size="small"
          color="inherit"
          onClick={popover.onOpen}
          startIcon={<Iconify icon={selectedItem.icon} />}
          endIcon={<Iconify icon="eva:arrow-ios-downward-fill" sx={{ ml: -0.5 }} />}
          sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
        >
          {selectedItem.label}
        </Button>

        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton onClick={onPrevDate}>
            <Iconify icon="eva:arrow-ios-back-fill" />
          </IconButton>

          <Typography variant="h6">{date}</Typography>

          <IconButton onClick={onNextDate}>
            <Iconify icon="eva:arrow-ios-forward-fill" />
          </IconButton>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1}>
          <Button size="small" color="error" variant="contained" onClick={onToday}>
            Today
          </Button>

          <IconButton onClick={onOpenFilters}>
            <Badge color="error" variant="dot" invisible={!canReset}>
              <Iconify icon="ic:round-filter-list" />
            </Badge>
          </IconButton>
        </Stack>

        {loading && (
          <LinearProgress
            color="inherit"
            sx={{
              left: 0,
              width: 1,
              height: 2,
              bottom: 0,
              borderRadius: 0,
              position: 'absolute',
            }}
          />
        )}
      </Stack>

      <CustomPopover
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
        slotProps={{ arrow: { placement: 'top-left' } }}
      >
        <MenuList>
          {VIEW_OPTIONS.map((viewOption) => (
            <MenuItem
              key={viewOption.value}
              selected={viewOption.value === view}
              onClick={() => {
                popover.onClose();
                onChangeView(viewOption.value);
              }}
            >
              <Iconify icon={viewOption.icon} />
              {viewOption.label}
            </MenuItem>
          ))}
        </MenuList>
      </CustomPopover>
    </>
  );
}
