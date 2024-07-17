import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-green-800">
      <div className="container mx-auto px-4 py-2">
        <ul className="flex justify-end space-x-8">
          <li>
            <a href="#" className="text-gray-300 hover:text-white">Acerca de UZACHI</a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">Preguntas frecuentes</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
