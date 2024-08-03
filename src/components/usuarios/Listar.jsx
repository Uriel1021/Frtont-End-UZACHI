import {
  MRT_GlobalFilterTextField,
  MRT_TableBodyCellValue,
  MRT_TablePagination,
  MRT_ToolbarAlertBanner,
  flexRender,
  useMaterialReactTable,
} from 'material-react-table';
import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from '@mui/material';

import { data } from './makeData';

const columns = [
  {
    accessorKey: 'name.firstName',
    header: 'First Name',
  },
  {
    accessorKey: 'name.lastName',
    header: 'Last Name',
  },
  {
    accessorKey: 'address',
    header: 'Address',
    hideOnSmallScreen: true, // Ocultar en pantallas pequeñas
  },
  {
    accessorKey: 'city',
    header: 'City',
    hideOnSmallScreen: true, // Ocultar en pantallas pequeñas
  },
  {
    accessorKey: 'state',
    header: 'State',
    // No ocultar este campo, siempre visible
  },
];

const Example = () => {
  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: true,
    initialState: {
      pagination: { pageSize: 5, pageIndex: 0 },
      showGlobalFilter: true,
    },
    muiPaginationProps: {
      rowsPerPageOptions: [5, 10, 15],
      variant: 'outlined',
    },
    paginationDisplayMode: 'pages',
  });

  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const isMediumScreen = useMediaQuery('(max-width: 768px)');

  return (
    <Stack 
      sx={{ 
        m: '2rem 0', 
        px: { xs: '1rem', sm: '2rem', md: '4rem' },
        width: { xs: '100%', sm: '90%', md: '80%' },
      }}
    >
      <Typography 
        variant="h4" 
        sx={{ 
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
        }}
      >
        Usuarios
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: { xs: '1rem', sm: '0' },
        }}
      >
        <MRT_GlobalFilterTextField table={table} sx={{ width: { xs: '100%', sm: 'auto' } }} />
        <MRT_TablePagination table={table} sx={{ width: { xs: '100%', sm: 'auto' } }} />
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => (
                  <TableCell 
                    align="center" 
                    variant="head" 
                    key={header.id}
                    sx={{
                      display: 
                        (isSmallScreen || isMediumScreen) && 
                        header.column.columnDef.hideOnSmallScreen &&
                        index !== headerGroup.headers.length - 1 // Ocultar solo si no es el último campo
                        ? 'none' 
                        : 'table-cell',
                      fontSize: { xs: '0.75rem', sm: '1rem' },
                      padding: { xs: '4px', sm: '8px' },
                    }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header ?? header.column.columnDef.Header,
                          header.getContext(),
                        )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row, rowIndex) => (
              <TableRow key={row.id} selected={row.getIsSelected()}>
                {row.getVisibleCells().map((cell, index) => (
                  <TableCell 
                    align="center" 
                    variant="body" 
                    key={cell.id}
                    sx={{
                      display: 
                        (isSmallScreen || isMediumScreen) && 
                        cell.column.columnDef.hideOnSmallScreen &&
                        index !== row.getVisibleCells().length - 1 // Ocultar solo si no es el último campo
                        ? 'none' 
                        : 'table-cell',
                      fontSize: { xs: '0.75rem', sm: '1rem' },
                      padding: { xs: '4px', sm: '8px' },
                    }}
                  >
                    <MRT_TableBodyCellValue
                      cell={cell}
                      table={table}
                      staticRowIndex={rowIndex}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <MRT_ToolbarAlertBanner stackAlertBanner table={table} />
    </Stack>
  );
};

export default Example;
