import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Redirigir
    navigate('/menu');
  };

  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto mt-10 p-6 sm:p-8 md:p-10 lg:p-12 bg-gray-100 shadow-lg rounded-md text-center relative sm:mt-20 lg:mt-24">
      <img src="/images/user-logo.png" alt="Logotipo" className="mx-auto mb-4 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36" />
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-green-800">Iniciar sesión</h2>
      <div className="mb-4">
        <input type="text" placeholder="Usuario" className="w-full px-3 py-2 border border-green-800 rounded-md mb-4 transform scale-100 sm:scale-105 md:scale-110" />
      </div>
      <div className="mb-4">
        <input type="password" placeholder="Contraseña" className="w-full px-3 py-2 border border-green-800 rounded-md mb-2 transform scale-100 sm:scale-105 md:scale-110" />
        <a href="#" className="text-sm text-green-800 hover:underline block mt-2 text-right">Restablecer contraseña</a>
      </div>
      <button onClick={handleLogin} className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-700 transform scale-100 sm:scale-105 md:scale-110">Acceder</button>
    </div>
  );
};

export default Login;
