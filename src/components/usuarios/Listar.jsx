import TablaDinamica from '../TablasDinamicas/TablaDinamica';
import { data as makeData } from './DatosUsuarios';

const columnas = [
  {
    accessorKey: 'name.firstName',
    header: 'Nombre',
  },
  {
    accessorKey: 'name.lastName',
    header: 'Apellidos',
  },
  {
    accessorKey: 'address',
    header: 'Direccion',
    hideOnSmallScreen: true, // Ocultar en pantallas pequeñas
  },
  {
    accessorKey: 'city',
    header: 'Ciudad',
    hideOnSmallScreen: true, // Ocultar en pantallas pequeñas
  },
  {
    accessorKey: 'state',
    header: 'Estado',
    hideOnSmallScreen: true, // Ocultar en pantallas pequeñas
    // No ocultar este campo, siempre visible
  },
];

const Listar = () => {
  return (
    <TablaDinamica
      titulo="Usuarios" 
      columnas={columnas} 
      data={makeData} 
    />
  );
};

export default Listar;
