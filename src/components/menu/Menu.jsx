import React, { useState, useEffect } from 'react';
import { FaTint, FaUserFriends, FaHome, FaPlus, FaEdit, FaWater, FaLeaf, FaPaw } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';

const Menu = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Valor inicial para pantallas grandes y medianas
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false); // Estado del modal
  const [formData, setFormData] = useState({ date: '', location: '', type: '' }); // Datos del formulario

  const menuItems = [
    { icon: <FaTint className="text-white" />, title: 'Monitoreos', description: 'Gestión y control del agua', link: '/monitoreos', bgColor: 'bg-blue-500' },
    { icon: <FaUserFriends className="text-white" />, title: 'Usuarios', description: 'Administración de usuarios', link: '/usuarios/listar', bgColor: 'bg-green-500' },
    { icon: <FaHome className="text-white" />, title: 'Comunidades', description: 'Información de comunidades', link: '/comunidades/listar', bgColor: 'bg-orange-500' }
  ];

  const reminderItems = [
    { icon: <FaWater className="text-blue-500" />, type: 'Monitoreo de Agua', community: 'Santiago Comaltepec', date: '12 de febrero del 2025', action: <FaEdit /> },
    { icon: <FaLeaf className="text-brown-500" />, type: 'Monitoreo de Suelo', community: 'Santiago Xiacui', date: '13 de febrero del 2025', action: <FaEdit /> },
    { icon: <FaPaw className="text-orange-500" />, type: 'Monitoreo de Fauna', community: 'Capulalpam de Mendez', date: '13 de febrero del 2025', action: <FaEdit /> },
    { icon: <FaWater className="text-blue-500" />, type: 'Monitoreo de Agua', community: 'San Juan de los Morros', date: '14 de febrero del 2025', action: <FaEdit /> },
    { icon: <FaLeaf className="text-brown-500" />, type: 'Monitoreo de Suelo', community: 'Villa de Etla', date: '15 de febrero del 2025', action: <FaEdit /> },
    { icon: <FaPaw className="text-orange-500" />, type: 'Monitoreo de Fauna', community: 'San Bartolo Coyotepec', date: '16 de febrero del 2025', action: <FaEdit /> },
    { icon: <FaWater className="text-blue-500" />, type: 'Monitoreo de Agua', community: 'Tlacolula de Matamoros', date: '17 de febrero del 2025', action: <FaEdit /> },
    { icon: <FaLeaf className="text-brown-500" />, type: 'Monitoreo de Suelo', community: 'San Sebastián Tutla', date: '18 de febrero del 2025', action: <FaEdit /> },
    { icon: <FaPaw className="text-orange-500" />, type: 'Monitoreo de Fauna', community: 'Teotitlán del Valle', date: '19 de febrero del 2025', action: <FaEdit /> },
    { icon: <FaWater className="text-blue-500" />, type: 'Monitoreo de Agua', community: 'San Pedro Ixtlahuaca', date: '20 de febrero del 2025', action: <FaEdit /> },
    { icon: <FaLeaf className="text-brown-500" />, type: 'Monitoreo de Suelo', community: 'Santa Cruz Xoxocotlán', date: '21 de febrero del 2025', action: <FaEdit /> },
    { icon: <FaPaw className="text-orange-500" />, type: 'Monitoreo de Fauna', community: 'Oaxaca de Juárez', date: '22 de febrero del 2025', action: <FaEdit /> },
    { icon: <FaWater className="text-blue-500" />, type: 'Monitoreo de Agua', community: 'Huautla de Jiménez', date: '23 de febrero del 2025', action: <FaEdit /> },
    { icon: <FaLeaf className="text-brown-500" />, type: 'Monitoreo de Suelo', community: 'Chacahua-Ocotlán', date: '24 de febrero del 2025', action: <FaEdit /> },
    { icon: <FaPaw className="text-orange-500" />, type: 'Monitoreo de Fauna', community: 'San Miguel del Puerto', date: '25 de febrero del 2025', action: <FaEdit /> },
    { icon: <FaWater className="text-blue-500" />, type: 'Monitoreo de Agua', community: 'San Andrés Huayápam', date: '26 de febrero del 2025', action: <FaEdit /> },
    { icon: <FaLeaf className="text-brown-500" />, type: 'Monitoreo de Suelo', community: 'San Agustín Etla', date: '27 de febrero del 2025', action: <FaEdit /> },
    { icon: <FaPaw className="text-orange-500" />, type: 'Monitoreo de Fauna', community: 'Santa María del Tule', date: '28 de febrero del 2025', action: <FaEdit /> },
    { icon: <FaWater className="text-blue-500" />, type: 'Monitoreo de Agua', community: 'Santa Rosa Panzacola', date: '1 de marzo del 2025', action: <FaEdit /> },
    { icon: <FaLeaf className="text-brown-500" />, type: 'Monitoreo de Suelo', community: 'San Lorenzo Cacaotepec', date: '2 de marzo del 2025', action: <FaEdit /> },
    { icon: <FaPaw className="text-orange-500" />, type: 'Monitoreo de Fauna', community: 'San Juan Guichicovi', date: '3 de marzo del 2025', action: <FaEdit /> },
  ];

