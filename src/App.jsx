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
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <Navbar />
        <div className="flex justify-center items-center min-h-screen bg-white">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
