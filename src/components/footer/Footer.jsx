import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} UZACHI. Todos los derechos reservados.
        </p>
        <p className="mt-2">
          Desarrollado por <span className="font-bold">Uriel Aguilar Mauricio</span> para UZACHI.
        </p>
        <p className="mt-2">
          Contacto: <a href="mailto:contacto@uzachi.com" className="underline">contacto@uzachi.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
