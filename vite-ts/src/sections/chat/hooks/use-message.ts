import type { IChatMessage, IChatParticipant } from 'src/types/chat';

// ----------------------------------------------------------------------

type Props = {
  currentUserId: string;
  message: IChatMessage;
  participants: IChatParticipant[];
};

export function useMessage({ message, participants, currentUserId }: Props) {
  const sender = participants.find((participant) => participant.id === message.senderId);

  const senderDetails =
    message.senderId === currentUserId
      ? { type: 'me' }
      : { avatarUrl: sender?.avatarUrl, firstName: sender?.name.split(' ')[0] };

  const me = senderDetails.type === 'me';

  const hasImage = message.contentType === 'image';

  return { hasImage, me, senderDetails };
}
