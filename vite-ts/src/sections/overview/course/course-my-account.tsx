import type { CardProps } from '@mui/material/Card';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { AnimateAvatar } from 'src/components/animate';

import { useMockedUser } from 'src/auth/hooks';

// ----------------------------------------------------------------------

export function CourseMyAccount({ ...other }: CardProps) {
  const theme = useTheme();

  const { user } = useMockedUser();

  const renderAvatar = (
    <AnimateAvatar
      width={96}
      slotProps={{
        avatar: { src: user?.photoURL, alt: user?.displayName },
        overlay: {
          border: 2,
          spacing: 3,
          color: `linear-gradient(135deg, ${varAlpha(theme.vars.palette.primary.mainChannel, 0)} 25%, ${theme.vars.palette.primary.main} 100%)`,
        },
      }}
      sx={{ mb: 2 }}
    >
      {user?.displayName?.charAt(0).toUpperCase()}
    </AnimateAvatar>
  );

  return (
    <Card {...other}>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        {renderAvatar}

        <Typography variant="subtitle1" noWrap sx={{ mb: 0.5 }}>
          {user?.displayName}
        </Typography>

        <Box
          sx={{
            gap: 0.5,
            display: 'flex',
            typography: 'body2',
            alignItems: 'center',
            color: 'text.secondary',
          }}
        >
          ID: 123987
          <IconButton size="small">
            <Iconify width={18} icon="solar:copy-bold" />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
