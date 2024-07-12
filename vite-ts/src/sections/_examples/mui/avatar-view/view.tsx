import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import AvatarGroup, { avatarGroupClasses } from '@mui/material/AvatarGroup';

import { paths } from 'src/routes/paths';

import { _mock } from 'src/_mock';

import { Iconify } from 'src/components/iconify';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

const COLORS = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

const SIZES = [24, 32, 40, 56];

const VARIANTS = ['circular', 'rounded', 'square'] as const;

const STATUS = ['online', 'alway', 'busy', 'offline'] as const;

// ----------------------------------------------------------------------

export function AvatarView() {
  const theme = useTheme();

  const DEMO = [
    {
      name: 'Image',
      component: (
        <ComponentBlock>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <Avatar
              key={index}
              alt={_mock.fullName(index + 1)}
              src={_mock.image.avatar(index + 1)}
            />
          ))}
        </ComponentBlock>
      ),
    },
    {
      name: 'Letter',
      component: (
        <ComponentBlock>
          {COLORS.map((color, index) => (
            <Tooltip key={color} title={color}>
              <Avatar alt={_mock.fullName(index + 3)}>
                {_mock
                  .fullName(index + 3)
                  .charAt(0)
                  .toUpperCase()}
              </Avatar>
            </Tooltip>
          ))}
        </ComponentBlock>
      ),
    },
    {
      name: 'Icon',
      component: (
        <ComponentBlock>
          {COLORS.map((color) => (
            <Avatar key={color} color={color}>
              <Iconify icon="eva:folder-add-outline" width={24} />
            </Avatar>
          ))}
        </ComponentBlock>
      ),
    },
    {
      name: 'Variant',
      component: (
        <ComponentBlock>
          {VARIANTS.map((variant) => (
            <Avatar
              key={variant}
              variant={variant}
              sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}
            >
              <Iconify icon="eva:folder-add-outline" width={24} />
            </Avatar>
          ))}
        </ComponentBlock>
      ),
    },
    {
      name: 'Grouped',
      component: (
        <ComponentBlock flexDirection="column" alignItems="center">
          {SIZES.map((size) => (
            <Tooltip key={size} title={size}>
              <AvatarGroup
                key={size}
                sx={{ [`& .${avatarGroupClasses.avatar}`]: { width: size, height: size } }}
              >
                {COLORS.map((color, index) => (
                  <Avatar
                    key={color}
                    alt={_mock.fullAddress(index + 1)}
                    src={_mock.image.avatar(index + 1)}
                  />
                ))}
              </AvatarGroup>
            </Tooltip>
          ))}

          <Tooltip title="compact">
            <Badge variant="online" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
              <AvatarGroup variant="compact" sx={{ width: 48, height: 48 }}>
                {COLORS.slice(0, 2).map((color, index) => (
                  <Avatar
                    key={color}
                    alt={_mock.fullName(index + 1)}
                    src={_mock.image.avatar(index + 1)}
                  />
                ))}
              </AvatarGroup>
            </Badge>
          </Tooltip>
        </ComponentBlock>
      ),
    },
    {
      name: 'With badge',
      component: (
        <ComponentBlock>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
              <Avatar
                alt={_mock.fullName(7)}
                src={_mock.image.avatar(7)}
                sx={{
                  p: 0,
                  width: 24,
                  height: 24,
                  border: `solid 2px ${theme.vars.palette.background.paper}`,
                }}
              />
            }
          >
            <Avatar alt={_mock.fullName(8)} src={_mock.image.avatar(8)} />
          </Badge>

          {STATUS.map((status, index) => (
            <Badge
              key={status}
              variant={status}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Avatar alt={_mock.fullName(index + 1)} src={_mock.image.avatar(index + 1)} />
            </Badge>
          ))}
        </ComponentBlock>
      ),
    },
    {
      name: 'Sizes',
      component: (
        <ComponentBlock>
          {[24, 32, 48, 56, 64, 80, 128].map((size, index) => (
            <Avatar
              key={size}
              alt={_mock.fullName(index + 4)}
              src={_mock.image.avatar(index + 4)}
              sx={{ width: size, height: size }}
            />
          ))}
        </ComponentBlock>
      ),
    },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Avatar"
          links={[{ name: 'Components', href: paths.components }, { name: 'Avatar' }]}
          moreLink={['https://mui.com/components/avatars']}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
