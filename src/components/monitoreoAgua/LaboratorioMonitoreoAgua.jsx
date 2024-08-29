import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import NuevoLaboratorioMonitoreoAgua from './NuevoLaboratorioMonitoreoAgua';
import NuevoMonitoreoAgua from './NuevoMonitoreoAgua';

const LaboratorioMonitoreoAgua = () => {
  const navigate = useNavigate();
  const [existeDatos, setExisteDatos] = useState("");

  const handleNew = () =>{
    navigate("/monitoreos/monitoreoagua/nuevolaboratorio")
  }
   
  const handleview = () =>{
    navigate("/monitoreos/monitoreoagua/visualizarlaboratorio")
  }

  const value = "No";
  setExisteDatos("No");

  return (
    <div className="p-8">
      <h1 className="text-center text-4xl font-bold text-green-800 mb-8">Laboratorio Awa</h1>
      {/* Contenido específico del monitoreo del suelo */}
      {existeDatos === "No" && (
        <NuevoMonitoreoAgua/>
      )};
    </div>
  );
};

export default LaboratorioMonitoreoAgua;
