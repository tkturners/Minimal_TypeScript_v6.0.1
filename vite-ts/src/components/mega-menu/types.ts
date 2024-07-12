import type { BoxProps } from '@mui/material/Box';
import type { LinkProps } from '@mui/material/Link';
import type { StackProps } from '@mui/material/Stack';
import type { ButtonBaseProps } from '@mui/material/ButtonBase';
import type { Theme, SxProps, CSSObject } from '@mui/material/styles';

// ----------------------------------------------------------------------

export type NavItemRenderProps = {
  navIcon?: Record<string, React.ReactNode>;
  navInfo?: (val: string) => Record<string, React.ReactElement>;
};

export type NavItemSlotProps = {
  sx?: SxProps<Theme>;
  icon?: SxProps<Theme>;
  title?: SxProps<Theme>;
  info?: SxProps<Theme>;
  arrow?: SxProps<Theme>;
};

export type SlotProps = {
  rootItem?: NavItemSlotProps;
  subItem?: SxProps<Theme>;
  subheader?: SxProps<Theme>;
  paper?: SxProps<Theme>;
  tags?: SxProps<Theme>;
  moreLink?: SxProps<Theme>;
  carousel?: {
    sx: SxProps<Theme>;
    displayCount?: number;
  };
};

export type SlideProps = {
  name: string;
  path: string;
  coverUrl: string;
};

export type MenuLink = LinkProps & {
  path: string;
  title: string;
};

export type MenuCarouselProps = {
  slides: SlideProps[];
  displayCount?: number;
  sx?: SxProps<Theme>;
};

export type MenuTagsProps = BoxProps & {
  tags: MenuLink[];
};

export type NavItemStateProps = {
  open?: boolean;
  active?: boolean;
  hasChild?: boolean;
  externalLink?: boolean;
  enabledRootRedirect?: boolean;
};

export type NavItemBaseProps = {
  path: string;
  title: string;
  disabled?: boolean;
  moreLink?: MenuLink;
  render?: NavItemRenderProps;
  tags?: MenuTagsProps['tags'];
  icon?: string | React.ReactNode;
  info?: string[] | React.ReactNode;
  slides?: MenuCarouselProps['slides'];
  children?: {
    subheader?: string;
    items: {
      title: string;
      path: string;
    }[];
  }[];
  slotProps?: NavItemSlotProps;
};

export type NavItemProps = ButtonBaseProps & NavItemBaseProps & NavItemStateProps;

export type NavSubItemProps = Pick<NavItemProps, 'title' | 'path' | 'active'> & {
  slotProps: SlotProps['subItem'];
};

export type NavListProps = {
  cssVars?: CSSObject;
  slotProps?: SlotProps;
  data: NavItemBaseProps;
  render?: NavItemBaseProps['render'];
  enabledRootRedirect?: NavItemStateProps['enabledRootRedirect'];
  slots?: {
    button?: React.ReactElement;
    topArea?: React.ReactNode;
    bottomArea?: React.ReactNode;
  };
};

export type NavSubListProps = StackProps & {
  title?: string;
  slotProps?: SlotProps;
  onCloseMenu?: () => void;
  data: {
    subheader?: string;
    items: { title: string; path: string }[];
  }[];
};

export type MegaMenuProps = StackProps &
  Omit<NavListProps, 'data'> & {
    data: NavItemBaseProps[];
  };
