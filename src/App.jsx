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
import ListarComunidades from './components/comunidades/ListarComunidades';

//Monitoreo de agua
import ListarMonitoreoAgua from './components/monitoreoAgua/ListarMonitoreoAgua';
import NuevoMonitoreoAgua from './components/monitoreoAgua/NuevoMonitoreoAgua';
import VisualizarMonitoreoAgua from './components/monitoreoAgua/VisualizarMonitoreoAgua';
import EditarMonitoreoAgua from './components/monitoreoAgua/EditarMonitoreoAgua';
import EliminarMonitoreoAgua from './components/monitoreoAgua/EliminarMonitoreoAgua';
//Monitoreo de suelo
import ListarMonitoreoSuelo from './components/monitoreoSuelo/ListarMonitoreoSuelo'
import NuevoMonitoreoSuelo from './components/monitoreoSuelo/NuevoMonitoreoSuelo';
//import VisualizarMonitoreoSuelo from './components/monitoreoSuelo/VisualizarMonitoreoSuelo'
//import EditarMonitoreoSuelo from './components/monitoreoSuelo/EditarMonitoreoSuelo'
//import EliminarMonitoreoSuelo from './components/monitoreoSuelo/EliminarMonitoreoSuelo'
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
            <Route path="/comunidades/listar" element={<ListarComunidades />} />

            {/*Monitoreo de agua*/}
            <Route path="/monitoreos/monitoreoagua/listar" element={<ListarMonitoreoAgua />} />
            <Route path="/monitoreos/monitoreoagua/nuevo" element={<NuevoMonitoreoAgua />} />
            <Route path= "/monitoreos/monitoreoagua/visualizar" element={<VisualizarMonitoreoAgua/>} />
            <Route path="/monitoreos/monitoreoagua/editar" element={<EditarMonitoreoAgua/>}/>
            <Route path="/monitoreos/monitoreoagua/eliminar" element={<EliminarMonitoreoAgua/>}/>

            {/*Monitoreo de suelo*/}
            <Route path='/monitoreos/monitoreosuelo/listar' element={<ListarMonitoreoSuelo/>} />
            <Route path='/monitoreos/monitoreosuelo/nuevo' element={<NuevoMonitoreoSuelo/>} />


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
