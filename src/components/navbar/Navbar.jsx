import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="bg-green-800">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Botón de menú para pantallas pequeñas */}
        <div className="lg:hidden">
          <button onClick={() => setToggleMenu(!toggleMenu)}>
            {toggleMenu ? <XMarkIcon className="h-6 text-white" /> : <Bars3Icon className="h-6 text-white" />}
          </button>
        </div>
        {/* Enlaces del menú */}
        <ul className="hidden lg:flex ml-auto space-x-8">
          <li>
            <a href="#" className="text-gray-300 hover:text-white">Acerca de UZACHI</a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">Preguntas frecuentes</a>
          </li>
        </ul>
      </div>
      {/* Menú desplegable para pantallas pequeñas */}
      <div
        className={`lg:hidden fixed z-40 w-full bg-green-800 overflow-hidden flex flex-col items-center transition-height duration-700 ${
          !toggleMenu ? "h-0" : "h-full"
        }`}
      >
        {toggleMenu && (
          <ul className="flex flex-col items-center space-y-8 mt-8">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">Acerca de UZACHI</a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">Preguntas frecuentes</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
