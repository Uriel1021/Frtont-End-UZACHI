import TablaDinamica from '../TablasDinamicas/TablaDinamica';
import { data as dataGround } from './DatosMonitoreoSuelo' 

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
    accessorKey: 'fecha',
    header: 'Fecha',
    hideOnSmallScreen: true, // Ocultar en pantallas pequeñas
  },
];

const ListarMonitoreoSuelo = () => {
  return (
    <TablaDinamica
      titulo="Monitoreo de Suelo" 
      columnas={columnas} 
      data={dataGround}
      ruta = "/monitoreos/monitoreosuelo/nuevo" 
    />
  );
};

export default ListarMonitoreoSuelo;
