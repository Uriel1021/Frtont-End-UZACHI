import React from 'react';

const Header = () => {
  return (
    <header className="bg-red shadow-md">
      <div className="container mx-auto w-[90%] flex justify-between items-center py-2 sm:py-6 md:py-6 lg:py-2">
        {/* Empresa Logo e Información */}
        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4">
          <img 
            src="/images/unsij-logo.png" 
            alt="Icono 1" 
            className="h-5 sm:h-7 md:h-10 lg:h-12" 
          />
          <img 
            src="/images/uzachi-logo.png" 
            alt="Icono 2" 
            className="h-5 sm:h-7 md:h-10 lg:h-12" 
          />
          <span 
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-green-800"
          >
            UZACHI
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
