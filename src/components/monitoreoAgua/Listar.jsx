import React, { useState } from 'react';
import { FaEye, FaEdit, FaTrash, FaArrowLeft, FaArrowRight, FaPlusCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Listar = () => {
  const monitoreos = [
    { id: 1, comunidad: 'Capulalpam de Mendez', paraje: 'La esperanza', uso: 'Domestico', fecha: '12-12-2023' },
    { id: 2, comunidad: 'Santiago Comaltepec', paraje: 'La esperanza', uso: 'Domestico', fecha: '12-12-2023' },
    { id: 3, comunidad: 'Santiago Xiacui', paraje: 'La esperanza', uso: 'Domestico', fecha: '12-12-2023' },
    { id: 4, comunidad: 'Capulalpam de Mendez', paraje: 'La esperanza', uso: 'Domestico', fecha: '12-12-2023' },
    { id: 5, comunidad: 'Santiago Comaltepec', paraje: 'La esperanza', uso: 'Domestico', fecha: '12-12-2023' },
    { id: 6, comunidad: 'Capulalpam de Mendez', paraje: 'La esperanza', uso: 'Domestico', fecha: '12-12-2023' },
    { id: 7, comunidad: 'Santiago Xiacui', paraje: 'La esperanza', uso: 'Domestico', fecha: '12-12-2023' },
    { id: 8, comunidad: 'Santiago Xiacui', paraje: 'La esperanza', uso: 'Domestico', fecha: '12-12-2023' },
    { id: 9, comunidad: 'Santiago Comaltepec', paraje: 'La esperanza', uso: 'Domestico', fecha: '12-12-2023' },
    { id: 10, comunidad: 'Santiago Comaltepec', paraje: 'La esperanza', uso: 'Domestico', fecha: '12-12-2023' },
    { id: 11, comunidad: 'Santiago Comaltepec', paraje: 'La esperanza', uso: 'Domestico', fecha: '12-12-2023' },
    { id: 12, comunidad: 'Capulalpam de Mendez', paraje: 'La esperanza', uso: 'Domestico', fecha: '12-12-2023' },
    { id: 13, comunidad: 'Capulalpam de Mendez', paraje: 'La esperanza', uso: 'Domestico', fecha: '12-12-2023' },
    { id: 14, comunidad: 'Santiago Xiacui', paraje: 'La esperanza', uso: 'Domestico', fecha: '12-12-2023' },
    { id: 15, comunidad: 'Capulalpam de Mendez', paraje: 'La esperanza', uso: 'Domestico', fecha: '12-12-2023' },
    { id: 16, comunidad: 'Capulalpam de Mendez', paraje: 'La esperanza', uso: 'Domestico', fecha: '12-12-2023' },
    { id: 17, comunidad: 'Santiago comaltepec', paraje: 'La esperanza', uso: 'Domestico', fecha: '12-12-2023' },
    { id: 18, comunidad: 'Capulalpam de Mendez', paraje: 'La esperanza', uso: 'Domestico', fecha: '12-12-2023' }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 9;
  const navigate = useNavigate();

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = monitoreos.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(monitoreos.length / recordsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNuevoMonitoreo = () => {
    navigate('/monitoreos/monitoreoagua/nuevo');
  };

  const handleVisualizarMonitoreo = (idMonitoreo) => {
    navigate('/monitoreos/monitoreoagua/visualizar/');
  };

  const handleEditarMonitoreo = (idMonitoreo) => {
    navigate('/monitoreos/monitoreoagua/editar/');
  };

  const handleEliminarMonitoreo = (idMonitoreo) => {
    navigate('/monitoreos/monitoreoagua/eliminar/');
  };

  return (
    <div className="p-4 sm:p-8 w-full lg:w-3/4 mx-auto">
      <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-green-800 mb-8">
        Monitoreo de Agua
      </h1>
      <div className="flex justify-between items-center mb-4">
        <button onClick={handleNuevoMonitoreo} className="border border-blue-800 text-blue-800 py-2 px-4 rounded flex items-center space-x-2">
          <FaPlusCircle className="w-6 h-6" />
          <span className="hidden sm:inline">Nuevo monitoreo</span>
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-center text-gray-700 bg-gray-200">
          <thead className="text-xs text-green-100 uppercase bg-green-800">
            <tr>
              <th scope="col" className="px-2 sm:px-6 py-4">Comunidad</th>
              <th scope="col" className="px-2 sm:px-6 py-4">Paraje</th>
              <th scope="col" className="px-2 sm:px-6 py-4">Uso</th>
              <th scope="col" className="px-2 sm:px-6 py-4 hidden md:table-cell">Fecha</th>
              <th scope="col" className="px-2 sm:px-6 py-4">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((monitoreo) => (
              <tr key={monitoreo.id} className="bg-white border-b hover:bg-green-50">
                <td className="px-2 sm:px-6 py-3">{monitoreo.comunidad}</td>
                <td className="px-2 sm:px-6 py-3">{monitoreo.paraje}</td>
                <td className="px-2 sm:px-6 py-3">{monitoreo.uso}</td>
                <td className="px-2 sm:px-6 py-3 hidden md:table-cell">{monitoreo.fecha}</td>
                <td className="px-2 sm:px-6 py-3 flex justify-center items-center space-x-1 sm:space-x-2">
                  <button onClick={() => handleVisualizarMonitoreo(monitoreo.id)} className="border border-blue-500 text-blue-500 hover:border-blue-700 hover:text-blue-900 flex items-center px-1 sm:px-2 py-1 rounded">
                    <FaEye className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                    <span className="hidden sm:inline">Visualizar</span>
                  </button>
                  <button onClick={() => handleEditarMonitoreo(monitoreo.id)} className="border border-gray-500 text-gray-500 hover:border-yellow-700 hover:text-yellow-700 flex items-center px-1 sm:px-2 py-1 rounded">
                    <FaEdit className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                    <span className="hidden sm:inline">Editar</span>
                  </button>
                  <button onClick={() => handleEliminarMonitoreo(monitoreo.id)} className="border border-red-500 text-red-500 hover:border-red-700 hover:text-red-700 flex items-center px-1 sm:px-2 py-1 rounded">
                    <FaTrash className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                    <span className="hidden sm:inline">Eliminar</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button onClick={prevPage} disabled={currentPage === 1} className="bg-gray-400 text-white py-2 px-4 rounded flex items-center space-x-2">
          <FaArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Anterior</span>
        </button>
        <div>
          Mostrando {indexOfFirstRecord + 1}-{Math.min(indexOfLastRecord, monitoreos.length)} de {monitoreos.length}
        </div>
        <button onClick={nextPage} disabled={currentPage === totalPages} className="bg-gray-400 text-white py-2 px-4 rounded flex items-center space-x-2">
          <span className="hidden sm:inline">Siguiente</span>
          <FaArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Listar;
