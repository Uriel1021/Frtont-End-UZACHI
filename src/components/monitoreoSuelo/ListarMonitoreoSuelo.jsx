import TablaDinamicaMonitoreo from '../TablasDinamicas/TablaDinamicaMonitoreos/TablaDinamicaMonitoreo';
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
    <TablaDinamicaMonitoreo
      titulo="Monitoreo de Suelo" 
      columnas={columnas} 
      data={dataGround}
      ruta = "/monitoreos/monitoreosuelo/nuevo" 
      rutaLaboratorio= "/monitoreos/monitoreosuelo/nuevolaboratorio"
    />
  );
};

export default ListarMonitoreoSuelo;
