import React from 'react';

const Header = () => {
  return (
    <header className="bg-red shadow-md">
      <div className="container mx-auto flex justify-between items-center p-6">
        {/* Empresa Logo e Información */}
        <div className="flex items-center space-x-4">
          <img src="/images/unsij-logo.png" alt="Icono 1" className="h-16" />
          <img src="/images/uzachi-logo.png" alt="Icono 2" className="h-16" />
          <span className="text-4xl font-bold text-green-800">UZACHI</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
