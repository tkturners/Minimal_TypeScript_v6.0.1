import type { IUserCard } from 'src/types/user';
import type { CardProps } from '@mui/material/Card';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

import { fShortenNumber } from 'src/utils/format-number';

import { _socials } from 'src/_mock';
import { varAlpha } from 'src/theme/styles';
import { AvatarShape } from 'src/assets/illustrations';
import { TwitterIcon, FacebookIcon, LinkedinIcon, InstagramIcon } from 'src/assets/icons';

import { Image } from 'src/components/image';

// ----------------------------------------------------------------------

type Props = CardProps & {
  user: IUserCard;
};

export function UserCard({ user, sx, ...other }: Props) {
  return (
    <Card sx={{ textAlign: 'center', ...sx }} {...other}>
      <Box sx={{ position: 'relative' }}>
        <AvatarShape
          sx={{
            left: 0,
            right: 0,
            zIndex: 10,
            mx: 'auto',
            bottom: -26,
            position: 'absolute',
          }}
        />

        <Avatar
          alt={user.name}
          src={user.avatarUrl}
          sx={{
            width: 64,
            height: 64,
            zIndex: 11,
            left: 0,
            right: 0,
            bottom: -32,
            mx: 'auto',
            position: 'absolute',
          }}
        />

        <Image
          src={user.coverUrl}
          alt={user.coverUrl}
          ratio="16/9"
          slotProps={{
            overlay: {
              bgcolor: (theme) => varAlpha(theme.vars.palette.common.blackChannel, 0.48),
            },
          }}
        />
      </Box>

      <ListItemText
        sx={{ mt: 7, mb: 1 }}
        primary={user.name}
        secondary={user.role}
        primaryTypographyProps={{ typography: 'subtitle1' }}
        secondaryTypographyProps={{ component: 'span', mt: 0.5 }}
      />

      <Stack direction="row" alignItems="center" justifyContent="center" sx={{ mb: 2.5 }}>
        {_socials.map((social) => (
          <IconButton key={social.label} color="inherit">
            {social.value === 'twitter' && <TwitterIcon />}
            {social.value === 'facebook' && <FacebookIcon />}
            {social.value === 'instagram' && <InstagramIcon />}
            {social.value === 'linkedin' && <LinkedinIcon />}
          </IconButton>
        ))}
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        sx={{ py: 3, typography: 'subtitle1' }}
      >
        <div>
          <Typography variant="caption" component="div" sx={{ mb: 0.5, color: 'text.secondary' }}>
            Follower
          </Typography>
          {fShortenNumber(user.totalFollowers)}
        </div>

        <div>
          <Typography variant="caption" component="div" sx={{ mb: 0.5, color: 'text.secondary' }}>
            Following
          </Typography>

          {fShortenNumber(user.totalFollowing)}
        </div>

        <div>
          <Typography variant="caption" component="div" sx={{ mb: 0.5, color: 'text.secondary' }}>
            Total post
          </Typography>
          {fShortenNumber(user.totalPosts)}
        </div>
      </Box>
    </Card>
  );
}
