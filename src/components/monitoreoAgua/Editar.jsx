import React, { useState } from 'react';
import { FaPlusCircle, FaTrash } from 'react-icons/fa';

const Editar = () => {
  const [metodo, setMetodo] = useState('');
  const [secciones, setSecciones] = useState([{ longitudInicial: '', longitudFinal: '', profundidadInicial: '', profundidadFinal: '', velocidad: '' }]);
  const [ancho, setAncho] = useState('');
  const [largo, setLargo] = useState('');
  const [altura, setAltura] = useState('');
  const [volumenParcial, setVolumenParcial] = useState('');
  const [alturaContenidoAgua, setAlturaContenidoAgua] = useState('');
  const [porcentajeContenidoAgua, setPorcentajeContenidoAgua] = useState('');

  const datosEjemplo1 = {
    datosTecnico: { nombre: "Juan Pérez" },
    datosPuntoMuestreo: { comunidad: "San Pedro", paraje: "La Vega", uso: "Agrícola", coordenadaX: "123.456", coordenadaY: "78.910" },
    parametros: { pH: "7.2", temperaturaAgua: "22", temperaturaAire: "25", conductividad: "150", solidosDisueltosTotales: "350" },
    metodoMonitoreo: "seccion-velocidad",
    cauce: {
      secciones: [
        { longitudInicial: "0.5", longitudFinal: "1.0", profundidadInicial: "0.2", profundidadFinal: "0.5", velocidad: "0.8" },
        { longitudInicial: "1.0", longitudFinal: "1.5", profundidadInicial: "0.3", profundidadFinal: "0.6", velocidad: "0.9" }
      ],
      numeroSecciones: "2",
      anchoTotalCauce: "1.5",
      observaciones: "El cauce muestra una ligera inclinación."
    }
  };

  const datosEjemplo2 = {
    datosTecnico: { nombre: "Ana Gómez" },
    datosPuntoMuestreo: { comunidad: "El Valle", paraje: "El Potrero", uso: "Ganadero", coordenadaX: "234.567", coordenadaY: "89.012" },
    parametros: { pH: "6.8", temperaturaAgua: "20", temperaturaAire: "27", conductividad: "180", solidosDisueltosTotales: "400" },
    metodoMonitoreo: "medicion-directa",
    medicionDirecta: {
      ancho: "1.2",
      largo: "3.0",
      altura: "1.5",
      volumenParcial: "5.4",
      alturaContenidoAgua: "1.0",
      porcentajeContenidoAgua: "66.7"
    }
  };

  const handleMetodoChange = (e) => {
    setMetodo(e.target.value);
    // Reset fields based on selected method
    if (e.target.value === 'seccion-velocidad') {
      setAncho('');
      setLargo('');
      setAltura('');
      setVolumenParcial('');
      setAlturaContenidoAgua('');
      setPorcentajeContenidoAgua('');
    } else if (e.target.value === 'medicion-directa') {
      setSecciones([]);
    }
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
      <h1 className="text-center text-3xl md:text-4xl font-bold text-green-800 mb-4 md:mb-8">Editar Monitoreo</h1>

      <div className="mb-4 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-lg md:text-xl font-semibold mb-2">Datos del técnico</h2>
        <label className="block text-sm font-medium text-gray-700">Nombre del técnico</label>
        <input type="text" defaultValue={metodo === 'seccion-velocidad' ? datosEjemplo1.datosTecnico.nombre : datosEjemplo2.datosTecnico.nombre} className="mt-1 block w-full md:w-80 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
      </div>

      <div className="mb-4 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-lg md:text-xl font-semibold mb-2">Datos del punto de muestreo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Comunidad</label>
            <input type="text" defaultValue={metodo === 'seccion-velocidad' ? datosEjemplo1.datosPuntoMuestreo.comunidad : datosEjemplo2.datosPuntoMuestreo.comunidad} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Paraje</label>
            <input type="text" defaultValue={metodo === 'seccion-velocidad' ? datosEjemplo1.datosPuntoMuestreo.paraje : datosEjemplo2.datosPuntoMuestreo.paraje} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div className="md:hidden">
            <label className="block text-sm font-medium text-gray-700">Uso</label>
            <input type="text" defaultValue={metodo === 'seccion-velocidad' ? datosEjemplo1.datosPuntoMuestreo.uso : datosEjemplo2.datosPuntoMuestreo.uso} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Coordenada X</label>
            <input type="text" defaultValue={metodo === 'seccion-velocidad' ? datosEjemplo1.datosPuntoMuestreo.coordenadaX : datosEjemplo2.datosPuntoMuestreo.coordenadaX} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Coordenada Y</label>
            <input type="text" defaultValue={metodo === 'seccion-velocidad' ? datosEjemplo1.datosPuntoMuestreo.coordenadaY : datosEjemplo2.datosPuntoMuestreo.coordenadaY} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
        </div>
      </div>

      <div className="mb-4 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-lg md:text-xl font-semibold mb-2">Parámetros</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Longitud Inicial</label>
                  <input type="text" value={seccion.longitudInicial} onChange={(e) => handleSeccionChange(index, 'longitudInicial', e.target.value)} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Longitud Final</label>
                  <input type="text" value={seccion.longitudFinal} onChange={(e) => handleSeccionChange(index, 'longitudFinal', e.target.value)} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Profundidad Inicial</label>
                  <input type="text" value={seccion.profundidadInicial} onChange={(e) => handleSeccionChange(index, 'profundidadInicial', e.target.value)} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Profundidad Final</label>
                  <input type="text" value={seccion.profundidadFinal} onChange={(e) => handleSeccionChange(index, 'profundidadFinal', e.target.value)} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Velocidad</label>
                  <input type="text" value={seccion.velocidad} onChange={(e) => handleSeccionChange(index, 'velocidad', e.target.value)} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
              </div>
              <button type="button" onClick={() => eliminarSeccion(index)} className="mt-2 text-red-600 hover:text-red-800">
                <FaTrash className="inline-block mr-1" /> Eliminar Sección
              </button>
            </div>
          ))}
          <button type="button" onClick={agregarSeccion} className="mt-2 text-green-600 hover:text-green-800">
            <FaPlusCircle className="inline-block mr-1" /> Agregar Sección
          </button>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Ancho Total del Cauce</label>
            <input type="text" value={ancho} onChange={(e) => setAncho(e.target.value)} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Observaciones</label>
            <textarea defaultValue={datosEjemplo1.cauce.observaciones} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" rows="3" />
          </div>
        </div>
      )}

      {metodo === 'medicion-directa' && (
        <div className="mb-4 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Medición Directa</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Ancho</label>
              <input type="text" value={ancho} onChange={(e) => handleDimensionesChange(e, 'ancho')} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Largo</label>
              <input type="text" value={largo} onChange={(e) => handleDimensionesChange(e, 'largo')} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Altura</label>
              <input type="text" value={altura} onChange={(e) => handleDimensionesChange(e, 'altura')} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Observaciones</label>
            <textarea defaultValue={datosEjemplo2.medicionDirecta.observaciones} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" rows="3" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Editar;
