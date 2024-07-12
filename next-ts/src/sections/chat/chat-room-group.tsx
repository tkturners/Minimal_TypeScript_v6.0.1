import type { IChatParticipant } from 'src/types/chat';

import { useState, useCallback } from 'react';

import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Collapse from '@mui/material/Collapse';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import { useBoolean } from 'src/hooks/use-boolean';

import { CollapseButton } from './styles';
import { ChatRoomParticipantDialog } from './chat-room-participant-dialog';

// ----------------------------------------------------------------------

type Props = {
  participants: IChatParticipant[];
};

export function ChatRoomGroup({ participants }: Props) {
  const collapse = useBoolean(true);

  const [selected, setSelected] = useState<IChatParticipant | null>(null);

  const handleOpen = useCallback((participant: IChatParticipant) => {
    setSelected(participant);
  }, []);

  const handleClose = useCallback(() => {
    setSelected(null);
  }, []);

  const totalParticipants = participants.length;

  const renderList = (
    <>
      {participants.map((participant) => (
        <ListItemButton key={participant.id} onClick={() => handleOpen(participant)}>
          <Badge
            variant={participant.status}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          >
            <Avatar alt={participant.name} src={participant.avatarUrl} />
          </Badge>

          <ListItemText
            sx={{ ml: 2 }}
            primary={participant.name}
            secondary={participant.role}
            primaryTypographyProps={{ noWrap: true, typography: 'subtitle2' }}
            secondaryTypographyProps={{ noWrap: true, component: 'span', typography: 'caption' }}
          />
        </ListItemButton>
      ))}
    </>
  );

  return (
    <>
      <CollapseButton
        selected={collapse.value}
        disabled={!totalParticipants}
        onClick={collapse.onToggle}
      >
        {`In room (${totalParticipants})`}
      </CollapseButton>

      <Collapse in={collapse.value}>{renderList}</Collapse>

      {selected && (
        <ChatRoomParticipantDialog participant={selected} open={!!selected} onClose={handleClose} />
      )}
    </>
  );
}
