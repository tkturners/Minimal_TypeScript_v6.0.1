import { useCallback } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { useSearchParams } from 'src/routes/hooks';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

export function Auth0SignInView() {
  const { loginWithPopup, loginWithRedirect } = useAuth0();

  const searchParams = useSearchParams();

  const returnTo = searchParams.get('returnTo');

  const handleSignInWithPopup = useCallback(async () => {
    try {
      await loginWithPopup();
    } catch (error) {
      console.error(error);
    }
  }, [loginWithPopup]);

  const handleSignUpWithPopup = useCallback(async () => {
    try {
      await loginWithPopup({ authorizationParams: { screen_hint: 'signup' } });
    } catch (error) {
      console.error(error);
    }
  }, [loginWithPopup]);

  const handleSignInWithRedirect = useCallback(async () => {
    try {
      await loginWithRedirect({ appState: { returnTo: returnTo || CONFIG.auth.redirectPath } });
    } catch (error) {
      console.error(error);
    }
  }, [loginWithRedirect, returnTo]);

  const handleSignUpWithRedirect = useCallback(async () => {
    try {
      await loginWithRedirect({
        appState: { returnTo: returnTo || CONFIG.auth.redirectPath },
        authorizationParams: { screen_hint: 'signup' },
      });
    } catch (error) {
      console.error(error);
    }
  }, [loginWithRedirect, returnTo]);

  return (
    <>
      <Typography variant="h5" sx={{ mb: 5, textAlign: 'center' }}>
        Sign in to your account
      </Typography>

      <Stack spacing={2}>
        <Button
          fullWidth
          color="primary"
          size="large"
          variant="contained"
          onClick={handleSignInWithRedirect}
        >
          Sign in with Redirect
        </Button>

        <Button
          fullWidth
          color="primary"
          size="large"
          variant="soft"
          onClick={handleSignUpWithRedirect}
        >
          Sign up with Redirect
        </Button>

        <Divider sx={{ borderStyle: 'dashed', my: 3 }} />

        <Button
          fullWidth
          color="inherit"
          size="large"
          variant="contained"
          onClick={handleSignInWithPopup}
        >
          Sign in with Popup
        </Button>

        <Button
          fullWidth
          color="inherit"
          size="large"
          variant="soft"
          onClick={handleSignUpWithPopup}
        >
          Sign up with Popup
        </Button>
      </Stack>
    </>
  );
}
