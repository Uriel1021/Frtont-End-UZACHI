import React from 'react';
import { useNavigate } from 'react-router-dom';

const Monitoreos = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: '/images/agua-icono.png', title: 'Monitoreo de Agua', description: 'Agrega, edita y visualiza los monitoreos de agua', link: '/monitoreos/monitoreoagua/listar', bgColor: 'bg-blue-100' },
    { icon: '/images/suelo-icono.png', title: 'Monitoreo del Suelo', description: 'Agrega, edita y visualiza los monitoreos del suelo', link: '/monitoreos/monitoreosuelo/listar', bgColor: 'bg-green-100' },
    { icon: '/images/fauna-icono.png', title: 'Monitoreo de Fauna', description: 'Agrega, edita y visualiza los monitoreos de fauna', link: '/monitoreos/fauna', bgColor: 'bg-yellow-100' },
    { icon: '/images/reporte-icono.png', title: 'Generar Reportes', description: 'Genera reportes personalizados de los monitoreos', link: '/monitoreos/reportes', bgColor: 'bg-red-100' }
  ];

  return (
    <div className="mt-8 mb-8 p-4 md:p-8">
      <h1 className="text-center text-2xl md:text-4xl font-bold text-green-800 mb-8">Monitoreos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
        {menuItems.map((item, index) => (
          <div key={index} className={`${item.bgColor} p-4 md:p-6 rounded-lg shadow-md flex flex-col items-center md:items-start`}>
            <img src={item.icon} alt={item.title} className="w-12 h-12 md:w-24 md:h-24 rounded-full mb-4 md:mb-0" />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-lg md:text-xl font-bold">{item.title}</h2>
              <p className="hidden md:block">{item.description}</p>
            </div>
            <div className="w-full mt-2 flex justify-end">
              <button 
                className="bg-blue-500 text-white py-1 px-3 md:py-2 md:px-4 rounded hover:bg-blue-600 transition"
                onClick={() => navigate(item.link)}
              >
                Administrar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Monitoreos;
