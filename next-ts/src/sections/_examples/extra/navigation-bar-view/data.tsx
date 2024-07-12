import { CONFIG } from 'src/config-global';

import { Label } from 'src/components/label';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

export const NAV_ITEMS = [
  {
    subheader: 'Marketing',
    items: [
      {
        title: 'Landing',
        path: '#landing',
        icon: <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/ic-dashboard.svg`} />,
        roles: ['admin'],
        caption: 'Display only admin role',
        info: <Label color="error">+2 </Label>,
      },
      {
        title: 'Services',
        path: '#services',
        icon: <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/ic-analytics.svg`} />,
        roles: ['admin', 'user'],
      },
      {
        title: 'Blog',
        path: '#blog',
        icon: <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/ic-blog.svg`} />,
        info: <Label color="info">+3 </Label>,
        children: [
          {
            title: 'Item 1',
            path: '#blog/item-1',
            caption: 'Display caption',
            info: '+2',
          },
          { title: 'Item 2', path: '#blog/item-2' },
        ],
      },
    ],
  },
  {
    subheader: 'Travel',
    items: [
      {
        title: 'About',
        path: '#about',
        icon: <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/ic-user.svg`} />,
        info: '+4',
      },
      {
        title: 'Contact',
        path: '#contact',
        icon: <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/ic-tour.svg`} />,
      },
      {
        title: 'Level',
        path: '#level',
        icon: <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/ic-menu-item.svg`} />,
        children: [
          {
            title: 'Level 2a',
            path: '#level/2a',
            icon: <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/ic-chat.svg`} />,
            caption: 'This is the caption',
            children: [
              { title: 'Level 3a', path: '#level/2a/3a' },
              {
                title: 'Level 3b',
                path: '#level/2a/3b',
                children: [
                  { title: 'Level 4a', path: '#level/2a/3b/4a' },
                  { title: 'Level 4b', path: '#level/2a/3b/4b' },
                ],
              },
              { title: 'Level 3c', path: '#level/2a/3c' },
            ],
          },
          {
            title: 'Level 2b',
            path: '#level/2b',
            icon: <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/ic-mail.svg`} />,
          },
          {
            title: 'Level 2c',
            path: '#level/2c',
            icon: <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/ic-calendar.svg`} />,
          },
        ],
      },
    ],
  },
];
