import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Componentes estaticos
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';

// Principales
import Login from './components/login/Login';
import Menu from './components/menu/Menu';
import Monitoreos from './components/menu/Monitoreos';
import PreguntasFrecuentes from './components/preguntasFrecuentes/PreguntasFrecuentes';
import Footer from './components/footer/Footer';
import './index.css';

//Usuarios
import ListUsuario from './components/usuarios/Listar';

//Comunidades
import Comunidades from './components/comunidades/Comunidades';

//Monitoreo de agua
import Listar from './components/monitoreoAgua/Listar';
import Nuevo from './components/monitoreoAgua/Nuevo';
import Visualizar from './components/monitoreoAgua/Visualizar';
import Editar from './components/monitoreoAgua/Editar';
import Eliminar from './components/monitoreoAgua/Eliminar';

//Monitoreo de suelo
import Suelo from './components/monitoreoSuelo/Listar';

//Monitoreo de fauna
import Fauna from './components/monitoreoFauna/Listar';

//Reportes
import Reportes from './components/reportes/Reportes';



const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <Navbar />
        <div className="flex justify-center items-center min-h-screen bg-white">
          <Routes>
            {/*Principales*/}
            <Route path="/" element={<Login />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/monitoreos" element={<Monitoreos />} />
            <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />

            {/*Usuarios*/}
            <Route path="/usuarios/listar" element={<ListUsuario/>} />
            
            {/*Comunidades*/}
            <Route path="/comunidades" element={<Comunidades />} />
            
            {/*Monitoreo de agua*/}
            <Route path="/monitoreos/monitoreoagua/listar" element={<Listar />} />
            <Route path="/monitoreos/monitoreoagua/nuevo" element={<Nuevo />} />
            <Route path= "/monitoreos/monitoreoagua/visualizar" element={<Visualizar/>} />
            <Route path="/monitoreos/monitoreoagua/editar" element={<Editar/>}/>
            <Route path="/monitoreos/monitoreoagua/eliminar" element={<Eliminar/>}/>

            {/*Monitoreo de suelo*/}
            <Route path="/monitoreos/suelo" element={<Suelo />} />

            {/*Monitoreo de fauna*/}
            <Route path="/monitoreos/fauna" element={<Fauna />} />

            {/*Reportes*/}
            <Route path="/monitoreos/reportes" element={<Reportes />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
