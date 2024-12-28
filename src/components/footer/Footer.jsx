import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-1 sm:p-2 md:p-3">
      <div className="container mx-auto text-center">
        <p className="text-xs sm:text-[0.7rem] md:text-sm lg:text-sm">
          &copy; {new Date().getFullYear()} UZACHI. Todos los derechos reservados.
        </p>
        <p className="mt-1 text-xs sm:text-[0.7rem] md:text-sm lg:text-sm">
          Desarrollado por <span className="font-bold">Uriel Aguilar Mauricio</span> para UZACHI.
        </p>
        <p className="mt-1 text-xs sm:text-[0.7rem] md:text-sm lg:text-sm">
          Contacto: <a href="mailto:contacto@uzachi.com" className="underline">contacto@uzachi.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
