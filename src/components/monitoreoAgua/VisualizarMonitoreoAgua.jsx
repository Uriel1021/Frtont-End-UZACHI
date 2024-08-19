import React, { useState } from 'react';
import { FaTrash, FaPlusCircle } from 'react-icons/fa';

const datosEjemplo1 = {
  tecnico: "Juan Pérez",
  puntoMuestreo: "Punto A",
  parametros: {
    pH: "7.5",
    temperaturaAgua: "20",
    temperaturaAire: "25",
    conductividad: "500",
    solidosDisueltosTotales: "300"
  },
  metodo: "seccion-velocidad",
  cauce: {
    numeroSecciones: "3",
    secciones: [
      { longitudInicial: "0", longitudFinal: "10", profundidadInicial: "0", profundidadFinal: "5", velocidad: "1.2" },
      { longitudInicial: "10", longitudFinal: "20", profundidadInicial: "0", profundidadFinal: "6", velocidad: "1.5" },
      { longitudInicial: "20", longitudFinal: "30", profundidadInicial: "0", profundidadFinal: "7", velocidad: "1.8" }
    ],
    anchoTotalCauce: "30",
    observaciones: "El cauce presenta un flujo estable."
  }
};

const datosEjemplo2 = {
  tecnico: "Ana Gómez",
  puntoMuestreo: "Punto B",
  parametros: {
    pH: "8.0",
    temperaturaAgua: "22",
    temperaturaAire: "26",
    conductividad: "550",
    solidosDisueltosTotales: "320"
  },
  metodo: "medicion-directa",
  medicionDirecta: {
    ancho: "5",
    largo: "10",
    altura: "3",
    observaciones: "Las dimensiones fueron tomadas en el centro del cauce."
  }
};

