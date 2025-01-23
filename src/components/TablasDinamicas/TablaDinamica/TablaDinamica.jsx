import React, { useState } from 'react';
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
  Modal,
  Backdrop,
  Fade,
  IconButton,
} from '@mui/material';
import { FaEye, FaEdit, FaTrash, FaPlusCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TablaDinamica = ({ titulo, columnas, data, ruta, rutaEliminar }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleNuevoMonitoreo = () => {
    navigate(ruta);
  };

  const handleDeleteOpen = (id) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleDeleteClose = () => {
    setOpen(false);
    setSelectedId(null);
  };

  const handleConfirmDelete = async () => {
    if (selectedId !== null) {
      try {
        await fetch(`${rutaEliminar}/${selectedId}`, { method: 'DELETE' });
        // Opcionalmente, actualiza el estado para eliminar el registro de la tabla
        console.log(`Elemento con ID ${selectedId} eliminado`);
      } catch (error) {
        console.error('Error al eliminar el elemento:', error);
      } finally {
        handleDeleteClose();
      }
    }
  };

  const columnasConAcciones = [
    ...columnas,
    {
      accessorKey: 'acciones',
      header: 'Acciones',
      cell: ({ row }) => {
        const id = row.original.id;
        const isSmallScreen = useMediaQuery('(max-width: 600px)');
        const isMediumScreen = useMediaQuery('(max-width: 820px)');

        // Estilos comunes para los botones
        const buttonStyles = {
          minWidth: isSmallScreen ? 'auto' : 'initial',
          padding: isSmallScreen ? '2px 4px' : '4px 8px', // Más compacto
          fontSize: isSmallScreen ? '10px' : '12px', // Reducir texto
          borderRadius: '4px', // Opcional: bordes más redondeados
          textTransform: 'none', // Evitar mayúsculas automáticas
        };

        return (
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
            <Button
              size={isSmallScreen ? 'small' : 'medium'}
              variant="outlined"
              color="info"
              startIcon={<FaEye />}
              onClick={() => handleView(id)}
              sx={buttonStyles}
            >
              {!(isSmallScreen || isMediumScreen) && 'Visualizar'}
            </Button>
            <Button
              size={isSmallScreen ? 'small' : 'medium'}
              variant="outlined"
              color="secondary"
              startIcon={<FaEdit />}
              onClick={() => handleEdit(id)}
              sx={buttonStyles}
            >
              {!(isSmallScreen || isMediumScreen) && 'Editar'}
            </Button>
            <Button
              size={isSmallScreen ? 'small' : 'medium'}
              variant="outlined"
              color="error"
              startIcon={<FaTrash />}
              onClick={() => handleDeleteOpen(id)}
              sx={buttonStyles}
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

  return (
    <Stack
      sx={{
        mt: '-1.0rem', // Subir la tabla 30%
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
            color: 'green',
          }}
        >
          {titulo}
        </Typography>
        <Box sx={{ mt: { xs: '0', sm: '0' }, ml: 'auto' }}>
          <button
                      onClick={handleNuevoMonitoreo}
                      className="border border-blue-400 text-blue-400 py-1 px-2 rounded flex items-center space-x-2"
                      style={{ marginTop: '10px', marginBottom: '20px' }} // Padding de 10px arriba y abajo
                    >
                      <FaPlusCircle className="w-4 h-4" />
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
                    }}
                  >
                    {cell.column.columnDef.cell ? (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    ) : (
                      <MRT_TableBodyCellValue cell={cell} />
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <MRT_ToolbarAlertBanner table={table} />
      <Modal
        open={open}
        onClose={handleDeleteClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: '90%', sm: '400px' },
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography variant="h6" gutterBottom>
              ¿Estás seguro de que quieres eliminar este elemento?
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 2, justifyContent: 'center' }}>
              <Button variant="outlined" color="error" onClick={handleConfirmDelete}>
                Confirmar
              </Button>
              <Button variant="outlined" onClick={handleDeleteClose}>
                Cancelar
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </Stack>
  );
};

export default TablaDinamica;
