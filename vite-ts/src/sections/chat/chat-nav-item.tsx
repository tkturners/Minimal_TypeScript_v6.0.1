import type { IChatConversation } from 'src/types/chat';

import { useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AvatarGroup from '@mui/material/AvatarGroup';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useResponsive } from 'src/hooks/use-responsive';

import { fToNow } from 'src/utils/format-time';

import { clickConversation } from 'src/actions/chat';

import { useMockedUser } from 'src/auth/hooks';

import { getNavItem } from './utils/get-nav-item';

// ----------------------------------------------------------------------

type Props = {
  selected: boolean;
  collapse: boolean;
  onCloseMobile: () => void;
  conversation: IChatConversation;
};

export function ChatNavItem({ selected, collapse, conversation, onCloseMobile }: Props) {
  const { user } = useMockedUser();

  const mdUp = useResponsive('up', 'md');

  const router = useRouter();

  const { group, displayName, displayText, participants, lastActivity, hasOnlineInGroup } =
    getNavItem({ conversation, currentUserId: `${user?.id}` });

  const singleParticipant = participants[0];

  const { name, avatarUrl, status } = singleParticipant;

  const handleClickConversation = useCallback(async () => {
    try {
      if (!mdUp) {
        onCloseMobile();
      }

      await clickConversation(conversation.id);

      router.push(`${paths.dashboard.chat}?id=${conversation.id}`);
    } catch (error) {
      console.error(error);
    }
  }, [conversation.id, mdUp, onCloseMobile, router]);

  const renderGroup = (
    <Badge
      variant={hasOnlineInGroup ? 'online' : 'invisible'}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <AvatarGroup variant="compact" sx={{ width: 48, height: 48 }}>
        {participants.slice(0, 2).map((participant) => (
          <Avatar key={participant.id} alt={participant.name} src={participant.avatarUrl} />
        ))}
      </AvatarGroup>
    </Badge>
  );

  const renderSingle = (
    <Badge key={status} variant={status} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
      <Avatar alt={name} src={avatarUrl} sx={{ width: 48, height: 48 }} />
    </Badge>
  );

  return (
    <Box component="li" sx={{ display: 'flex' }}>
      <ListItemButton
        onClick={handleClickConversation}
        sx={{
          py: 1.5,
          px: 2.5,
          gap: 2,
          ...(selected && { bgcolor: 'action.selected' }),
        }}
      >
        <Badge
          color="error"
          overlap="circular"
          badgeContent={collapse ? conversation.unreadCount : 0}
        >
          {group ? renderGroup : renderSingle}
        </Badge>

        {!collapse && (
          <>
            <ListItemText
              primary={displayName}
              primaryTypographyProps={{ noWrap: true, component: 'span', variant: 'subtitle2' }}
              secondary={displayText}
              secondaryTypographyProps={{
                noWrap: true,
                component: 'span',
                variant: conversation.unreadCount ? 'subtitle2' : 'body2',
                color: conversation.unreadCount ? 'text.primary' : 'text.secondary',
              }}
            />

            <Stack alignItems="flex-end" sx={{ alignSelf: 'stretch' }}>
              <Typography
                noWrap
                variant="body2"
                component="span"
                sx={{ mb: 1.5, fontSize: 12, color: 'text.disabled' }}
              >
                {fToNow(lastActivity)}
              </Typography>

              {!!conversation.unreadCount && (
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    bgcolor: 'info.main',
                    borderRadius: '50%',
                  }}
                />
              )}
            </Stack>
          </>
        )}
      </ListItemButton>
    </Box>
  );
}
