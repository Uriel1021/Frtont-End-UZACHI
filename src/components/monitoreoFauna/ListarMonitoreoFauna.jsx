import TablaDinamica from '../TablasDinamicas/TablaDinamicaMonitoreoFauna/TablaDinamicaMonitoreoFauna';
import { data as dataGround } from './DatosMonitoreoFauna' 

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

const ListarMonitoreoFauna = () => {
  return (
    <TablaDinamica
      titulo="Monitoreo de Fauna" 
      columnas={columnas} 
      data={dataGround}
      rutaNuevo = "/monitoreos/monitoreofauna/nuevo"
      rutaVisualizar = "/monitoreos/monitoreofauna/visualizar"
      rutaAgregarImg = "/monitoreos/monitoreofauna/agregarimagenes"

    />
  );
};

export default ListarMonitoreoFauna;
