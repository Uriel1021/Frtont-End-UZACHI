import React from 'react';
import { useNavigate } from 'react-router-dom';

const Monitoreos = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: '/images/agua-icono.png', title: 'Monitoreo de Agua', description: 'Agrega, edita y visualiza los monitoreos de agua', link: '/monitoreos/monitoreoagua/listar', bgColor: 'bg-blue-100' },
    { icon: '/images/suelo-icono.png', title: 'Monitoreo del Suelo', description: 'Agrega, edita y visualiza los monitoreos del suelo', link: '/monitoreos/monitoreosuelo/listar', bgColor: 'bg-green-100' },
    { icon: '/images/fauna-icono.png', title: 'Monitoreo de Fauna', description: 'Agrega, edita y visualiza los monitoreos de fauna', link: '/monitoreos/monitoreofauna/Listar', bgColor: 'bg-yellow-100' },
    { icon: '/images/reporte-icono.png', title: 'Generar Reportes', description: 'Genera reportes personalizados de los monitoreos', link: '/monitoreos/reportes', bgColor: 'bg-red-100' }
  ];

  return (
    <div
      className="flex justify-center items-center"
      style={{
        transform: 'scale(0.85)',
        transformOrigin: 'center',
        marginTop: '-5%',
      }}
    >
      <div className="p-4 md:p-8">
        <h1 className="text-center text-xl md:text-3xl font-bold text-green-800 mb-8 mt-4">Monitoreos</h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 mt-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} p-2 md:p-4 rounded-lg shadow-md flex flex-col items-center md:items-start cursor-pointer transform transition-transform hover:scale-105 hover:shadow-lg duration-300`}
              onClick={() => navigate(item.link)}
            >
              <div className="flex items-center space-x-2">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full"
                />
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-sm md:text-lg lg:text-xl font-bold">{item.title}</h2>
                </div>
              </div>
              <p className="hidden lg:block mt-1 text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Monitoreos;
