import React, { useState } from 'react';
import { FaTint, FaUserFriends, FaHome, FaQuestionCircle, FaEdit, FaBell, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Menu = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  const menuItems = [
    { icon: <FaTint className="text-blue-500" />, title: 'Monitoreos', description: 'Agrega, edita y visualiza los monitoreos de agua, suelo y fauna', link: '/monitoreos', bgColor: 'bg-blue-100' },
    { icon: <FaUserFriends className="text-green-500" />, title: 'Usuarios', description: 'Agrega, edita y visualiza los usuarios', link: '/usuarios/listar', bgColor: 'bg-green-100' },
    { icon: <FaHome className="text-orange-500" />, title: 'Comunidades', description: 'Agrega, edita y visualiza las comunidades', link: '/comunidades/listar', bgColor: 'bg-orange-100' },
    { icon: <FaQuestionCircle className="text-gray-500" />, title: 'Preguntas frecuentes', description: 'Respuesta a tus preguntas', link: '/preguntas-frecuentes', bgColor: 'bg-gray-100' }
  ];

  const reminderItems = [
    { icon: <FaTint className="text-blue-500" />, type: 'Monitoreo de Agua', community: 'Santiago Comaltepec', date: '12 de febrero del 2025', action: <FaEdit />, bgColor: 'bg-blue-100' },
    { icon: <FaUserFriends className="text-green-500" />, type: 'Monitoreo de Suelo', community: 'Santiago Xiacui', date: '13 de febrero del 2025', action: <FaEdit />, bgColor: 'bg-green-100' },
    { icon: <FaHome className="text-orange-500" />, type: 'Monitoreo de Fauna', community: 'Capulalpam de Mendez', date: '14 de febrero del 2025', action: <FaEdit />, bgColor: 'bg-orange-100' },
    { icon: <FaTint className="text-blue-500" />, type: 'Monitoreo de Agua', community: 'Santiago Comaltepec', date: '12 de febrero del 2025', action: <FaEdit />, bgColor: 'bg-blue-100' },
    { icon: <FaUserFriends className="text-green-500" />, type: 'Monitoreo de Suelo', community: 'Santiago Xiacui', date: '13 de febrero del 2025', action: <FaEdit />, bgColor: 'bg-green-100' },
    { icon: <FaHome className="text-orange-500" />, type: 'Monitoreo de Fauna', community: 'Capulalpam de Mendez', date: '14 de febrero del 2025', action: <FaEdit />, bgColor: 'bg-orange-100' },
    { icon: <FaTint className="text-blue-500" />, type: 'Monitoreo de Agua', community: 'Santiago Comaltepec', date: '12 de febrero del 2025', action: <FaEdit />, bgColor: 'bg-blue-100' },
    { icon: <FaUserFriends className="text-green-500" />, type: 'Monitoreo de Suelo', community: 'Santiago Xiacui', date: '13 de febrero del 2025', action: <FaEdit />, bgColor: 'bg-green-100' },
    { icon: <FaHome className="text-orange-500" />, type: 'Monitoreo de Fauna', community: 'Capulalpam de Mendez', date: '14 de febrero del 2025', action: <FaEdit />, bgColor: 'bg-orange-100' },
    { icon: <FaTint className="text-blue-500" />, type: 'Monitoreo de Agua', community: 'Santiago Comaltepec', date: '12 de febrero del 2025', action: <FaEdit />, bgColor: 'bg-blue-100' },
    { icon: <FaUserFriends className="text-green-500" />, type: 'Monitoreo de Suelo', community: 'Santiago Xiacui', date: '13 de febrero del 2025', action: <FaEdit />, bgColor: 'bg-green-100' },
    { icon: <FaHome className="text-orange-500" />, type: 'Monitoreo de Fauna', community: 'Capulalpam de Mendez', date: '14 de febrero del 2025', action: <FaEdit />, bgColor: 'bg-orange-100' },
    { icon: <FaTint className="text-blue-500" />, type: 'Monitoreo de Agua', community: 'Santiago Comaltepec', date: '12 de febrero del 2025', action: <FaEdit />, bgColor: 'bg-blue-100' },
    { icon: <FaUserFriends className="text-green-500" />, type: 'Monitoreo de Suelo', community: 'Santiago Xiacui', date: '13 de febrero del 2025', action: <FaEdit />, bgColor: 'bg-green-100' },
    { icon: <FaHome className="text-orange-500" />, type: 'Monitoreo de Fauna', community: 'Capulalpam de Mendez', date: '14 de febrero del 2025', action: <FaEdit />, bgColor: 'bg-orange-100' },
    { icon: <FaTint className="text-blue-500" />, type: 'Monitoreo de Agua', community: 'Santiago Comaltepec', date: '12 de febrero del 2025', action: <FaEdit />, bgColor: 'bg-blue-100' },
    { icon: <FaUserFriends className="text-green-500" />, type: 'Monitoreo de Suelo', community: 'Santiago Xiacui', date: '13 de febrero del 2025', action: <FaEdit />, bgColor: 'bg-green-100' },
    { icon: <FaHome className="text-orange-500" />, type: 'Monitoreo de Fauna', community: 'Capulalpam de Mendez', date: '14 de febrero del 2025', action: <FaEdit />, bgColor: 'bg-orange-100' },
    // Agregar más elementos según sea necesario
  ];

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  };

  const currentDate = formatDate(new Date());

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = reminderItems.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (indexOfLastItem < reminderItems.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-11/12 mx-auto">
      {/* Menú lateral como tabla */}
      <div className="w-full md:w-1/4 bg-white-100 p-8 mb-4 md:mb-0 md:-ml-12">
        <div className="space-y-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center p-4 rounded-2xl shadow-md cursor-pointer transform transition hover:scale-105 ${item.bgColor}`}
              onClick={() => navigate(item.link)}
            >
              <div className="w-12 h-12 mr-4 flex items-center justify-center rounded-full">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de Recordatorio */}
      <div className="w-full md:w-3/4 p-4 flex flex-col">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Recordatorio</h2>
          <div className="flex items-center justify-start">
            <FaBell className="mr-2 text-blue-500" />
            <span>HOY, {currentDate}</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row flex-1">
          

          {/* Tabla */}
          <div className="w-full md:w-4/5 ml-0 md:ml-4 bg-gray-100 p-4 h-full rounded shadow flex flex-col justify-between">
            <table className="w-full flex-1 overflow-y-auto">
              <tbody>
                {currentItems.map((item, index) => (
                  <tr key={index} className={`border-b ${item.bgColor}`}>
                    <td className="p-2 flex flex-col md:flex-row items-start md:items-center justify-between rounded-2xl border-2">
                      <div className="flex items-center">
                        <div className="mr-2">{item.icon}</div>
                        <div>
                          <p>{item.type}</p>
                          <p className="text-gray-600">{item.community}</p>
                        </div>
                      </div>
                      <span>{item.date}</span>
                      <button className={`mt-2 md:mt-0 ml-0 md:ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition`}>
                        {item.action}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className={`p-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <FaArrowLeft className="mr-2" /> Anterior
              </button>
              <button
                onClick={handleNextPage}
                disabled={indexOfLastItem >= reminderItems.length}
                className={`p-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition ${indexOfLastItem >= reminderItems.length ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Siguiente <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
          {/* Calendario */}
          <div className="w-full md:w-1/5 mb-4 md:mb-0" style={{ marginLeft: '40px' }}>
            <div className="mt-4 mb-10">
              <button className="block w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Agregar Recordatorio</button>
            </div>
            <div style={{ height: '50%' }}>
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
