import React from 'react';
import { Routes, Route } from 'react-router-dom';

//Principales
import Login from './components/login/Login';
import Menu from './components/menu/Menu';
import Monitoreos from './components/menu/Monitoreos';
import PreguntasFrecuentes from './components/preguntasFrecuentes/PreguntasFrecuentes';
//Usuarios
import ListUsuario from './components/usuarios/Listar';
//Comunidades
import ListarComunidades from './components/comunidades/ListarComunidades';
//Monitoreo de agua
import ListarMonitoreoAgua from './components/monitoreoAgua/ListarMonitoreoAgua';
import NuevoMonitoreoAgua from './components/monitoreoAgua/NuevoMonitoreoAgua';
import VisualizarMonitoreoAgua from './components/monitoreoAgua/VisualizarMonitoreoAgua';
import EditarMonitoreoAgua from './components/monitoreoAgua/EditarMonitoreoAgua';
import LaboratorioMonitoreoAgua from './components/monitoreoAgua/LaboratorioMonitoreoAgua';
import NuevoLaboratorioMonitoreoAgua from './components/monitoreoAgua/NuevoLaboratorioMonitoreoAgua';
//Monitoreo de suelo
import ListarMonitoreoSuelo from './components/monitoreoSuelo/ListarMonitoreoSuelo';
import NuevoMonitoreoSuelo from './components/monitoreoSuelo/NuevoMonitoreoSuelo';
import LaboratorioMonitoreoSuelo from './components/monitoreoSuelo/LaboratorioMonitoreoSuelo';
//Monitoreo de fauna
import Fauna from './components/monitoreoFauna/Listar';
//Reportes
import Reportes from './components/reportes/Reportes';
import NuevoLaboratorioMonitoreoSuelo from './components/monitoreoSuelo/NuevoLaboratorioMonitoreoSuelo';
import NuevoUsuario from './components/usuarios/NuevoUsuario';
import NuevaComunidad from './components/comunidades/NuevaComunidad';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Principales */}
      <Route path="/" element={<Login />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/monitoreos" element={<Monitoreos />} />
      <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
      {/* Usuarios */}
      <Route path="/usuarios/listar" element={<ListUsuario />} />
      <Route path="/usuarios/nuevo" element={<NuevoUsuario />} />

      {/* Comunidades */}
      <Route path="/comunidades/listar" element={<ListarComunidades />} />
      <Route path="/comunidades/nuevo" element={<NuevaComunidad />} />

      {/* Monitoreo de agua */}
      <Route path="/monitoreos/monitoreoagua/listar" element={<ListarMonitoreoAgua />} />
      <Route path="/monitoreos/monitoreoagua/nuevo" element={<NuevoMonitoreoAgua />} />
      <Route path="/monitoreos/monitoreoagua/visualizar" element={<VisualizarMonitoreoAgua />} />
      <Route path="/monitoreos/monitoreoagua/editar" element={<EditarMonitoreoAgua />} />
      <Route path="/monitoreos/monitoreoagua/laboratorio" element={<LaboratorioMonitoreoAgua />} />
      <Route path='/monitoreos/monitoreoagua/nuevolaboratorio' element={<NuevoLaboratorioMonitoreoAgua/>} />
      {/* Monitoreo de suelo */}
      <Route path="/monitoreos/monitoreosuelo/listar" element={<ListarMonitoreoSuelo />} />
      <Route path="/monitoreos/monitoreosuelo/nuevo" element={<NuevoMonitoreoSuelo />} />
      <Route path="/monitoreos/monitoreosuelo/laboratorio" element={<LaboratorioMonitoreoSuelo />} />
      <Route path="/monitoreos/monitoreosuelo/nuevolaboratorio" element={<NuevoLaboratorioMonitoreoSuelo/>} />
      {/* Monitoreo de fauna */}
      <Route path="/monitoreos/fauna" element={<Fauna />} />
      {/* Reportes */}
      <Route path="/monitoreos/reportes" element={<Reportes />} />
    </Routes>
  );
};

export default AppRoutes;
