import React, { useState, useEffect } from 'react';

// Datos de ejemplo
const datosEjemplo1 = {
  datosTecnico: {
    nombre: "Juan Pérez"
  },
  datosPuntoMuestreo: {
    comunidad: "San Pedro",
    paraje: "La Vega",
    uso: "Agrícola",
    coordenadaX: "123.456",
    coordenadaY: "78.910"
  },
  parametros: {
    pH: "7.2",
    temperaturaAgua: "22",
    temperaturaAire: "25",
    conductividad: "150",
    solidosDisueltosTotales: "350"
  },
  metodoMonitoreo: "seccion-velocidad",
  cauce: {
    secciones: [
      {
        longitudInicial: "0.5",
        longitudFinal: "1.0",
        profundidadInicial: "0.2",
        profundidadFinal: "0.5",
        velocidad: "0.8"
      },
      {
        longitudInicial: "1.0",
        longitudFinal: "1.5",
        profundidadInicial: "0.3",
        profundidadFinal: "0.6",
        velocidad: "0.9"
      }
    ],
    numeroSecciones: "2",
    anchoTotalCauce: "1.5",
    observaciones: "El cauce muestra una ligera inclinación."
  }
};

const datosEjemplo2 = {
  datosTecnico: {
    nombre: "Ana Gómez"
  },
  datosPuntoMuestreo: {
    comunidad: "El Valle",
    paraje: "El Potrero",
    uso: "Ganadero",
    coordenadaX: "234.567",
    coordenadaY: "89.012"
  },
  parametros: {
    pH: "6.8",
    temperaturaAgua: "20",
    temperaturaAire: "27",
    conductividad: "180",
    solidosDisueltosTotales: "400"
  },
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

const Visualizar = () => {
  const [datosSeleccionados, setDatosSeleccionados] = useState(datosEjemplo1);

  useEffect(() => {
    setDatosSeleccionados(datosEjemplo1); // Cambia a datosEjemplo2 si quieres mostrar el segundo set
  }, []);

  const { datosTecnico, datosPuntoMuestreo, parametros, metodoMonitoreo, cauce, medicionDirecta } = datosSeleccionados;

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-green-800 mb-4 md:mb-8">
        Visualizar Monitoreo
      </h1>

      {/* Datos del Técnico */}
      <div className="mb-4 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-lg md:text-xl font-semibold mb-2">Datos del Técnico</h2>
        <div className="space-y-2">
          <p><strong>Nombre:</strong> {datosTecnico.nombre}</p>
        </div>
      </div>

      {/* Datos del Punto de Muestreo */}
      <div className="mb-4 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-lg md:text-xl font-semibold mb-2">Datos del Punto de Muestreo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p><strong>Comunidad:</strong> {datosPuntoMuestreo.comunidad}</p>
          </div>
          <div>
            <p><strong>Paraje:</strong> {datosPuntoMuestreo.paraje}</p>
          </div>
          <div className="md:hidden">
            <p><strong>Uso:</strong> {datosPuntoMuestreo.uso}</p>
          </div>
          <div>
            <p><strong>Coordenada X:</strong> {datosPuntoMuestreo.coordenadaX}</p>
          </div>
          <div>
            <p><strong>Coordenada Y:</strong> {datosPuntoMuestreo.coordenadaY}</p>
          </div>
        </div>
      </div>

      {/* Parámetros */}
      <div className="mb-4 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-lg md:text-xl font-semibold mb-2">Parámetros</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p><strong>pH:</strong> {parametros.pH}</p>
          </div>
          <div>
            <p><strong>Temperatura del Agua:</strong> {parametros.temperaturaAgua}°C</p>
          </div>
          <div>
            <p><strong>Temperatura del Aire:</strong> {parametros.temperaturaAire}°C</p>
          </div>
          <div>
            <p><strong>Conductividad:</strong> {parametros.conductividad} µS/cm</p>
          </div>
          <div>
            <p><strong>Sólidos Disueltos Totales:</strong> {parametros.solidosDisueltosTotales} mg/L</p>
          </div>
        </div>
      </div>

      {/* Método de Monitoreo */}
      <div className="mb-4 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-lg md:text-xl font-semibold mb-2">Método de Monitoreo</h2>
        <p>{metodoMonitoreo}</p>
      </div>

      {/* Información adicional basada en el método de monitoreo */}
      {metodoMonitoreo === 'seccion-velocidad' && cauce && (
        <div className="mb-4 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Cauce</h2>
          <div className="space-y-2">
            <p><strong>Número de Secciones:</strong> {cauce.numeroSecciones}</p>
            <p><strong>Ancho Total del Cauce:</strong> {cauce.anchoTotalCauce} m</p>
            <p><strong>Observaciones:</strong> {cauce.observaciones}</p>
            <div className="space-y-4">
              {cauce.secciones.map((seccion, index) => (
                <div key={index} className="border rounded-lg p-4 bg-gray-200">
                  <h3 className="font-semibold text-lg mb-2">Sección {index + 1}</h3>
                  <p><strong>Longitud Inicial:</strong> {seccion.longitudInicial} m</p>
                  <p><strong>Longitud Final:</strong> {seccion.longitudFinal} m</p>
                  <p><strong>Profundidad Inicial:</strong> {seccion.profundidadInicial} m</p>
                  <p><strong>Profundidad Final:</strong> {seccion.profundidadFinal} m</p>
                  <p><strong>Velocidad:</strong> {seccion.velocidad} m/s</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {metodoMonitoreo === 'medicion-directa' && medicionDirecta && (
        <div className="mb-4 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Medición Directa</h2>
          <div className="space-y-2">
            <p><strong>Ancho:</strong> {medicionDirecta.ancho} m</p>
            <p><strong>Largo:</strong> {medicionDirecta.largo} m</p>
            <p><strong>Altura:</strong> {medicionDirecta.altura} m</p>
            <p><strong>Volumen Parcial:</strong> {medicionDirecta.volumenParcial} m³</p>
            <p><strong>Altura Contenido Agua:</strong> {medicionDirecta.alturaContenidoAgua} m</p>
            <p><strong>Porcentaje Contenido Agua:</strong> {medicionDirecta.porcentajeContenidoAgua}%</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Visualizar;
