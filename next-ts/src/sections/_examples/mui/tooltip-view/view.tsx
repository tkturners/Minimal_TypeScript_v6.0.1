'use client';

import type { TooltipProps } from '@mui/material/Tooltip';

import { m } from 'framer-motion';

import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';
import { varHover } from 'src/components/animate';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

const LONG_TEXT = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`;

// ----------------------------------------------------------------------

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({ [`& .${tooltipClasses.tooltip}`]: { maxWidth: 500 } });

const NoMaxWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({ [`& .${tooltipClasses.tooltip}`]: { maxWidth: 'none' } });

// ----------------------------------------------------------------------

export function TooltipView() {
  const DEMO = [
    {
      name: 'Simple',
      component: (
        <ComponentBlock>
          <Tooltip title="Delete">
            <IconButton>
              <Iconify icon="solar:trash-bin-trash-bold" width={24} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Add">
            <Fab>
              <Iconify icon="mingcute:add-line" width={24} />
            </Fab>
          </Tooltip>

          <Tooltip title="Delete">
            <IconButton color="info">
              <Iconify icon="solar:trash-bin-trash-bold" width={24} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Add">
            <Fab
              component={m.button}
              whileTap="tap"
              whileHover="hover"
              variants={varHover()}
              color="info"
            >
              <Iconify icon="mingcute:add-line" width={24} />
            </Fab>
          </Tooltip>

          <Tooltip title="Add">
            <Button variant="outlined" color="info">
              Button
            </Button>
          </Tooltip>
        </ComponentBlock>
      ),
    },
    {
      name: 'Arrow',
      component: (
        <ComponentBlock>
          <Tooltip title="Add" arrow>
            <Fab>
              <Iconify icon="mingcute:add-line" width={24} />
            </Fab>
          </Tooltip>
        </ComponentBlock>
      ),
    },
    {
      name: 'Variable width',
      component: (
        <ComponentBlock>
          <Tooltip title={LONG_TEXT}>
            <Button color="inherit">Default width [300px]</Button>
          </Tooltip>

          <CustomWidthTooltip title={LONG_TEXT}>
            <Button color="inherit">Custom width [500px]</Button>
          </CustomWidthTooltip>

          <NoMaxWidthTooltip title={LONG_TEXT}>
            <Button color="inherit">No wrapping</Button>
          </NoMaxWidthTooltip>
        </ComponentBlock>
      ),
    },
    {
      name: 'Transitions',
      component: (
        <ComponentBlock>
          <Tooltip title="Add">
            <Button color="inherit">Grow</Button>
          </Tooltip>

          <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Add">
            <Button color="inherit">Fade</Button>
          </Tooltip>

          <Tooltip TransitionComponent={Zoom} title="Add">
            <Button color="inherit">Zoom</Button>
          </Tooltip>
        </ComponentBlock>
      ),
    },
    {
      name: 'Positioned',
      component: (
        <ComponentBlock>
          <Tooltip title="Add" placement="top-start">
            <Button color="inherit">top-start</Button>
          </Tooltip>

          <Tooltip title="Add" placement="top">
            <Button color="inherit">top</Button>
          </Tooltip>

          <Tooltip title="Add" placement="top-end">
            <Button color="inherit">top-end</Button>
          </Tooltip>

          <Tooltip title="Add" placement="left-start">
            <Button color="inherit">left-start</Button>
          </Tooltip>

          <Tooltip title="Add" placement="left">
            <Button color="inherit">left</Button>
          </Tooltip>

          <Tooltip title="Add" placement="left-end">
            <Button color="inherit">left-end</Button>
          </Tooltip>

          <Tooltip title="Add" placement="right-start">
            <Button color="inherit">right-start</Button>
          </Tooltip>

          <Tooltip title="Add" placement="right">
            <Button color="inherit">right</Button>
          </Tooltip>

          <Tooltip title="Add" placement="right-end">
            <Button color="inherit">right-end</Button>
          </Tooltip>

          <Tooltip title="Add" placement="bottom-start">
            <Button color="inherit">bottom-start</Button>
          </Tooltip>

          <Tooltip title="Add" placement="bottom">
            <Button color="inherit">bottom</Button>
          </Tooltip>

          <Tooltip title="Add" placement="bottom-end">
            <Button color="inherit">bottom-end</Button>
          </Tooltip>
        </ComponentBlock>
      ),
    },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Tooltip"
          links={[{ name: 'Components', href: paths.components }, { name: 'Tooltip' }]}
          moreLink={['https://mui.com/components/tooltips']}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
