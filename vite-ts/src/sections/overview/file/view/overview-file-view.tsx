import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { useBoolean } from 'src/hooks/use-boolean';

import { CONFIG } from 'src/config-global';
import { _files, _folders } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';
import { UploadBox } from 'src/components/upload';
import { Scrollbar } from 'src/components/scrollbar';

import { FileWidget } from '../../../file-manager/file-widget';
import { FileUpgrade } from '../../../file-manager/file-upgrade';
import { FileRecentItem } from '../../../file-manager/file-recent-item';
import { FileDataActivity } from '../../../file-manager/file-data-activity';
import { FileManagerPanel } from '../../../file-manager/file-manager-panel';
import { FileStorageOverview } from '../../../file-manager/file-storage-overview';
import { FileManagerFolderItem } from '../../../file-manager/file-manager-folder-item';
import { FileManagerNewFolderDialog } from '../../../file-manager/file-manager-new-folder-dialog';

// ----------------------------------------------------------------------

const GB = 1000000000 * 24;

// ----------------------------------------------------------------------

export function OverviewFileView() {
  const [folderName, setFolderName] = useState('');

  const [files, setFiles] = useState<(File | string)[]>([]);

  const upload = useBoolean();

  const newFolder = useBoolean();

  const handleChangeFolderName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(event.target.value);
  }, []);

  const handleCreateNewFolder = useCallback(() => {
    newFolder.onFalse();
    setFolderName('');
    console.info('CREATE NEW FOLDER');
  }, [newFolder]);

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles([...files, ...acceptedFiles]);
    },
    [files]
  );

  const renderStorageOverview = (
    <FileStorageOverview
      total={GB}
      chart={{ series: 76 }}
      data={[
        {
          name: 'Images',
          usedStorage: GB / 2,
          filesCount: 223,
          icon: (
            <Box component="img" src={`${CONFIG.site.basePath}/assets/icons/files/ic-img.svg`} />
          ),
        },
        {
          name: 'Media',
          usedStorage: GB / 5,
          filesCount: 223,
          icon: (
            <Box component="img" src={`${CONFIG.site.basePath}/assets/icons/files/ic-video.svg`} />
          ),
        },
        {
          name: 'Documents',
          usedStorage: GB / 5,
          filesCount: 223,
          icon: (
            <Box
              component="img"
              src={`${CONFIG.site.basePath}/assets/icons/files/ic-document.svg`}
            />
          ),
        },
        {
          name: 'Other',
          usedStorage: GB / 10,
          filesCount: 223,
          icon: (
            <Box component="img" src={`${CONFIG.site.basePath}/assets/icons/files/ic-file.svg`} />
          ),
        },
      ]}
    />
  );

  return (
    <>
      <DashboardContent maxWidth="xl">
        <Grid container spacing={3}>
          <Grid xs={12} sx={{ display: { xs: 'block', sm: 'none' } }}>
            {renderStorageOverview}
          </Grid>

          <Grid xs={12} sm={6} md={4}>
            <FileWidget
              title="Dropbox"
              value={GB / 10}
              total={GB}
              icon={`${CONFIG.site.basePath}/assets/icons/app/ic-app-dropbox.svg`}
            />
          </Grid>

          <Grid xs={12} sm={6} md={4}>
            <FileWidget
              title="Drive"
              value={GB / 5}
              total={GB}
              icon={`${CONFIG.site.basePath}/assets/icons/app/ic-app-drive.svg`}
            />
          </Grid>

          <Grid xs={12} sm={6} md={4}>
            <FileWidget
              title="OneDrive"
              value={GB / 2}
              total={GB}
              icon={`${CONFIG.site.basePath}/assets/icons/app/ic-app-onedrive.svg`}
            />
          </Grid>

          <Grid xs={12} md={6} lg={8}>
            <FileDataActivity
              title="Data activity"
              chart={{
                series: [
                  {
                    name: 'Weekly',
                    categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
                    data: [
                      { name: 'Images', data: [20, 34, 48, 65, 37] },
                      { name: 'Media', data: [10, 34, 13, 26, 27] },
                      { name: 'Documents', data: [10, 14, 13, 16, 17] },
                      { name: 'Other', data: [5, 12, 6, 7, 8] },
                    ],
                  },
                  {
                    name: 'Monthly',
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                    data: [
                      { name: 'Images', data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 12, 43, 34] },
                      { name: 'Media', data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 12, 43, 34] },
                      { name: 'Documents', data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 12, 43, 34] },
                      { name: 'Other', data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 12, 43, 34] },
                    ],
                  },
                  {
                    name: 'Yearly',
                    categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
                    data: [
                      { name: 'Images', data: [24, 34, 32, 56, 77, 48] },
                      { name: 'Media', data: [24, 34, 32, 56, 77, 48] },
                      { name: 'Documents', data: [24, 34, 32, 56, 77, 48] },
                      { name: 'Other', data: [24, 34, 32, 56, 77, 48] },
                    ],
                  },
                ],
              }}
            />

            <Box sx={{ mt: 5 }}>
              <FileManagerPanel
                title="Folders"
                link={paths.dashboard.fileManager}
                onOpen={newFolder.onTrue}
              />

              <Scrollbar sx={{ mb: 3, minHeight: 186 }}>
                <Box sx={{ gap: 3, display: 'flex' }}>
                  {_folders.map((folder) => (
                    <FileManagerFolderItem
                      key={folder.id}
                      folder={folder}
                      onDelete={() => console.info('DELETE', folder.id)}
                      sx={{ ...(_folders.length > 3 && { width: 240, flexShrink: 0 }) }}
                    />
                  ))}
                </Box>
              </Scrollbar>

              <FileManagerPanel
                title="Recent files"
                link={paths.dashboard.fileManager}
                onOpen={upload.onTrue}
              />

              <Box sx={{ gap: 2, display: 'flex', flexDirection: 'column' }}>
                {_files.slice(0, 5).map((file) => (
                  <FileRecentItem
                    key={file.id}
                    file={file}
                    onDelete={() => console.info('DELETE', file.id)}
                  />
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid xs={12} md={6} lg={4}>
            <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
              <UploadBox
                onDrop={handleDrop}
                placeholder={
                  <Box
                    sx={{
                      gap: 0.5,
                      display: 'flex',
                      alignItems: 'center',
                      color: 'text.disabled',
                      flexDirection: 'column',
                    }}
                  >
                    <Iconify icon="eva:cloud-upload-fill" width={40} />
                    <Typography variant="body2">Upload file</Typography>
                  </Box>
                }
                sx={{
                  py: 2.5,
                  width: 'auto',
                  height: 'auto',
                  borderRadius: 1.5,
                }}
              />

              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>{renderStorageOverview}</Box>

              <FileUpgrade />
            </Box>
          </Grid>
        </Grid>
      </DashboardContent>

      <FileManagerNewFolderDialog open={upload.value} onClose={upload.onFalse} />

      <FileManagerNewFolderDialog
        open={newFolder.value}
        onClose={newFolder.onFalse}
        title="New Folder"
        folderName={folderName}
        onChangeFolderName={handleChangeFolderName}
        onCreate={handleCreateNewFolder}
      />
    </>
  );
}
