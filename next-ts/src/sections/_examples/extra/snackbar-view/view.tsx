'use client';

import type { ToastT } from 'src/components/snackbar';

import Button from '@mui/material/Button';

import { paths } from 'src/routes/paths';

import { toast } from 'src/components/snackbar';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ComponentBlock, ComponentContainer } from '../../component-block';

// ----------------------------------------------------------------------

export function SnackbarView() {
  const onSubmit = async () => {
    const promise = new Promise((resolve) => setTimeout(resolve, 3000));

    try {
      toast.promise(promise, {
        loading: 'Loading...',
        success: () => `Loading success!`,
        error: 'Error',
        closeButton: false,
      });

      await promise;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Snackbar"
          links={[{ name: 'Components', href: paths.components }, { name: 'Snackbar' }]}
          moreLink={['https://sonner.emilkowal.ski/']}
        />
      </ComponentHero>

      <ComponentContainer
        sx={{
          rowGap: 5,
          columnGap: 3,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          },
        }}
      >
        <ComponentBlock title="Simple">
          <Button variant="contained" color="inherit" onClick={() => toast('This is an default')}>
            Default
          </Button>
          <Button variant="contained" color="info" onClick={() => toast.info('This is an info')}>
            Info
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => toast.success('This is an success')}
          >
            Success
          </Button>
          <Button
            variant="contained"
            color="warning"
            onClick={() => toast.warning('This is an warning')}
          >
            Warning
          </Button>
          <Button variant="contained" color="error" onClick={() => toast.error('This is an error')}>
            Error
          </Button>
        </ComponentBlock>

        <ComponentBlock title="With Action">
          <Button
            variant="contained"
            color="inherit"
            onClick={() => {
              toast('Title', {
                id: 'defaultId',
                description: 'description',
                closeButton: false,
                action: (
                  <div>
                    <Button color="primary" size="small" onClick={() => console.info('Action!')}>
                      Action
                    </Button>
                    <Button
                      size="small"
                      onClick={() => {
                        console.info('Action!');
                        toast.dismiss('defaultId');
                      }}
                    >
                      Dismiss
                    </Button>
                  </div>
                ),
              });
            }}
          >
            Default
          </Button>
          <Button
            variant="contained"
            color="info"
            onClick={() => {
              toast.info('Title', {
                id: 'infoId',
                description: 'description',
                closeButton: false,
                action: (
                  <div>
                    <Button color="info" size="small" onClick={() => console.info('Action!')}>
                      Action
                    </Button>
                    <Button
                      size="small"
                      onClick={() => {
                        console.info('Action!');
                        toast.dismiss('infoId');
                      }}
                    >
                      Dismiss
                    </Button>
                  </div>
                ),
              });
            }}
          >
            Info
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              toast.success('Title', {
                id: 'successId',
                description: 'description',
                closeButton: false,
                action: (
                  <div>
                    <Button color="success" size="small" onClick={() => console.info('Action!')}>
                      Action
                    </Button>
                    <Button
                      size="small"
                      onClick={() => {
                        console.info('Action!');
                        toast.dismiss('successId');
                      }}
                    >
                      Dismiss
                    </Button>
                  </div>
                ),
              });
            }}
          >
            Success
          </Button>
          <Button
            variant="contained"
            color="warning"
            onClick={() => {
              toast.warning('Title', {
                id: 'warningId',
                description: 'description',
                closeButton: false,
                action: (
                  <div>
                    <Button color="warning" size="small" onClick={() => console.info('Action!')}>
                      Action
                    </Button>
                    <Button
                      size="small"
                      onClick={() => {
                        console.info('Action!');
                        toast.dismiss('warningId');
                      }}
                    >
                      Dismiss
                    </Button>
                  </div>
                ),
              });
            }}
          >
            Warning
          </Button>

          <Button
            variant="contained"
            color="error"
            onClick={() => {
              toast.error('Error title', {
                id: 'errorId',
                description: 'description',
                closeButton: false,
                action: (
                  <div>
                    <Button color="error" size="small" onClick={() => console.info('Action!')}>
                      Action
                    </Button>
                    <Button
                      size="small"
                      onClick={() => {
                        console.info('Action!');
                        toast.dismiss('errorId');
                      }}
                    >
                      Dismiss
                    </Button>
                  </div>
                ),
              });
            }}
          >
            Error
          </Button>
        </ComponentBlock>

        <ComponentBlock title="anchorOrigin">
          {[
            'top-left',
            'top-center',
            'top-right',
            'bottom-left',
            'bottom-center',
            'bottom-right',
          ].map((position) => (
            <Button
              key={position}
              variant="text"
              color="inherit"
              onClick={() => toast(position, { position: position as ToastT['position'] })}
            >
              {position}
            </Button>
          ))}
        </ComponentBlock>

        <ComponentBlock title="With promise">
          <Button variant="outlined" onClick={onSubmit}>
            On submit
          </Button>
        </ComponentBlock>
      </ComponentContainer>
    </>
  );
}