// Función para actualizar la cantidad de items por página según el tamaño de la pantalla
const updateItemsPerPage = () => {
  const width = window.innerWidth;

  if (width < 640) {
    // Pantallas pequeñas (sm)
    setItemsPerPage(4);
  } else if (width >= 640 && width < 768) {
    // Pantallas medianas (md)
    setItemsPerPage(6);
  } else if (width >= 768 && width < 1024) {
    // Pantallas grandes (lg) en orientación vertical o tablets grandes
    setItemsPerPage(8);
  } else {
    // Pantallas extra grandes (xl)
    setItemsPerPage(10);
  }
};


  useEffect(() => {
    updateItemsPerPage(); // Llamada inicial para ajustar según el tamaño de pantalla
    window.addEventListener('resize', updateItemsPerPage); // Escucha cambios en el tamaño de pantalla

    return () => window.removeEventListener('resize', updateItemsPerPage); // Limpiar el evento al desmontar el componente
  }, []);

  const totalPages = Math.ceil(reminderItems.length / itemsPerPage);

  const currentItems = reminderItems.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  };

  const onDateChange = (date) => {
    setSelectedDate(date);
    alert(`Has seleccionado: ${formatDate(date)}`);
  };

  // Función para abrir y cerrar el modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Manejar el cambio de los valores del formulario
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Monitoreo programado:', formData);
    toggleModal(); // Cerrar el modal al enviar
  };

  return (
    <div className="h-screen flex flex-col w-full md:w-[80%] mb-8"> {/* Añadido mb-8 para dejar espacio */}
      {/* Nuevo div con el texto de Bienvenidos alineado a la izquierda */}
      <div className="bg-white text-black text-left px-2">
        <h1 className="text-3xl font-bold">Bienvenido Uriel</h1>
        <p className="text-sm">¡Explora el menú para comenzar!</p>
      </div>

      {/* Parte superior: Menú con icono, título y descripción */}
      <div className="flex flex-wrap justify-around bg-white p-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`flex items-center md:flex-col justify-center w-full sm:w-[30%] md:w-[30%] lg:w-[30%] lg:h-[75px] md:h-[90px] sm:h-[220px] rounded-lg ${item.bgColor} text-white hover:bg-opacity-80 transition duration-300 mb-2 mx-2`} // Ajuste de md:w-[30%] para pantallas medianas y lg:w-[32%] para pantallas grandes
            onClick={() => navigate(item.link)}
          >
            {item.icon}
            <span className="ml-2 md:ml-0 md:mt-1 text-md md:text-lg font-bold">{item.title}</span>
            <span className="hidden md:block text-sm">{item.description}</span>
          </button>
        ))}
      </div>

      {/* Parte inferior: Recordatorio y Calendario en una fila */}
      <div className="flex flex-col lg:flex-row flex-grow mb-10"> {/* Añadido mb-8 para separar el contenido del footer */}
        {/* Sección de recordatorio */}
        <div className="w-full p-2 bg-white">
          <h2 className="text-xl font-bold mb-2">Monitoreos Pendientes</h2>

          {/* Nuevo botón para Programar monitoreo */}
          <div className="mb-2">
            <button 
              className="border border-blue-500 text-blue-500 py-1 px-2 rounded-lg hover:bg-blue-100 transition duration-300 flex items-center"
              onClick={toggleModal} // Abre el modal
            >
              <FaPlus className="mr-2" /> Programar monitoreo
            </button>
          </div>

          {/* Lista de Monitoreos Paginada */}
          <ul className="space-y-1">
            {currentItems.map((item, index) => (
              <li key={index} className="flex justify-between p-1 bg-gray-100 rounded-lg">
                <div className="flex items-center">
                  {item.icon}
                  <span className="ml-4">{item.type}</span>
                </div>
                <div>
                  <span>{item.community}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* Botones de paginación */}
          <div className="flex justify-between mt-2">
            <button
              className={`py-2 px-4 rounded-lg border ${currentPage === 0 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
              onClick={goToPreviousPage}
              disabled={currentPage === 0}
            >
              Anterior
            </button>
            <button
              className={`py-2 px-4 rounded-lg border ${currentPage === totalPages - 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
              onClick={goToNextPage}
              disabled={currentPage === totalPages - 1}
            >
              Siguiente
            </button>
          </div>
        </div>

        {/* Sección del calendario */}
        <div className="hidden sm:block w-full p-1 bg-white overflow-hidden sm:pb-[50px]"> {/* Añadido padding-bottom en pantallas pequeñas */}
          <h2 className="text-xl font-bold mb-2">Calendario</h2>
          <Calendar onChange={onDateChange} value={selectedDate} className="w-full" />
        </div>
      </div>

      {/* Modal para programar monitoreo */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-lg font-bold mb-4">Programar nuevo monitoreo</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Fecha:</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleFormChange}
                  className="border border-gray-300 p-2 w-full rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Lugar:</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleFormChange}
                  placeholder="Escribe el lugar del monitoreo"
                  className="border border-gray-300 p-2 w-full rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Tipo de Monitoreo:</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleFormChange}
                  className="border border-gray-300 p-2 w-full rounded-lg"
                  required
                >
                  <option value="">Selecciona el tipo de monitoreo</option>
                  <option value="agua">Monitoreo de Agua</option>
                  <option value="suelo">Monitoreo de Suelo</option>
                  <option value="fauna">Monitoreo de Fauna</option>
                </select>
              </div>
              <div className="flex justify-end space-x-2">
                <button type="button" className="py-2 px-4 bg-gray-300 rounded-lg hover:bg-gray-400" onClick={toggleModal}>
                  Cancelar
                </button>
                <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Programar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
