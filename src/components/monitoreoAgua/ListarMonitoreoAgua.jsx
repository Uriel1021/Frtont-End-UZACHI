import TablaDinamica from '../TablasDinamicas/TablaDinamica';
import { data as dataWater } from './DatosMonitoreoAgua';

const columnas = [
  {
    accessorKey: 'comunidad',
    header: 'Comunidad',
  },
  {
    accessorKey: 'paraje',
    header: 'Paraje',
  },
  {
    accessorKey: 'uso',
    header: 'Uso',
    hideOnSmallScreen: true, // Ocultar en pantallas pequeñas
  },
  {
    accessorKey: 'fecha',
    header: 'Fecha',
    hideOnSmallScreen: true, // Ocultar en pantallas pequeñas
  },
];

const ListarMonitoreoAgua = () => {
  return (
    <TablaDinamica
      titulo="Monitoreo de Agua" 
      columnas={columnas} 
      data={dataWater}
      ruta = "/monitoreos/monitoreoagua/nuevo" 
    />
  );
};

export default ListarMonitoreoAgua;
