import { forwardRef } from 'react';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';
import { removeLastSlash } from 'src/routes/utils';

import { NavLi, NavUl } from '../../nav-section';

import type { NavSubListProps, NavSubItemProps } from '../types';

// ----------------------------------------------------------------------

export function NavSubList({ data, slotProps, ...other }: NavSubListProps) {
  const pathname = usePathname();

  return (
    <>
      {data.map((list) => (
        <Stack
          component={NavLi}
          key={list?.subheader ?? list.items[0].title}
          spacing={1}
          {...other}
        >
          {list?.subheader && (
            <Typography variant="subtitle2" noWrap sx={slotProps?.subheader}>
              {list.subheader}
            </Typography>
          )}

          <NavUl sx={{ gap: 1 }}>
            {list.items.map((item) => (
              <NavSubItem
                key={item.title}
                title={item.title}
                path={item.path}
                active={item.path === removeLastSlash(pathname)}
                slotProps={slotProps?.subItem}
              />
            ))}
          </NavUl>
        </Stack>
      ))}
    </>
  );
}

// ----------------------------------------------------------------------

export const NavSubItem = forwardRef<HTMLAnchorElement, NavSubItemProps>(
  ({ title, path, active, slotProps }, ref) => (
    <NavLi key={title}>
      <Link
        ref={ref}
        component={RouterLink}
        href={path}
        noWrap
        sx={{
          position: 'relative',
          color: 'text.secondary',
          fontSize: (theme) => theme.typography.pxToRem(13),
          lineHeight: (theme) => theme.typography.body2.lineHeight,
          transition: (theme) => theme.transitions.create('color'),
          '&:hover': { color: 'text.primary' },
          ...(active && {
            color: 'text.primary',
            textDecoration: 'underline',
            fontWeight: 'fontWeightSemiBold',
          }),
          ...slotProps,
        }}
      >
        {title}
      </Link>
    </NavLi>
  )
);
