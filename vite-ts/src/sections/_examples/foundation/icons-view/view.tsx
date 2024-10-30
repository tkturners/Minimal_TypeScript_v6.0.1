import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';
import { countries } from 'src/assets/data';
import {
  GithubIcon,
  GoogleIcon,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
  InstagramIcon,
} from 'src/assets/icons';

import { Logo } from 'src/components/logo';
import { SvgColor } from 'src/components/svg-color';
import { Iconify, FlagIcon } from 'src/components/iconify';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ComponentBlock, ComponentContainer } from '../../component-block';

// ----------------------------------------------------------------------

export function IconsView() {
  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Icons"
          links={[{ name: 'Components', href: paths.components }, { name: 'Icons' }]}
          moreLink={[
            'https://mui.com/components/material-icons',
            'https://iconify.design/icon-sets',
          ]}
        />
      </ComponentHero>

      <ComponentContainer>
        <ComponentBlock title="Logo">
          <Logo disableLink width={64} height={64} />
          <Logo disableLink isSingle={false} width={180} height={64} />
        </ComponentBlock>

        <ComponentBlock title="Material">
          <Link
            href="https://mui.com/components/icons/#main-content"
            target="_blank"
            rel="noopener"
          >
            https://mui.com/components/icons/#main-content
          </Link>
        </ComponentBlock>

        <ComponentBlock title="Iconify">
          <Tooltip title="Iconify">
            <Iconify icon="eva:color-palette-fill" width={32} />
          </Tooltip>
          <Iconify icon="eva:color-palette-fill" width={32} sx={{ color: 'action.active' }} />
          <Iconify icon="eva:color-palette-fill" width={32} sx={{ color: 'action.disabled' }} />
          <Iconify icon="eva:color-palette-fill" width={32} sx={{ color: 'primary.main' }} />
          <Iconify icon="eva:color-palette-fill" width={32} sx={{ color: 'secondary.main' }} />
          <Iconify icon="eva:color-palette-fill" width={32} sx={{ color: 'info.main' }} />
          <Iconify icon="eva:color-palette-fill" width={32} sx={{ color: 'success.main' }} />
          <Iconify icon="eva:color-palette-fill" width={32} sx={{ color: 'warning.main' }} />
          <Iconify icon="eva:color-palette-fill" width={32} sx={{ color: 'error.main' }} />
        </ComponentBlock>

        <ComponentBlock title="Local icon">
          <Tooltip title="SvgColor">
            <SvgColor width={32} src={`${CONFIG.assetsDir}/assets/icons/navbar/ic-dashboard.svg`} />
          </Tooltip>
          <SvgColor
            width={32}
            src={`${CONFIG.assetsDir}/assets/icons/navbar/ic-dashboard.svg`}
            sx={{ color: 'action.active' }}
          />
          <SvgColor
            width={32}
            src={`${CONFIG.assetsDir}/assets/icons/navbar/ic-dashboard.svg`}
            sx={{ color: 'action.disabled' }}
          />
          <SvgColor
            width={32}
            src={`${CONFIG.assetsDir}/assets/icons/navbar/ic-dashboard.svg`}
            sx={{ color: 'primary.main' }}
          />
          <SvgColor
            width={32}
            src={`${CONFIG.assetsDir}/assets/icons/navbar/ic-dashboard.svg`}
            sx={{ color: 'secondary.main' }}
          />
          <SvgColor
            width={32}
            src={`${CONFIG.assetsDir}/assets/icons/navbar/ic-dashboard.svg`}
            sx={{ color: 'info.main' }}
          />
          <SvgColor
            width={32}
            src={`${CONFIG.assetsDir}/assets/icons/navbar/ic-dashboard.svg`}
            sx={{ color: 'success.main' }}
          />
          <SvgColor
            width={32}
            src={`${CONFIG.assetsDir}/assets/icons/navbar/ic-dashboard.svg`}
            sx={{ color: 'warning.main' }}
          />
          <SvgColor
            width={32}
            src={`${CONFIG.assetsDir}/assets/icons/navbar/ic-dashboard.svg`}
            sx={{ color: 'error.main' }}
          />
        </ComponentBlock>

        <ComponentBlock title="Social icon" sx={{ flexDirection: 'column' }}>
          <Box gap={2} display="flex">
            <Tooltip title="Google">
              <GoogleIcon width={24} />
            </Tooltip>
            <FacebookIcon width={24} />
            <LinkedinIcon width={24} />
            <InstagramIcon width={24} />
            <TwitterIcon width={24} />
            <GithubIcon width={24} />
          </Box>

          <Box gap={2} display="flex">
            <GoogleIcon width={32} sx={{ color: 'primary.main' }} />
            <FacebookIcon width={32} sx={{ color: 'secondary.main' }} />
            <LinkedinIcon width={32} sx={{ color: 'info.main' }} />
            <InstagramIcon width={32} sx={{ color: 'success.main' }} />
            <TwitterIcon width={32} sx={{ color: 'warning.main' }} />
            <GithubIcon width={32} sx={{ color: 'error.main' }} />
          </Box>
        </ComponentBlock>

        <ComponentBlock title="Flag icon">
          {countries.map((country) =>
            country.label ? (
              <Tooltip key={country.code} title={`${country.label} - ${country.code}`}>
                <FlagIcon code={country.code} />
              </Tooltip>
            ) : null
          )}
        </ComponentBlock>
      </ComponentContainer>
    </>
  );
}
