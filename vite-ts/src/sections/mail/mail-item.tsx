import type { IMail } from 'src/types/mail';
import type { ListItemButtonProps } from '@mui/material/ListItemButton';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import { fToNow } from 'src/utils/format-time';

// ----------------------------------------------------------------------

type Props = ListItemButtonProps & {
  mail: IMail;
  selected: boolean;
};

export function MailItem({ mail, selected, sx, ...other }: Props) {
  return (
    <Box component="li" sx={{ display: 'flex' }}>
      <ListItemButton
        disableGutters
        sx={{
          p: 1,
          gap: 2,
          borderRadius: 1,
          ...(selected && { bgcolor: 'action.selected' }),
          ...sx,
        }}
        {...other}
      >
        <Avatar alt={mail.from.name} src={mail.from.avatarUrl ?? ''}>
          {mail.from.name.charAt(0).toUpperCase()}
        </Avatar>

        <ListItemText
          primary={mail.from.name}
          primaryTypographyProps={{ noWrap: true, component: 'span', variant: 'subtitle2' }}
          secondary={mail.message}
          secondaryTypographyProps={{
            noWrap: true,
            component: 'span',
            variant: mail.isUnread ? 'subtitle2' : 'body2',
            color: mail.isUnread ? 'text.primary' : 'text.secondary',
          }}
        />

        <Stack alignItems="flex-end" sx={{ alignSelf: 'stretch' }}>
          <Typography
            noWrap
            variant="body2"
            component="span"
            sx={{ mb: 1.5, fontSize: 12, color: 'text.disabled' }}
          >
            {fToNow(mail.createdAt)}
          </Typography>

          {!!mail.isUnread && (
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: 'info.main',
              }}
            />
          )}
        </Stack>
      </ListItemButton>
    </Box>
  );
}
