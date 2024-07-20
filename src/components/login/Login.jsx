import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Redirigir
    navigate('/menu');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-gray-100 shadow-lg rounded-md text-center relative sm:mt-20" style={{ top: '-90px' }}>
      <img src="/images/user-logo.png" alt="Logotipo" className="mx-auto mb-4 w-24 h-24 sm:w-32 sm:h-32" />
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-green-800">Iniciar sesión</h2>
      <div className="mb-4">
        <input type="text" placeholder="Usuario" className="w-full px-3 py-2 border border-green-800 rounded-md mb-4 transform scale-100 sm:scale-105" />
      </div>
      <div className="mb-4">
        <input type="password" placeholder="Contraseña" className="w-full px-3 py-2 border border-green-800 rounded-md mb-2 transform scale-100 sm:scale-105" />
        <a href="#" className="text-sm text-green-800 hover:underline block mt-2 text-right">Restablecer contraseña</a>
      </div>
      <button onClick={handleLogin} className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-700 transform scale-100 sm:scale-105">Acceder</button>
    </div>
  );
};

export default Login;