function Editar() {
  const [metodo, setMetodo] = useState('');
  const [secciones, setSecciones] = useState(datosEjemplo1.cauce.secciones);
  const [ancho, setAncho] = useState(datosEjemplo1.cauce.anchoTotalCauce);
  const [largo, setLargo] = useState(datosEjemplo2.medicionDirecta.largo);
  const [altura, setAltura] = useState(datosEjemplo2.medicionDirecta.altura);

  const handleMetodoChange = (event) => {
    setMetodo(event.target.value);
  };

  const handleSeccionChange = (index, field, value) => {
    const newSecciones = [...secciones];
    newSecciones[index] = { ...newSecciones[index], [field]: value };
    setSecciones(newSecciones);
  };

  const eliminarSeccion = (index) => {
    const newSecciones = secciones.filter((_, i) => i !== index);
    setSecciones(newSecciones);
  };

  const agregarSeccion = () => {
    setSecciones([...secciones, { longitudInicial: "", longitudFinal: "", profundidadInicial: "", profundidadFinal: "", velocidad: "" }]);
  };

  const handleDimensionesChange = (event, dimension) => {
    switch (dimension) {
      case 'ancho':
        setAncho(event.target.value);
        break;
      case 'largo':
        setLargo(event.target.value);
        break;
      case 'altura':
        setAltura(event.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-lg md:text-xl font-semibold mb-2">Información General</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Técnico</label>
            <input type="text" defaultValue={metodo === 'seccion-velocidad' ? datosEjemplo1.tecnico : datosEjemplo2.tecnico} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Punto de Muestreo</label>
            <input type="text" defaultValue={metodo === 'seccion-velocidad' ? datosEjemplo1.puntoMuestreo : datosEjemplo2.puntoMuestreo} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
        </div>
      </div>

      <div className="mb-4 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-lg md:text-xl font-semibold mb-2">Parámetros</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">pH</label>
            <input type="text" defaultValue={metodo === 'seccion-velocidad' ? datosEjemplo1.parametros.pH : datosEjemplo2.parametros.pH} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Temperatura agua (°C)</label>
            <input type="text" defaultValue={metodo === 'seccion-velocidad' ? datosEjemplo1.parametros.temperaturaAgua : datosEjemplo2.parametros.temperaturaAgua} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Temperatura aire (°C)</label>
            <input type="text" defaultValue={metodo === 'seccion-velocidad' ? datosEjemplo1.parametros.temperaturaAire : datosEjemplo2.parametros.temperaturaAire} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Conductividad</label>
            <input type="text" defaultValue={metodo === 'seccion-velocidad' ? datosEjemplo1.parametros.conductividad : datosEjemplo2.parametros.conductividad} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Sólidos disueltos totales</label>
            <input type="text" defaultValue={metodo === 'seccion-velocidad' ? datosEjemplo1.parametros.solidosDisueltosTotales : datosEjemplo2.parametros.solidosDisueltosTotales} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
        </div>
      </div>

      <div className="mb-4 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-lg md:text-xl font-semibold mb-2">Método de Monitoreo</h2>
        <select onChange={handleMetodoChange} value={metodo} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          <option value="">Seleccionar método</option>
          <option value="seccion-velocidad">Sección-Velocidad</option>
          <option value="medicion-directa">Medición Directa</option>
        </select>
      </div>

      {metodo === 'seccion-velocidad' && (
        <div className="mb-4 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Cauce</h2>
          <label className="block text-sm font-medium text-gray-700">Número de secciones</label>
          <input type="text" defaultValue={datosEjemplo1.cauce.numeroSecciones} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />

          {secciones.map((seccion, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-200 rounded-lg">
              <h3 className="text-md font-semibold mb-2">Sección {index + 1}</h3>
              <label className="block text-sm font-medium text-gray-700">Longitud Inicial</label>
              <input type="text" value={seccion.longitudInicial} onChange={(e) => handleSeccionChange(index, 'longitudInicial', e.target.value)} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              <label className="block text-sm font-medium text-gray-700">Longitud Final</label>
              <input type="text" value={seccion.longitudFinal} onChange={(e) => handleSeccionChange(index, 'longitudFinal', e.target.value)} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              <label className="block text-sm font-medium text-gray-700">Profundidad Inicial</label>
              <input type="text" value={seccion.profundidadInicial} onChange={(e) => handleSeccionChange(index, 'profundidadInicial', e.target.value)} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              <label className="block text-sm font-medium text-gray-700">Profundidad Final</label>
              <input type="text" value={seccion.profundidadFinal} onChange={(e) => handleSeccionChange(index, 'profundidadFinal', e.target.value)} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              <label className="block text-sm font-medium text-gray-700">Velocidad</label>
              <input type="text" value={seccion.velocidad} onChange={(e) => handleSeccionChange(index, 'velocidad', e.target.value)} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              <button onClick={() => eliminarSeccion(index)} className="mt-2 text-red-600 flex items-center"><FaTrash /> Eliminar Sección</button>
            </div>
          ))}
          <button onClick={agregarSeccion} className="text-blue-600 flex items-center"><FaPlusCircle /> Agregar Sección</button>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Ancho total del cauce</label>
            <input type="text" value={ancho} onChange={(e) => handleDimensionesChange(e, 'ancho')} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            <label className="block text-sm font-medium text-gray-700 mt-4">Observaciones</label>
            <textarea defaultValue={datosEjemplo1.cauce.observaciones} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" rows="3" />
          </div>
        </div>
      )}

      {metodo === 'medicion-directa' && (
        <div className="mb-4 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Medición Directa</h2>
          <label className="block text-sm font-medium text-gray-700">Ancho</label>
          <input type="text" value={largo} onChange={(e) => handleDimensionesChange(e, 'largo')} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          <label className="block text-sm font-medium text-gray-700 mt-4">Largo</label>
          <input type="text" value={ancho} onChange={(e) => handleDimensionesChange(e, 'ancho')} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          <label className="block text-sm font-medium text-gray-700 mt-4">Altura</label>
          <input type="text" value={altura} onChange={(e) => handleDimensionesChange(e, 'altura')} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          <label className="block text-sm font-medium text-gray-700 mt-4">Observaciones</label>
          <textarea defaultValue={datosEjemplo2.medicionDirecta.observaciones} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" rows="3" />
        </div>
      )}
    </div>
  );
}

export default Editar;
