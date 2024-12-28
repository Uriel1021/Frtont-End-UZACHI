import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AppRoutes from './routes';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        {/* Condicional de Header y Navbar para pantallas grandes y pequeñas */}
        <Header />
        
        {/* Navbar se muestra en pantallas grandes y se oculta en pequeñas */}
        <div className="sm:block md:block lg:block">
          <Navbar />
        </div>

        {/* Contenido principal que ocupa el resto de la pantalla */}
        <div className="flex-1 flex justify-center items-center bg-white px-4 py-6">
          <AppRoutes />
        </div>

        {/* Footer siempre visible */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
