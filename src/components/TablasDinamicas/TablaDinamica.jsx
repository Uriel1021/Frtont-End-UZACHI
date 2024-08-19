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
  Button,
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
import { FaEye, FaEdit, FaTrash, FaPlusCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TablaDinamica = ({ titulo, columnas, data, ruta }) => {
  
  const navigate = useNavigate();

  const handleNuevoMonitoreo = () => {
    navigate(ruta);
  };
  // Añadir la columna de acciones al final de las columnas
  const columnasConAcciones = [
    ...columnas,
    {
      accessorKey: 'acciones',
      header: 'Acciones',
      cell: ({ row }) => {
        const id = row.original.id; // Obtener el ID de la fila
        const isSmallScreen = useMediaQuery('(max-width: 600px)');
        const isMediumScreen = useMediaQuery('(max-width: 820px)');

        return (
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
            <Button 
              size={isSmallScreen ? 'small' : 'medium'} 
              variant="outlined" 
              color="info" 
              startIcon={<FaEye />}
              onClick={() => handleView(id)}
              sx={{
                minWidth: isSmallScreen ? 'auto' : 'initial',
                padding: isSmallScreen ? '2px' : '6px 16px',
                fontSize: isSmallScreen ? '12px' : 'inherit',
              }}
            >
              {!(isSmallScreen || isMediumScreen) && 'Visualizar'}
            </Button>
            <Button 
              size={isSmallScreen ? 'small' : 'medium'} 
              variant="outlined" 
              color="primary" 
              startIcon={<FaEdit />}
              onClick={() => handleEdit(id)}
              sx={{
                minWidth: isSmallScreen ? 'auto' : 'initial',
                padding: isSmallScreen ? '2px' : '6px 16px',
                fontSize: isSmallScreen ? '12px' : 'inherit',
              }}
            >
              {!(isSmallScreen || isMediumScreen) && 'Editar'}
            </Button>
            <Button 
              size={isSmallScreen ? 'small' : 'medium'} 
              variant="outlined" 
              color="error" 
              startIcon={<FaTrash />}
              onClick={() => handleDelete(id)}
              sx={{
                minWidth: isSmallScreen ? 'auto' : 'initial',
                padding: isSmallScreen ? '2px' : '6px 16px',
                fontSize: isSmallScreen ? '12px' : 'inherit',
              }}
            >
              {!(isSmallScreen || isMediumScreen) && 'Eliminar'}
            </Button>
          </Box>
        );
      },
    },
  ];

  const table = useMaterialReactTable({
    columns: columnasConAcciones,
    data,
    initialState: {
      pagination: { pageSize: 8, pageIndex: 0 },
      showGlobalFilter: true,
    },
    muiPaginationProps: {
      rowsPerPageOptions: [8, 16, 24],
      variant: 'outlined',
    },
    paginationDisplayMode: 'pages',
  });

  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const isMediumScreen = useMediaQuery('(max-width: 768px)');

  const handleView = (id) => {
    // Lógica para manejar la visualización del elemento con el ID dado
    console.log(`Visualizar el elemento con ID: ${id}`);
  };

  const handleEdit = (id) => {
    // Lógica para manejar la edición del elemento con el ID dado
    console.log(`Editar el elemento con ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Lógica para manejar la eliminación del elemento con el ID dado
    console.log(`Eliminar el elemento con ID: ${id}`);
  };

  return (
    <Stack 
      sx={{ 
        mt: '-7.0rem', // Subir la tabla 30%
        px: { xs: '1rem', sm: '2rem', md: '4rem' },
        width: { xs: '100%', sm: '90%', md: '80%' },
      }}
    >
    <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Typography 
          variant="h4" 
          sx={{ 
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            color:'green',
          }}
        >
          {titulo}
        </Typography>
        <Box sx={{ mt: { xs: '0', sm: '0' }, ml: 'auto' }}>
          <button 
            onClick={handleNuevoMonitoreo} 
            className="border border-blue-400 text-blue-400 py-2 px-4 rounded flex items-center space-x-2"
            style={{ marginTop: '10px', marginBottom: '20px' }} // Padding de 10px arriba y abajo
          >
            <FaPlusCircle className="w-6 h-6" />
            <span className="hidden sm:inline">Nuevo</span>
          </button>
        </Box>
      </Box>
      
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
                      backgroundColor: 'green', // Color verde para el encabezado
                      color: 'white', // Texto en blanco para el encabezado
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
              <TableRow key={row.id}>
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
                      backgroundColor: rowIndex % 2 === 0 ? '#f5f5f5' : 'white', // Alternar entre gris y blanco para el contenido
                      color: 'black', // Texto en negro para el contenido
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
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

export default TablaDinamica;
