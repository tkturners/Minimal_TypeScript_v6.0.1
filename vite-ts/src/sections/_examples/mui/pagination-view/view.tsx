import { useState, useCallback } from 'react';

import Pagination from '@mui/material/Pagination';
import TablePagination from '@mui/material/TablePagination';

import { paths } from 'src/routes/paths';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { PaginationItems } from './pagination-items';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

const COLORS = ['standard', 'primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

const SIZES = ['small', 'medium', 'large'] as const;

// ----------------------------------------------------------------------

const blockProps = { gap: 3, flexDirection: 'column' };

export function PaginationView() {
  const [page, setPage] = useState(2);

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = useCallback(
    (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setPage(newPage);
    },
    []
  );

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    },
    []
  );

  const DEMO = [
    {
      name: 'Circular',
      component: (
        <ComponentBlock sx={blockProps}>
          <Pagination shape="circular" count={10} variant="text" />
          <Pagination shape="circular" count={10} variant="text" disabled />
          <Pagination shape="circular" count={10} variant="outlined" />
          <Pagination shape="circular" count={10} variant="outlined" disabled />
          <Pagination shape="circular" count={10} variant="soft" />
          <Pagination shape="circular" count={10} variant="soft" disabled />
        </ComponentBlock>
      ),
    },
    {
      name: 'Rounded',
      component: (
        <ComponentBlock sx={blockProps}>
          <Pagination shape="rounded" count={10} variant="text" />
          <Pagination shape="rounded" count={10} variant="text" disabled />
          <Pagination shape="rounded" count={10} variant="outlined" />
          <Pagination shape="rounded" count={10} variant="outlined" disabled />
          <Pagination shape="rounded" count={10} variant="soft" />
          <Pagination shape="rounded" count={10} variant="soft" disabled />
        </ComponentBlock>
      ),
    },
    {
      name: 'Colors',
      component: (
        <ComponentBlock sx={blockProps}>
          {COLORS.map((color) => (
            <Pagination key={color} color={color} count={10} variant="text" />
          ))}

          {COLORS.map((color) => (
            <Pagination key={color} color={color} count={10} variant="outlined" />
          ))}

          {COLORS.map((color) => (
            <Pagination key={color} color={color} count={10} variant="soft" />
          ))}
        </ComponentBlock>
      ),
    },
    {
      name: 'Sizes',
      component: (
        <ComponentBlock sx={blockProps}>
          {SIZES.map((size) => (
            <Pagination count={10} key={size} size={size} />
          ))}
        </ComponentBlock>
      ),
    },
    {
      name: 'Buttons',
      component: (
        <ComponentBlock sx={blockProps}>
          <Pagination count={10} showFirstButton showLastButton />
          <Pagination count={10} hidePrevButton hideNextButton />
        </ComponentBlock>
      ),
    },
    {
      name: 'Ranges',
      component: (
        <ComponentBlock sx={blockProps}>
          <Pagination count={11} defaultPage={6} siblingCount={0} />
          <Pagination count={11} defaultPage={6} />
          <Pagination count={11} defaultPage={6} siblingCount={0} boundaryCount={2} />
          <Pagination count={11} defaultPage={6} boundaryCount={2} />
        </ComponentBlock>
      ),
    },
    {
      name: 'Table',
      component: (
        <ComponentBlock sx={blockProps}>
          <TablePagination
            component="div"
            count={100}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </ComponentBlock>
      ),
    },
    {
      name: 'Items',
      component: (
        <ComponentBlock sx={blockProps}>
          <PaginationItems />
        </ComponentBlock>
      ),
    },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Pagination"
          links={[{ name: 'Components', href: paths.components }, { name: 'Pagination' }]}
          moreLink={['https://mui.com/components/pagination']}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
