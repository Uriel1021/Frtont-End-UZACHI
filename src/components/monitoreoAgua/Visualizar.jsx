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
  // Estado para seleccionar la cadena de datos
  const [datosSeleccionados, setDatosSeleccionados] = useState(datosEjemplo1);

  // Simular cambio interno de datos
  useEffect(() => {
    // Aquí se puede decidir cuál de los datos se selecciona automáticamente
    setDatosSeleccionados(datosEjemplo2); // Cambia a datosEjemplo2 si quieres mostrar el segundo set
  }, []);

  const { datosTecnico, datosPuntoMuestreo, parametros, metodoMonitoreo, cauce, medicionDirecta } = datosSeleccionados;

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-4xl mx-auto">
      {/* Datos del Técnico */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 border-b-2 border-gray-300 pb-1">Datos del Técnico</h2>
        <div className="space-y-2">
          <p><strong>Nombre:</strong> {datosTecnico.nombre}</p>
        </div>
      </section>

      {/* Datos del Punto de Muestreo */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 border-b-2 border-gray-300 pb-1">Datos del Punto de Muestreo</h2>
        <div className="space-y-2">
          <p><strong>Comunidad:</strong> {datosPuntoMuestreo.comunidad}</p>
          <p><strong>Paraje:</strong> {datosPuntoMuestreo.paraje}</p>
          <p><strong>Uso:</strong> {datosPuntoMuestreo.uso}</p>
          <p><strong>Coordenada X:</strong> {datosPuntoMuestreo.coordenadaX}</p>
          <p><strong>Coordenada Y:</strong> {datosPuntoMuestreo.coordenadaY}</p>
        </div>
      </section>

      {/* Parámetros */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 border-b-2 border-gray-300 pb-1">Parámetros</h2>
        <div className="space-y-2">
          <p><strong>pH:</strong> {parametros.pH}</p>
          <p><strong>Temperatura del Agua:</strong> {parametros.temperaturaAgua}°C</p>
          <p><strong>Temperatura del Aire:</strong> {parametros.temperaturaAire}°C</p>
          <p><strong>Conductividad:</strong> {parametros.conductividad} µS/cm</p>
          <p><strong>Sólidos Disueltos Totales:</strong> {parametros.solidosDisueltosTotales} mg/L</p>
        </div>
      </section>

      {/* Método de Monitoreo */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 border-b-2 border-gray-300 pb-1">Método de Monitoreo</h2>
        <p>{metodoMonitoreo}</p>
      </section>

      {/* Información adicional basada en el método de monitoreo */}
      {metodoMonitoreo === 'seccion-velocidad' && cauce && (
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2 border-b-2 border-gray-300 pb-1">Cauce</h2>
          <div className="space-y-2">
            <p><strong>Número de Secciones:</strong> {cauce.numeroSecciones}</p>
            <p><strong>Ancho Total del Cauce:</strong> {cauce.anchoTotalCauce} m</p>
            <p><strong>Observaciones:</strong> {cauce.observaciones}</p>
            <div className="space-y-4">
              {cauce.secciones.map((seccion, index) => (
                <div key={index} className="border rounded-lg p-4 bg-gray-100">
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
        </section>
      )}

      {metodoMonitoreo === 'medicion-directa' && medicionDirecta && (
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2 border-b-2 border-gray-300 pb-1">Medición Directa</h2>
          <div className="space-y-2">
            <p><strong>Ancho:</strong> {medicionDirecta.ancho} m</p>
            <p><strong>Largo:</strong> {medicionDirecta.largo} m</p>
            <p><strong>Altura:</strong> {medicionDirecta.altura} m</p>
            <p><strong>Volumen Parcial:</strong> {medicionDirecta.volumenParcial} m³</p>
            <p><strong>Altura Contenido Agua:</strong> {medicionDirecta.alturaContenidoAgua} m</p>
            <p><strong>Porcentaje Contenido Agua:</strong> {medicionDirecta.porcentajeContenidoAgua}%</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default Visualizar;
