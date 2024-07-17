import React from 'react';
import { useNavigate } from 'react-router-dom';

const Monitoreos = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: '/images/agua-icono.png', title: 'Monitoreo de Agua', description: 'Agrega, edita y visualiza los monitoreos de agua', link: '/monitoreos/monitoreoagua/listar', bgColor: 'bg-blue-100' },
    { icon: '/images/suelo-icono.png', title: 'Monitoreo del Suelo', description: 'Agrega, edita y visualiza los monitoreos del suelo', link: '/monitoreos/suelo', bgColor: 'bg-green-100' },
    { icon: '/images/fauna-icono.png', title: 'Monitoreo de Fauna', description: 'Agrega, edita y visualiza los monitoreos de fauna', link: '/monitoreos/fauna', bgColor: 'bg-yellow-100' },
    { icon: '/images/reporte-icono.png', title: 'Generar Reportes', description: 'Genera reportes personalizados de los monitoreos', link: '/monitoreos/reportes', bgColor: 'bg-red-100' }
  ];

  return (
    <div className="-mt-40 mb-8 p-8">
      <h1 className="text-center text-4xl font-bold text-green-800 mb-8">Monitoreos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {menuItems.map((item, index) => (
          <div key={index} className={`${item.bgColor} p-6 rounded-lg shadow-md flex items-center space-x-4`}>
            <img src={item.icon} alt={item.title} className="w-24 h-24 rounded-full" />
            <div>
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p>{item.description}</p>
              <button 
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
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
