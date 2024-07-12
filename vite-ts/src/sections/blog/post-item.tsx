import type { IPostItem } from 'src/types/blog';
import type { Theme, SxProps } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';
import { fShortenNumber } from 'src/utils/format-number';

import { maxLine, varAlpha } from 'src/theme/styles';
import { AvatarShape } from 'src/assets/illustrations';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type PostItemProps = {
  post: IPostItem;
};

export function PostItem({ post }: PostItemProps) {
  const theme = useTheme();

  const linkTo = paths.post.details(post.title);

  return (
    <Card>
      <Box sx={{ position: 'relative' }}>
        <AvatarShape
          sx={{
            left: 0,
            zIndex: 9,
            width: 88,
            height: 36,
            bottom: -16,
            position: 'absolute',
          }}
        />

        <Avatar
          alt={post.author.name}
          src={post.author.avatarUrl}
          sx={{
            left: 24,
            zIndex: 9,
            bottom: -24,
            position: 'absolute',
          }}
        />

        <Image alt={post.title} src={post.coverUrl} ratio="4/3" />
      </Box>

      <CardContent sx={{ pt: 6 }}>
        <Typography variant="caption" component="div" sx={{ mb: 1, color: 'text.disabled' }}>
          {fDate(post.createdAt)}
        </Typography>

        <Link
          component={RouterLink}
          href={linkTo}
          color="inherit"
          variant="subtitle2"
          sx={{ ...maxLine({ line: 2, persistent: theme.typography.subtitle2 }) }}
        >
          {post.title}
        </Link>

        <InfoBlock
          totalViews={post.totalViews}
          totalShares={post.totalShares}
          totalComments={post.totalComments}
        />
      </CardContent>
    </Card>
  );
}

// ----------------------------------------------------------------------

type PostItemLatestProps = {
  post: IPostItem;
  index: number;
};

export function PostItemLatest({ post, index }: PostItemLatestProps) {
  const theme = useTheme();

  const linkTo = paths.post.details(post.title);

  const postSmall = index === 1 || index === 2;

  return (
    <Card>
      <Avatar
        alt={post.author.name}
        src={post.author.avatarUrl}
        sx={{
          top: 24,
          left: 24,
          zIndex: 9,
          position: 'absolute',
        }}
      />

      <Image
        alt={post.title}
        src={post.coverUrl}
        ratio="4/3"
        sx={{ height: 360 }}
        slotProps={{ overlay: { bgcolor: varAlpha(theme.vars.palette.grey['900Channel'], 0.48) } }}
      />

      <CardContent
        sx={{
          width: 1,
          zIndex: 9,
          bottom: 0,
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Typography variant="caption" component="div" sx={{ mb: 1, opacity: 0.64 }}>
          {fDate(post.createdAt)}
        </Typography>

        <Link
          component={RouterLink}
          href={linkTo}
          color="inherit"
          variant={postSmall ? 'subtitle2' : 'h5'}
          sx={{
            ...maxLine({
              line: 2,
              persistent: postSmall ? theme.typography.subtitle2 : theme.typography.h5,
            }),
          }}
        >
          {post.title}
        </Link>

        <InfoBlock
          totalViews={post.totalViews}
          totalShares={post.totalShares}
          totalComments={post.totalComments}
          sx={{ opacity: 0.64, color: 'common.white' }}
        />
      </CardContent>
    </Card>
  );
}

// ----------------------------------------------------------------------

type InfoBlockProps = Pick<IPostItem, 'totalViews' | 'totalShares' | 'totalComments'> & {
  sx?: SxProps<Theme>;
};

export function InfoBlock({ totalComments, totalViews, totalShares, sx }: InfoBlockProps) {
  return (
    <Stack
      spacing={1.5}
      direction="row"
      justifyContent="flex-end"
      sx={{
        mt: 3,
        typography: 'caption',
        color: 'text.disabled',
        ...sx,
      }}
    >
      <Stack direction="row" alignItems="center">
        <Iconify icon="eva:message-circle-fill" width={16} sx={{ mr: 0.5 }} />
        {fShortenNumber(totalComments)}
      </Stack>

      <Stack direction="row" alignItems="center">
        <Iconify icon="solar:eye-bold" width={16} sx={{ mr: 0.5 }} />
        {fShortenNumber(totalViews)}
      </Stack>

      <Stack direction="row" alignItems="center">
        <Iconify icon="solar:share-bold" width={16} sx={{ mr: 0.5 }} />
        {fShortenNumber(totalShares)}
      </Stack>
    </Stack>
  );
}
