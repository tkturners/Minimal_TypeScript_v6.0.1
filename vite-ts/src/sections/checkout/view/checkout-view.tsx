import { useEffect } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { PRODUCT_CHECKOUT_STEPS } from 'src/_mock/_product';

import { CheckoutCart } from '../checkout-cart';
import { useCheckoutContext } from '../context';
import { CheckoutSteps } from '../checkout-steps';
import { CheckoutPayment } from '../checkout-payment';
import { CheckoutOrderComplete } from '../checkout-order-complete';
import { CheckoutBillingAddress } from '../checkout-billing-address';

// ----------------------------------------------------------------------

export function CheckoutView() {
  const checkout = useCheckoutContext();

  useEffect(() => {
    checkout.initialStep();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container sx={{ mb: 10 }}>
      <Typography variant="h4" sx={{ my: { xs: 3, md: 5 } }}>
        Checkout
      </Typography>

      <Grid container justifyContent={checkout.completed ? 'center' : 'flex-start'}>
        <Grid xs={12} md={8}>
          <CheckoutSteps activeStep={checkout.activeStep} steps={PRODUCT_CHECKOUT_STEPS} />
        </Grid>
      </Grid>

      <>
        {checkout.activeStep === 0 && <CheckoutCart />}

        {checkout.activeStep === 1 && <CheckoutBillingAddress />}

        {checkout.activeStep === 2 && <CheckoutPayment />}

        {checkout.completed && (
          <CheckoutOrderComplete open onReset={checkout.onReset} onDownloadPDF={() => {}} />
        )}
      </>
    </Container>
  );
}
