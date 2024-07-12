import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import AlertTitle from '@mui/material/AlertTitle';

import { paths } from 'src/routes/paths';

import { varAlpha } from 'src/theme/styles';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

const COLORS = ['info', 'success', 'warning', 'error'] as const;

// ----------------------------------------------------------------------

export function AlertView() {
  const DEMO = [
    {
      name: 'Standard',
      component: (
        <ComponentBlock sx={{ flexDirection: 'column', alignItems: 'unset' }}>
          {COLORS.map((color) => (
            <Alert key={color} severity={color} onClose={() => {}}>
              This is an {color} alert — check it out!
            </Alert>
          ))}
        </ComponentBlock>
      ),
    },
    {
      name: 'Filled',
      component: (
        <ComponentBlock sx={{ flexDirection: 'column', alignItems: 'unset' }}>
          {COLORS.map((color) => (
            <Alert key={color} severity={color} variant="filled" onClose={() => {}}>
              This is an {color} alert — check it out!
            </Alert>
          ))}
        </ComponentBlock>
      ),
    },
    {
      name: 'Outlined',
      component: (
        <ComponentBlock sx={{ flexDirection: 'column', alignItems: 'unset' }}>
          {COLORS.map((color) => (
            <Alert key={color} severity={color} variant="outlined" onClose={() => {}}>
              This is an {color} alert — check it out!
            </Alert>
          ))}
        </ComponentBlock>
      ),
    },
    {
      name: 'Description',
      component: (
        <ComponentBlock sx={{ flexDirection: 'column', alignItems: 'unset' }}>
          {COLORS.map((color) => (
            <Alert key={color} severity={color} onClose={() => {}}>
              <AlertTitle sx={{ textTransform: 'capitalize' }}> {color} </AlertTitle>
              This is an {color} alert — <strong>check it out!</strong>
            </Alert>
          ))}
        </ComponentBlock>
      ),
    },
    {
      name: 'Actions',
      component: (
        <ComponentBlock sx={{ flexDirection: 'column', alignItems: 'unset' }}>
          <Alert
            severity="info"
            action={
              <Button color="info" size="small" variant="soft">
                Action
              </Button>
            }
          >
            This is an info alert — check it out!
          </Alert>

          <Alert
            severity="info"
            variant="filled"
            action={
              <>
                <Button
                  color="inherit"
                  size="small"
                  variant="outlined"
                  sx={{
                    mr: 1,
                    border: (theme) =>
                      `1px solid ${varAlpha(theme.vars.palette.common.whiteChannel, 0.48)}`,
                  }}
                >
                  Undo
                </Button>
                <Button size="small" color="info" variant="contained" sx={{ bgcolor: 'info.dark' }}>
                  Action
                </Button>
              </>
            }
          >
            This is an info alert — check it out!
          </Alert>

          <Alert
            severity="info"
            variant="outlined"
            action={
              <>
                <Button color="info" size="small" variant="outlined" sx={{ mr: 1 }}>
                  Undo
                </Button>
                <Button color="info" size="small" variant="contained" sx={{ bgcolor: 'info.dark' }}>
                  Action
                </Button>
              </>
            }
          >
            This is an info alert — check it out!
          </Alert>
        </ComponentBlock>
      ),
    },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Alert"
          links={[{ name: 'Components', href: paths.components }, { name: 'Alert' }]}
          moreLink={['https://mui.com/components/alert']}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
