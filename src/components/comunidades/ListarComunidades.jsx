import TablaDinamica from '../TablasDinamicas/TablaDinamica/TablaDinamica';

import { data as dataGround } from './DatosComunidades'

const columnas = [
  {
    accessorKey: 'nombre',
    header: 'Nombre',
  },
  {
    accessorKey: 'paraje',
    header: 'Paraje',
  },
  {
    accessorKey: 'ubicacion.utmX',
    header: 'UTM X',
    hideOnSmallScreen: true, // Ocultar en pantallas pequeñas
  },
  {
    accessorKey: 'ubicacion.utmY',
    header: 'UTM Y',
    hideOnSmallScreen: true, // Ocultar en pantallas pequeñas
  },
  {
    accessorKey: 'fechaRegistro',
    header: 'Fecha de Registro',
    hideOnSmallScreen: true, // Ocultar en pantallas pequeñas
  },
];

const ListarComunidades = () => {
  return (
    <TablaDinamica
      titulo="Lista de Comunidades" 
      columnas={columnas} 
      data={dataGround}
      ruta = "/comunidades/nuevo"
    />
  );
};

export default ListarComunidades;
