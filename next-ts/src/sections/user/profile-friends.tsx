import type { IUserProfileFriend } from 'src/types/user';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { _socials } from 'src/_mock';

import { Iconify, SocialIcon } from 'src/components/iconify';
import { SearchNotFound } from 'src/components/search-not-found';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

type Props = {
  searchFriends: string;
  friends: IUserProfileFriend[];
  onSearchFriends: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function ProfileFriends({ friends, searchFriends, onSearchFriends }: Props) {
  const dataFiltered = applyFilter({ inputData: friends, query: searchFriends });

  const notFound = !dataFiltered.length && !!searchFriends;

  return (
    <>
      <Stack
        spacing={2}
        justifyContent="space-between"
        direction={{ xs: 'column', sm: 'row' }}
        sx={{ my: 5 }}
      >
        <Typography variant="h4">Friends</Typography>

        <TextField
          value={searchFriends}
          onChange={onSearchFriends}
          placeholder="Search friends..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
          sx={{ width: { xs: 1, sm: 260 } }}
        />
      </Stack>

      {notFound ? (
        <SearchNotFound query={searchFriends} sx={{ py: 10 }} />
      ) : (
        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
        >
          {dataFiltered.map((item) => (
            <FriendCard key={item.id} item={item} />
          ))}
        </Box>
      )}
    </>
  );
}

// ----------------------------------------------------------------------

type FriendCardProps = {
  item: IUserProfileFriend;
};

function FriendCard({ item }: FriendCardProps) {
  const popover = usePopover();

  const handleDelete = () => {
    popover.onClose();
    console.info('DELETE', item.name);
  };

  const handleEdit = () => {
    popover.onClose();
    console.info('EDIT', item.name);
  };

  return (
    <>
      <Card
        sx={{
          py: 5,
          display: 'flex',
          position: 'relative',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Avatar alt={item.name} src={item.avatarUrl} sx={{ width: 64, height: 64, mb: 3 }} />

        <Link variant="subtitle1" color="text.primary">
          {item.name}
        </Link>

        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1, mt: 0.5 }}>
          {item.role}
        </Typography>

        <Stack alignItems="center" justifyContent="center" direction="row">
          {_socials.map((social) => (
            <IconButton key={social.name}>
              <SocialIcon icon={social.name} />
            </IconButton>
          ))}
        </Stack>

        <IconButton
          color={popover.open ? 'inherit' : 'default'}
          onClick={popover.onOpen}
          sx={{ top: 8, right: 8, position: 'absolute' }}
        >
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton>
      </Card>

      <CustomPopover
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
        slotProps={{ arrow: { placement: 'right-top' } }}
      >
        <MenuList>
          <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
            <Iconify icon="solar:trash-bin-trash-bold" />
            Delete
          </MenuItem>

          <MenuItem onClick={handleEdit}>
            <Iconify icon="solar:pen-bold" />
            Edit
          </MenuItem>
        </MenuList>
      </CustomPopover>
    </>
  );
}

// ----------------------------------------------------------------------

type ApplyFilterProps = {
  query: string;
  inputData: IUserProfileFriend[];
};

function applyFilter({ inputData, query }: ApplyFilterProps) {
  if (query) {
    return inputData.filter(
      (friend) => friend.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }

  return inputData;
}
