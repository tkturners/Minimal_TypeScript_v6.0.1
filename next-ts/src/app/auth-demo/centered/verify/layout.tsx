import { AuthCenteredLayout } from 'src/layouts/auth-centered';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <AuthCenteredLayout>{children}</AuthCenteredLayout>;
}
