import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

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
    <div className="p-8" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1 className="text-center text-4xl font-bold text-green-800 mb-8">
        Nuevo Monitoreo
      </h1>

      <div className="mb-4 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Datos del técnico</h2>
        <label className="block text-sm font-medium text-gray-700">Nombre del técnico</label>
        <input type="text" className="mt-1 block w-80 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
      </div>

      <div className="mb-4 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Datos del punto de muestreo</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Comunidad</label>
            <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Paraje</label>
            <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
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
        <h2 className="text-xl font-semibold mb-2">Parámetros</h2>
        <div className="grid grid-cols-3 gap-4">
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
        <h2 className="text-xl font-semibold mb-2">Método de monitoreo</h2>
        <label className="block text-sm font-medium text-gray-700">Método</label>
        <select value={metodo} onChange={handleMetodoChange} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          <option value="">Selecciona un método</option>
          <option value="seccion-velocidad">Sección-velocidad</option>
          <option value="medicion-directa">Medición directa</option>
        </select>
      </div>

      {metodo === 'seccion-velocidad' && (
        <>
          <div className="mb-4 p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Cauce</h2>
            <button
              type="button"
              onClick={agregarSeccion}
              className="mb-4 flex items-center text-blue-500"
            >
              <FaPlusCircle className="mr-2" />
              Agregar sección
            </button>
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b px-4 py-2 text-left text-sm font-semibold text-gray-600">Sección</th>
                  <th className="border-b px-4 py-2 text-left text-sm font-semibold text-gray-600">Longitud (metros)</th>
                  <th className="border-b px-4 py-2 text-left text-sm font-semibold text-gray-600">Profundidad (metros)</th>
                  <th className="border-b px-4 py-2 text-left text-sm font-semibold text-gray-600">Velocidad (m/s)</th>
                </tr>
              </thead>
              <tbody>
                {secciones.map((seccion, index) => (
                  <tr key={index}>
                    <td className="border-b px-4 py-2">{index + 1}</td>
                    <td className="border-b px-4 py-2">
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          value={seccion.longitudInicial}
                          onChange={(e) => handleSeccionChange(index, 'longitudInicial', e.target.value)}
                          className="w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          placeholder="Inicial"
                        />
                        <input
                          type="text"
                          value={seccion.longitudFinal}
                          onChange={(e) => handleSeccionChange(index, 'longitudFinal', e.target.value)}
                          className="w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          placeholder="Final"
                        />
                      </div>
                    </td>
                    <td className="border-b px-4 py-2">
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          value={seccion.profundidadInicial}
                          onChange={(e) => handleSeccionChange(index, 'profundidadInicial', e.target.value)}
                          className="w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          placeholder="Inicial"
                        />
                        <input
                          type="text"
                          value={seccion.profundidadFinal}
                          onChange={(e) => handleSeccionChange(index, 'profundidadFinal', e.target.value)}
                          className="w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          placeholder="Final"
                        />
                      </div>
                    </td>
                    <td className="border-b px-4 py-2">
                      <input
                        type="text"
                        value={seccion.velocidad}
                        onChange={(e) => handleSeccionChange(index, 'velocidad', e.target.value)}
                        className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="Velocidad"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mb-4 p-4 bg-gray-100 rounded-lg">
            <label className="block text-sm font-medium text-gray-700">Número de secciones</label>
            <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div className="mb-4 p-4 bg-gray-100 rounded-lg">
            <label className="block text-sm font-medium text-gray-700">Ancho total del cauce (m)</label>
            <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
        </>
      )}

      {metodo === 'medicion-directa' && (
        <div className="mb-4 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Dimensiones del tanque</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Ancho (m)</label>
              <input type="text" value={ancho} onChange={(e) => handleDimensionesChange(e, 'ancho')} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Largo (m)</label>
              <input type="text" value={largo} onChange={(e) => handleDimensionesChange(e, 'largo')} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Altura (m)</label>
              <input type="text" value={altura} onChange={(e) => handleDimensionesChange(e, 'altura')} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Volumen parcial (m³)</label>
              <input type="text" value={volumenParcial} readOnly className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-200" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Altura de contenido de agua (m)</label>
              <input type="text" value={alturaContenidoAgua} onChange={handleAlturaContenidoAguaChange} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Porcentaje de contenido de agua</label>
            <input type="text" value={`${porcentajeContenidoAgua.toFixed(2)}%`} readOnly className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-200" />
          </div>
          <div className="mt-4">
            <svg width="200" height="100" className="mx-auto">
              <rect x="50" y="10" width="100" height="80" fill="#e0e0e0" stroke="#000" />
              <rect x="50" y={10 + (80 - (80 * porcentajeContenidoAgua / 100))} width="100" height={(80 * porcentajeContenidoAgua / 100)} fill="#007bff" />
            </svg>
          </div>
        </div>
      )}

      <div className="mb-4 p-4 bg-gray-100 rounded-lg">
        <label className="block text-sm font-medium text-gray-700">Observaciones</label>
        <textarea className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" rows="3"></textarea>
      </div>

      <div className="flex justify-end space-x-4">
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          Guardar
        </button>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default Nuevo;
