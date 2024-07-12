import type { StackProps } from '@mui/material/Stack';
import type { Theme, SxProps } from '@mui/material/styles';
import type { ButtonBaseProps } from '@mui/material/ButtonBase';

// ----------------------------------------------------------------------

export type NavItemStateProps = {
  open?: boolean;
  active?: boolean;
  subItem?: boolean;
  hasChild?: boolean;
  externalLink?: boolean;
};

export type NavItemBaseProps = {
  title: string;
  path: string;
  icon?: string | React.ReactNode;
  children?: {
    subheader: string;
    items: {
      title: string;
      path: string;
    }[];
  }[];
};

export type NavItemProps = ButtonBaseProps & NavItemBaseProps & NavItemStateProps;

export type NavListProps = {
  data: NavItemBaseProps;
  sx?: SxProps<Theme>;
};

export type NavSubListProps = StackProps & {
  data: NavItemBaseProps[];
  subheader: string;
};

export type NavMainProps = {
  data: NavItemBaseProps[];
  sx?: SxProps<Theme>;
};
