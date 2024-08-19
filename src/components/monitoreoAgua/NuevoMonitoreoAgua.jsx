import React, { useState } from 'react';
import { FaPlusCircle, FaTrash } from 'react-icons/fa';

const Nuevo = () => {
  const [metodo, setMetodo] = useState('');
  const [secciones, setSecciones] = useState([{ longitudInicial: '', longitudFinal: '', profundidadInicial: '', profundidadFinal: '', velocidad: '' }]);
  const [ancho, setAncho] = useState('');
  const [largo, setLargo] = useState('');
  const [altura, setAltura] = useState('');
  const [volumenParcial, setVolumenParcial] = useState('');
  const [alturaContenidoAgua, setAlturaContenidoAgua] = useState('');
  const [porcentajeContenidoAgua, setPorcentajeContenidoAgua] = useState(0);

  const handleMetodoChange = (e) => {
    setMetodo(e.target.value);
  };

  const agregarSeccion = () => {
    setSecciones([
      ...secciones,
      { longitudInicial: '', longitudFinal: '', profundidadInicial: '', profundidadFinal: '', velocidad: '' }
    ]);
  };

  const eliminarSeccion = (index) => {
    const newSecciones = [...secciones];
    newSecciones.splice(index, 1);
    setSecciones(newSecciones);
  };

  const handleSeccionChange = (index, field, value) => {
    const newSecciones = [...secciones];
    newSecciones[index][field] = value;
    setSecciones(newSecciones);
  };

  const handleDimensionesChange = (e, dimension) => {
    const value = e.target.value;
    if (dimension === 'ancho') setAncho(value);
    if (dimension === 'largo') setLargo(value);
    if (dimension === 'altura') setAltura(value);

    if (ancho && largo && altura) {
      const volumen = ancho * largo * altura;
      setVolumenParcial(volumen);
    }
  };

  const handleAlturaContenidoAguaChange = (e) => {
    const value = e.target.value;
    setAlturaContenidoAgua(value);
    if (altura) {
      const porcentaje = (value / altura) * 100;
      setPorcentajeContenidoAgua(porcentaje);
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-green-800 mb-4 md:mb-8">
        Nuevo Monitoreo
      </h1>

      <div className="mb-4 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-lg md:text-xl font-semibold mb-2">Datos del técnico</h2>
        <label className="block text-sm font-medium text-gray-700">Nombre del técnico</label>
        <input type="text" className="mt-1 block w-full md:w-80 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
      </div>

      <div className="mb-4 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-lg md:text-xl font-semibold mb-2">Datos del punto de muestreo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Comunidad</label>
            <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Paraje</label>
            <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div className="md:hidden">
            <label className="block text-sm font-medium text-gray-700">Uso</label>
            <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Coordenada X</label>
            <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Coordenada Y</label>
            <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
        </div>
      </div>

      <div className="mb-4 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-lg md:text-xl font-semibold mb-2">Parámetros</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">pH</label>
            <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Temperatura del agua (°C)</label>
            <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Temperatura del aire (°C)</label>
            <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Conductividad (μS/cm)</label>
            <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Sólidos disueltos totales (ppt)</label>
            <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
        </div>
      </div>

      <div className="mb-4 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-lg md:text-xl font-semibold mb-2">Método de monitoreo</h2>
        <label className="block text-sm font-medium text-gray-700">Método</label>
        <select value={metodo} onChange={handleMetodoChange} className="mt-1 block w-full md:w-80 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          <option value="">Selecciona un método</option>
          <option value="seccion-velocidad">Sección-velocidad</option>
          <option value="medicion-directa">Medición directa</option>
        </select>
      </div>

      {metodo === 'seccion-velocidad' && (
  <>
    <div className="mb-4 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-lg md:text-xl font-semibold mb-2">Cauce</h2>
      {secciones.map((seccion, index) => (
        <div key={index} className="grid grid-cols-2 gap-4 mb-2 p-4 border border-gray-400 rounded-lg">
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Longitud Inicial (m)</label>
            <input type="text" value={seccion.longitudInicial} onChange={(e) => handleSeccionChange(index, 'longitudInicial', e.target.value)} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Longitud Final (m)</label>
            <input type="text" value={seccion.longitudFinal} onChange={(e) => handleSeccionChange(index, 'longitudFinal', e.target.value)} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Profundidad Inicial (m)</label>
            <input type="text" value={seccion.profundidadInicial} onChange={(e) => handleSeccionChange(index, 'profundidadInicial', e.target.value)} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Profundidad Final (m)</label>
            <input type="text" value={seccion.profundidadFinal} onChange={(e) => handleSeccionChange(index, 'profundidadFinal', e.target.value)} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Velocidad (m/s)</label>
            <input type="text" value={seccion.velocidad} onChange={(e) => handleSeccionChange(index, 'velocidad', e.target.value)} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div className="col-span-1 flex items-center justify-end">
            <button onClick={() => eliminarSeccion(index)} className="text-red-600 hover:text-red-900" title="Eliminar">
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
      <button onClick={agregarSeccion} className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
        <FaPlusCircle className="mr-2 h-5 w-5" />
        Agregar Sección
      </button>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">No. secciones</label>
        <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Ancho total del cauce</label>
        <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Observaciones</label>
        <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
      </div>
    </div>
    <div className="flex justify-center">
      <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
        Guardar Monitoreo
      </button>
    </div>
  </>
)}

      {metodo === 'medicion-directa' && (
        <>
          <div className="mb-4 p-4 bg-gray-100 rounded-lg">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Medición directa</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Ancho (m)</label>
                <input type="text" value={ancho} onChange={(e) => handleDimensionesChange(e, 'ancho')} className="mt-1 block w-full md:w-80 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Largo (m)</label>
                <input type="text" value={largo} onChange={(e) => handleDimensionesChange(e, 'largo')} className="mt-1 block w-full md:w-80 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Altura (m)</label>
                <input type="text" value={altura} onChange={(e) => handleDimensionesChange(e, 'altura')} className="mt-1 block w-full md:w-80 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Volumen parcial (m³)</label>
                <input type="text" value={volumenParcial} readOnly className="mt-1 block w-full md:w-80 rounded-md border border-gray-300 shadow-sm bg-gray-50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Altura del contenido de agua (m)</label>
                <input type="text" value={alturaContenidoAgua} onChange={handleAlturaContenidoAguaChange} className="mt-1 block w-full md:w-80 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Porcentaje de contenido de agua (%)</label>
                <input type="text" value={porcentajeContenidoAgua} readOnly className="mt-1 block w-full md:w-80 rounded-md border border-gray-300 shadow-sm bg-gray-50" />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Guardar Monitoreo
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Nuevo;
