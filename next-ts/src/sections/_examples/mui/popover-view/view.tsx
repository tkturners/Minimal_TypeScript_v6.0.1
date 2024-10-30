'use client';

import type { PopoverArrow } from 'src/components/custom-popover';

import { useRef, useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

import { ComponentHero } from '../../component-hero';
import { ComponentBlock, ComponentContainer } from '../../component-block';

// ----------------------------------------------------------------------

export function PopoverView() {
  const [arrow, setArrow] = useState<PopoverArrow['placement']>('top-left');

  const clickPopover = usePopover();

  const customizedPopover = usePopover();

  const hoverPopoverRef = useRef<HTMLButtonElement | null>(null);

  const [hoverPopoverOpen, setHoverPopoverOpen] = useState<boolean>(false);

  const handleChangePopoverArrow = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setArrow(event.target.value as PopoverArrow['placement']);
  }, []);

  const handleHoverPopoverOpen = useCallback(() => {
    setHoverPopoverOpen(true);
  }, []);

  const handleHoverPopoverClose = useCallback(() => {
    setHoverPopoverOpen(false);
  }, []);

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Popover"
          links={[{ name: 'Components', href: paths.components }, { name: 'Popover' }]}
          moreLink={['https://mui.com/components/popover']}
        />
      </ComponentHero>

      <ComponentContainer
        sx={{
          rowGap: 5,
          columnGap: 3,
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
        }}
      >
        <ComponentBlock title="Click & hover" sx={{ gap: 3 }}>
          <div>
            <Button variant="contained" onClick={clickPopover.onOpen}>
              Click popover
            </Button>
            <CustomPopover
              open={clickPopover.open}
              onClose={clickPopover.onClose}
              anchorEl={clickPopover.anchorEl}
              slotProps={{ arrow: { placement: 'top-center' } }}
            >
              <Box sx={{ p: 2, maxWidth: 280 }}>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  Etiam feugiat lorem non metus
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis.
                </Typography>
              </Box>
            </CustomPopover>
          </div>

          <div>
            <Button
              ref={hoverPopoverRef}
              variant="outlined"
              onMouseEnter={handleHoverPopoverOpen}
              onMouseLeave={handleHoverPopoverClose}
            >
              Hover popover.
            </Button>

            <CustomPopover
              open={hoverPopoverOpen}
              anchorEl={hoverPopoverRef.current}
              slotProps={{
                arrow: { placement: 'bottom-center' },
                paper: {
                  onMouseEnter: handleHoverPopoverOpen,
                  onMouseLeave: handleHoverPopoverClose,
                  sx: { ...(hoverPopoverOpen && { pointerEvents: 'auto' }) },
                },
              }}
              sx={{ pointerEvents: 'none' }}
            >
              <Box sx={{ p: 2, maxWidth: 280 }}>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  Etiam feugiat lorem non metus
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis.
                </Typography>
              </Box>
            </CustomPopover>
          </div>
        </ComponentBlock>

        <ComponentBlock title="Customized" sx={{ gap: 5 }}>
          <IconButton onClick={customizedPopover.onOpen} sx={{ bgcolor: 'action.hover' }}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>

          <FormControl>
            <FormLabel sx={{ typography: 'body2' }}>Arrow</FormLabel>
            <RadioGroup value={arrow} onChange={handleChangePopoverArrow}>
              {[
                'top-left',
                'top-center',
                'top-right',
                'bottom-left',
                'bottom-center',
                'bottom-right',
                'left-top',
                'left-center',
                'left-bottom',
                'right-top',
                'right-center',
                'right-bottom',
              ].map((position) => (
                <FormControlLabel
                  key={position}
                  value={position}
                  control={<Radio />}
                  label={position}
                />
              ))}
            </RadioGroup>
          </FormControl>

          <CustomPopover
            open={customizedPopover.open}
            onClose={customizedPopover.onClose}
            anchorEl={customizedPopover.anchorEl}
            slotProps={{ arrow: { placement: arrow } }}
          >
            <Box sx={{ p: 2, maxWidth: 280 }}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Etiam feugiat lorem non metus
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis.
              </Typography>
            </Box>
          </CustomPopover>
        </ComponentBlock>
      </ComponentContainer>
    </>
  );
}
