import type { SelectChangeEvent } from '@mui/material/Select';

import { useState, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import { svgIconClasses } from '@mui/material/SvgIcon';
import Badge, { badgeClasses } from '@mui/material/Badge';

import { Iconify } from 'src/components/iconify';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

import { useMockedUser } from 'src/auth/hooks';

// ----------------------------------------------------------------------

export function ChatNavAccount() {
  const { user } = useMockedUser();

  const popover = usePopover();

  const [status, setStatus] = useState<'online' | 'alway' | 'busy' | 'offline'>('online');

  const handleChangeStatus = useCallback((event: SelectChangeEvent) => {
    setStatus(event.target.value as 'online' | 'alway' | 'busy' | 'offline');
  }, []);

  return (
    <>
      <Badge variant={status} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Avatar
          src={user?.photoURL}
          alt={user?.displayName}
          onClick={popover.onOpen}
          sx={{ cursor: 'pointer', width: 48, height: 48 }}
        >
          {user?.displayName?.charAt(0).toUpperCase()}
        </Avatar>
      </Badge>

      <CustomPopover
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
        slotProps={{
          paper: { sx: { p: 0 } },
          arrow: { placement: 'top-left' },
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2} sx={{ py: 2, pr: 1, pl: 2 }}>
          <ListItemText
            primary={user?.displayName}
            secondary={user?.email}
            secondaryTypographyProps={{ component: 'span' }}
          />

          <Tooltip title="Log out">
            <IconButton color="error">
              <Iconify icon="ic:round-power-settings-new" />
            </IconButton>
          </Tooltip>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuList sx={{ my: 0.5, px: 0.5 }}>
          <MenuItem>
            <Badge
              variant={status}
              sx={{
                [`& .${badgeClasses.badge}`]: {
                  m: 0.75,
                  width: 12,
                  height: 12,
                  flexShrink: 0,
                  position: 'static',
                },
              }}
            />

            <FormControl fullWidth>
              <Select
                native
                fullWidth
                value={status}
                onChange={handleChangeStatus}
                input={<InputBase />}
                inputProps={{ id: 'chat-status-select', sx: { textTransform: 'capitalize' } }}
                sx={{ [`& .${svgIconClasses.root}`]: { right: 0 } }}
              >
                {['online', 'alway', 'busy', 'offline'].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </FormControl>
          </MenuItem>

          <MenuItem>
            <Iconify icon="solar:user-id-bold" width={24} />
            Profile
          </MenuItem>

          <MenuItem>
            <Iconify icon="eva:settings-2-fill" width={24} />
            Settings
          </MenuItem>
        </MenuList>
      </CustomPopover>
    </>
  );
}
