import Masonry from '@mui/lab/Masonry';
import Divider from '@mui/material/Divider';

import { MenuTags } from './menu-tags';
import { NavSubList } from './nav-sub-list';
import { MenuCarousel } from './menu-carousel';
import { MenuMoreLink } from './menu-more-link';
import { NavUl, navSectionClasses } from '../../nav-section';

import type { NavListProps } from '../types';

// ----------------------------------------------------------------------

export function NavContent({
  data,
  slotProps,
  singleList,
}: NavListProps & {
  singleList: boolean;
}) {
  if (!data.children) {
    return null;
  }

  return (
    <>
      {singleList ? (
        <NavUl>
          <NavSubList data={data.children} slotProps={slotProps} />
        </NavUl>
      ) : (
        <>
          <Masonry
            component="ul"
            className={navSectionClasses.ul}
            columns={4}
            defaultColumns={4}
            spacing={3}
            defaultSpacing={3}
            sx={{ p: 0 }}
          >
            <NavSubList data={data.children} slotProps={slotProps} />
          </Masonry>

          {!!data.moreLink && (
            <MenuMoreLink
              path={data.moreLink.path}
              title={data.moreLink.title}
              sx={slotProps?.moreLink}
            />
          )}

          {!!data.slides && (
            <>
              <Divider sx={{ borderStyle: 'dashed', my: 3 }} />
              <MenuCarousel
                slides={data.slides}
                displayCount={slotProps?.carousel?.displayCount}
                sx={slotProps?.carousel?.sx}
              />
            </>
          )}

          {!!data.tags && (
            <>
              <Divider sx={{ borderStyle: 'dashed', my: 3 }} />
              <MenuTags tags={data.tags} sx={slotProps?.tags} />
            </>
          )}
        </>
      )}
    </>
  );
}
