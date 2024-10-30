import type { IPostItem } from 'src/types/blog';
import type { CardProps } from '@mui/material/Card';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';
import { fShortenNumber } from 'src/utils/format-number';

import { maxLine } from 'src/theme/styles';

import { Label } from 'src/components/label';
import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

type Props = CardProps & {
  post: IPostItem;
};

export function PostItemHorizontal({ post, sx, ...other }: Props) {
  const popover = usePopover();

  const router = useRouter();

  return (
    <>
      <Card sx={{ display: 'flex', ...sx }} {...other}>
        <Stack spacing={1} flexGrow={1} sx={{ p: (theme) => theme.spacing(3, 3, 2, 3) }}>
          <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
            <Label variant="soft" color={(post.publish === 'published' && 'info') || 'default'}>
              {post.publish}
            </Label>

            <Box component="span" sx={{ typography: 'caption', color: 'text.disabled' }}>
              {fDate(post.createdAt)}
            </Box>
          </Box>

          <Stack spacing={1} flexGrow={1}>
            <Link
              component={RouterLink}
              href={paths.dashboard.post.details(post.title)}
              color="inherit"
              variant="subtitle2"
              sx={{ ...maxLine({ line: 2 }) }}
            >
              {post.title}
            </Link>

            <Typography variant="body2" sx={{ ...maxLine({ line: 2 }), color: 'text.secondary' }}>
              {post.description}
            </Typography>
          </Stack>

          <Box display="flex" alignItems="center">
            <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
              <Iconify icon="eva:more-horizontal-fill" />
            </IconButton>

            <Box
              gap={1.5}
              flexGrow={1}
              display="flex"
              flexWrap="wrap"
              justifyContent="flex-end"
              sx={{ typography: 'caption', color: 'text.disabled' }}
            >
              <Box display="flex" alignItems="center" gap={0.5}>
                <Iconify icon="eva:message-circle-fill" width={16} />
                {fShortenNumber(post.totalComments)}
              </Box>

              <Box display="flex" alignItems="center" gap={0.5}>
                <Iconify icon="solar:eye-bold" width={16} />
                {fShortenNumber(post.totalViews)}
              </Box>

              <Box display="flex" alignItems="center" gap={0.5}>
                <Iconify icon="solar:share-bold" width={16} />
                {fShortenNumber(post.totalShares)}
              </Box>
            </Box>
          </Box>
        </Stack>

        <Box
          sx={{
            p: 1,
            width: 180,
            height: 240,
            flexShrink: 0,
            position: 'relative',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <Avatar
            alt={post.author.name}
            src={post.author.avatarUrl}
            sx={{ top: 16, right: 16, zIndex: 9, position: 'absolute' }}
          />
          <Image alt={post.title} src={post.coverUrl} sx={{ height: 1, borderRadius: 1.5 }} />
        </Box>
      </Card>

      <CustomPopover
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
        slotProps={{ arrow: { placement: 'bottom-center' } }}
      >
        <MenuList>
          <MenuItem
            onClick={() => {
              popover.onClose();
              router.push(paths.dashboard.post.details(post.title));
            }}
          >
            <Iconify icon="solar:eye-bold" />
            View
          </MenuItem>

          <MenuItem
            onClick={() => {
              popover.onClose();
              router.push(paths.dashboard.post.edit(post.title));
            }}
          >
            <Iconify icon="solar:pen-bold" />
            Edit
          </MenuItem>

          <MenuItem
            onClick={() => {
              popover.onClose();
            }}
            sx={{ color: 'error.main' }}
          >
            <Iconify icon="solar:trash-bin-trash-bold" />
            Delete
          </MenuItem>
        </MenuList>
      </CustomPopover>
    </>
  );
}
