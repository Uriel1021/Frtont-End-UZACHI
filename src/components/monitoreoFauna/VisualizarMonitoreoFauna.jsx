import React, { useState } from 'react';

const Visualizar = () => {
  const allData = [
    '/testMoniringImages/imagen1.jpg', '/testMoniringImages/imagen2.jpg', '/testMoniringImages/imagen3.jpg', '/testMoniringImages/imagen4.jpg', '/testMoniringImages/imagen5.jpg', '/testMoniringImages/imagen6.jpg', '/testMoniringImages/imagen7.jpg',
    '/testMoniringImages/imagen8.jpg', '/testMoniringImages/imagen9.jpeg', '/testMoniringImages/imagen10.jpeg', '/testMoniringImages/imagen11.jpeg', '/testMoniringImages/imagen12.jpeg', '/testMoniringImages/imagen13.jpeg', '/testMoniringImages/imagen14.jpeg',
    '/testMoniringImages/imagen15.jpeg', '/testMoniringImages/imagen16.jpeg', '/testMoniringImages/imagen17.jpeg', '/testMoniringImages/imagen18.jpeg', '/testMoniringImages/imagen19.jpeg', '/testMoniringImages/imagen20.jpeg', '/testMoniringImages/imagen21.jpeg',
    '/testMoniringImages/imagen22.jpeg', '/testMoniringImages/imagen23.jpeg', '/testMoniringImages/imagen24.jpeg', '/testMoniringImages/imagen25.jpeg', '/testMoniringImages/imagen26.jpeg', '/testMoniringImages/imagen27.jpeg', '/testMoniringImages/imagen28.jpg',
    '/testMoniringImages/imagen29.jpg', '/testMoniringImages/imagen30.jpg', '/testMoniringImages/imagen31.jpg', '/testMoniringImages/imagen32.jpg', '/testMoniringImages/imagen33.jpg', '/testMoniringImages/imagen34.jpg', '/testMoniringImages/imagen35.jpeg'
  ];

  const imagesPerPageSM = 25;
  const imagesPerPageMD = 30;
  const imagesPerPageLG = 35;
  const [currentPage, setCurrentPage] = useState(0);

  const imagesPerPage = window.innerWidth >= 1024 ? imagesPerPageLG : window.innerWidth >= 768 ? imagesPerPageMD : imagesPerPageSM;

  const paginatedData = allData.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage);

  const nextPage = () => {
    if ((currentPage + 1) * imagesPerPage < allData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-2">
      <h1 className="text-center text-4xl text-green-800 mb-4">Visualizar Monitoreo</h1>
      
      {/* Información de la comunidad */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:text-left sm:text-center mb-4 transform scale-85">
  <div className="bg-gray-100 p-4 rounded-lg shadow">
    <h3 className="text-lg font-semibold">Comunidad</h3>
    <p>SANTIAGO COMALTEPEC</p>
  </div>
  <div className="bg-gray-100 p-4 rounded-lg shadow">
    <h3 className="text-lg font-semibold">Paraje</h3>
    <p>LA ESPERANZA</p>
  </div>
  <div className="bg-gray-100 p-4 rounded-lg shadow">
    <h3 className="text-lg font-semibold">Fecha</h3>
    <p>12-12-2024 01:00:00</p>
  </div>
</div>


      {/* Filtros y botones */}
      <div className="flex flex-wrap justify-between items-center mb-4 space-y-2 sm:space-y-0">
        <select className="border p-1 md:p-2 rounded">
          <option>Filtrar por cámara</option>
        </select>
        <select className="border p-1 md:p-2 rounded">
          <option>Filtrar por especie</option>
        </select>
        <button className="bg-green-500 text-white px-2 py-1 md:px-4 md:py-2 rounded hover:bg-green-700">
          Filtrar
        </button>
      </div>

      {/* Tabla de imágenes */}
      <table className="w-full table-auto">
        <tbody>
          {/* Filas dinámicas de imágenes */}
          {paginatedData.map((img, index) => (
            index % (window.innerWidth >= 1024 ? 7 : window.innerWidth >= 768 ? 6 : 5) === 0 ? (
              <tr key={index}>
                {[...Array(window.innerWidth >= 1024 ? 7 : window.innerWidth >= 768 ? 6 : 5)].map((_, i) => (
                  paginatedData[index + i] && (
                    <td className="p-1 sm:p-2" key={index + i}>
                      <img 
                        src={paginatedData[index + i]} 
                        alt={`Imagen ${index + i + 1}`} 
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover" 
                      />
                    </td>
                  )
                ))}
              </tr>
            ) : null
          ))}
        </tbody>
      </table>

      {/* Navegación entre páginas */}
      <div className="flex justify-between mt-4">
        <button 
          onClick={prevPage} 
          className={`bg-gray-500 text-white px-4 py-2 rounded ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
          disabled={currentPage === 0}
        >
          Anterior
        </button>
        <button 
          onClick={nextPage} 
          className={`bg-green-500 text-white px-4 py-2 rounded ${(currentPage + 1) * imagesPerPage >= allData.length ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'}`}
          disabled={(currentPage + 1) * imagesPerPage >= allData.length}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Visualizar;
