import type { IMailLabel } from 'src/types/mail';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import { CONFIG } from 'src/config-global';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';
import { EmptyContent } from 'src/components/empty-content';

import { MailNavItem } from './mail-nav-item';
import { MailNavItemSkeleton } from './mail-skeleton';

// ----------------------------------------------------------------------

type Props = {
  empty: boolean;
  loading: boolean;
  openNav: boolean;
  labels: IMailLabel[];
  onCloseNav: () => void;
  selectedLabelId: string;
  onToggleCompose: () => void;
  handleClickLabel: (labelId: string) => void;
};

export function MailNav({
  empty,
  labels,
  loading,
  openNav,
  onCloseNav,
  selectedLabelId,
  onToggleCompose,
  handleClickLabel,
}: Props) {
  const theme = useTheme();

  const renderLoading = (
    <Stack sx={{ flex: '1 1 auto', px: { xs: 2.5, md: 1.5 } }}>
      <MailNavItemSkeleton />
    </Stack>
  );

  const renderEmpty = (
    <Stack sx={{ flex: '1 1 auto', px: { xs: 2.5, md: 1.5 } }}>
      <EmptyContent
        title="No labels"
        imgUrl={`${CONFIG.site.basePath}/assets/icons/empty/ic-folder-empty.svg`}
      />
    </Stack>
  );

  const renderList = (
    <Scrollbar sx={{ flex: '1 1 0' }}>
      <nav>
        <Box
          component="ul"
          sx={{
            pb: 1.5,
            px: { xs: 1.5, md: 0.5 },
          }}
        >
          {labels.map((label) => (
            <MailNavItem
              key={label.id}
              label={label}
              selected={selectedLabelId === label.id}
              onClickNavItem={() => {
                handleClickLabel(label.id);
              }}
            />
          ))}
        </Box>
      </nav>
    </Scrollbar>
  );

  const renderContent = (
    <>
      <Stack sx={{ p: { xs: 2.5, md: theme.spacing(2, 1.5) } }}>
        <Button
          fullWidth
          color="inherit"
          variant="contained"
          startIcon={<Iconify icon="solar:pen-bold" />}
          onClick={onToggleCompose}
        >
          Compose
        </Button>
      </Stack>

      {loading ? renderLoading : <>{empty ? renderEmpty : renderList}</>}
    </>
  );

  return (
    <>
      {renderContent}

      <Drawer
        open={openNav}
        onClose={onCloseNav}
        slotProps={{ backdrop: { invisible: true } }}
        PaperProps={{ sx: { width: 280 } }}
      >
        {renderContent}
      </Drawer>
    </>
  );
}
