import React, { useState } from 'react';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import { Button, TextField, Box, Typography, MenuItem } from '@mui/material';

// Estado inicial del formulario
const initialValues = {
  datosTecnico: {
    nombre: '',
  },
  datosPuntoMuestreo: {
    comunidad: '',
    paraje: '',
    coordenadaX: '',
    coordenadaY: '',
    tipoVegetacion: '',
    numeroSitios: '',
  },
  parametros: {
    altitud: '',
    temperaturaAmbiente: '',
    temperaturaSuelo: '',
    estrato: '',
  },
  observaciones: '',
};

// Esquema de validación con Yup
// Esquema de validación con Yup
const validationSchema = Yup.object().shape({
  datosTecnico: Yup.object().shape({
    nombre: Yup.string().required('El nombre es requerido'),
  }),
  datosPuntoMuestreo: Yup.object().shape({
    comunidad: Yup.string().required('La comunidad es requerida'),
    paraje: Yup.string().required('El paraje es requerido'),
    coordenadaX: Yup.number().typeError('Debe ser un número').required('La coordenada X es requerida'),
    coordenadaY: Yup.number().typeError('Debe ser un número').required('La coordenada Y es requerida'),
    tipoVegetacion: Yup.string().required('El tipo de vegetación es requerido'),
    numeroSitios: Yup.number().typeError('Debe ser un número').required('El número de sitios es requerido'),
  }),
  parametros: Yup.object().shape({
    altitud: Yup.number().typeError('Debe ser un número').required('La altitud es requerida'),
    temperaturaAmbiente: Yup.number().typeError('Debe ser un número').required('La temperatura ambiente es requerida'),
    temperaturaSuelo: Yup.number().typeError('Debe ser un número').required('La temperatura del suelo es requerida'),
    estrato: Yup.string().required('El estrato es requerido'),
  }),
  observaciones: Yup.string(),
});

const NuevoMonitoreoSuelo = () => {
  // Manejo del envío del formulario
  const navigate = useNavigate(); // Inicializa useNavigate para la redirección
  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const handleCancel = () => {
    navigate("/monitoreos/monitoreosuelo/listar"); // Redirige a la ruta deseada
  };

  return (
    <div className="p-8">
      <h1 className="text-center text-4xl font-bold text-green-800 mb-8">Nuevo Monitoreo Suelo</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, touched, errors }) => (
          <Form>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Datos del Técnico
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", lg: "repeat(2, 1fr)" },
                  gap: 2,
                }}
              >
              <Field
                as={TextField}
                fullWidth
                select
                id="datosTecnico.nombre"
                name="datosTecnico.nombre"
                label="Nombre"
                value={values.datosTecnico.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.datosTecnico?.nombre && errors.datosTecnico?.nombre)}
                helperText={touched.datosTecnico?.nombre && errors.datosTecnico?.nombre}
                sx={{ mb: 2 }}
              >
                {/* Opciones del select */}
                <MenuItem value="tecnico1">Técnico 1</MenuItem>
                <MenuItem value="tecnico2">Técnico 2</MenuItem>
              </Field>
            </Box>
              </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Datos del Punto de Muestreo
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", lg: "repeat(5, 1fr)" },
                  gap: 2,
                }}
              >
              <Field
                as={TextField}
                fullWidth
                select
                id="datosPuntoMuestreo.comunidad"
                name="datosPuntoMuestreo.comunidad"
                label="Comunidad"
                value={values.datosPuntoMuestreo.comunidad}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.datosPuntoMuestreo?.comunidad && errors.datosPuntoMuestreo?.comunidad)}
                helperText={touched.datosPuntoMuestreo?.comunidad && errors.datosPuntoMuestreo?.comunidad}
                sx={{ mb: 2 }}
              >
                {/* Opciones del select */}
                <MenuItem value="comunidad1">Comunidad 1</MenuItem>
                <MenuItem value="comunidad2">Comunidad 2</MenuItem>
              </Field>
              <Field
                as={TextField}
                fullWidth
                select
                id="datosPuntoMuestreo.paraje"
                name="datosPuntoMuestreo.paraje"
                label="Paraje"
                value={values.datosPuntoMuestreo.paraje}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.datosPuntoMuestreo?.paraje && errors.datosPuntoMuestreo?.paraje)}
                helperText={touched.datosPuntoMuestreo?.paraje && errors.datosPuntoMuestreo?.paraje}
                sx={{ mb: 2 }}
              >
                {/* Opciones del select */}
                <MenuItem value="paraje1">Paraje 1</MenuItem>
                <MenuItem value="paraje2">Paraje 2</MenuItem>
              </Field>
              <Field
                as={TextField}
                fullWidth
                id="datosPuntoMuestreo.coordenadaX"
                name="datosPuntoMuestreo.coordenadaX"
                label="Coordenada X"
                value={values.datosPuntoMuestreo.coordenadaX}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.datosPuntoMuestreo?.coordenadaX && errors.datosPuntoMuestreo?.coordenadaX)}
                helperText={touched.datosPuntoMuestreo?.coordenadaX && errors.datosPuntoMuestreo?.coordenadaX}
                sx={{ mb: 2 }}
              />
              <Field
                as={TextField}
                fullWidth
                id="datosPuntoMuestreo.coordenadaY"
                name="datosPuntoMuestreo.coordenadaY"
                label="Coordenada Y"
                value={values.datosPuntoMuestreo.coordenadaY}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.datosPuntoMuestreo?.coordenadaY && errors.datosPuntoMuestreo?.coordenadaY)}
                helperText={touched.datosPuntoMuestreo?.coordenadaY && errors.datosPuntoMuestreo?.coordenadaY}
                sx={{ mb: 2 }}
              />
              <Field
                as={TextField}
                fullWidth
                select
                id="datosPuntoMuestreo.tipoVegetacion"
                name="datosPuntoMuestreo.tipoVegetacion"
                label="Tipo de Vegetación"
                value={values.datosPuntoMuestreo.tipoVegetacion}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.datosPuntoMuestreo?.tipoVegetacion && errors.datosPuntoMuestreo?.tipoVegetacion)}
                helperText={touched.datosPuntoMuestreo?.tipoVegetacion && errors.datosPuntoMuestreo?.tipoVegetacion}
                sx={{ mb: 2 }}
              >
                {/* Opciones del select */}
                <MenuItem value="vegetacion1">Vegetación 1</MenuItem>
                <MenuItem value="vegetacion2">Vegetación 2</MenuItem>
              </Field>
              <Field
                as={TextField}
                fullWidth
                id="datosPuntoMuestreo.numeroSitios"
                name="datosPuntoMuestreo.numeroSitios"
                label="Número de Sitios"
                value={values.datosPuntoMuestreo.numeroSitios}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.datosPuntoMuestreo?.numeroSitios && errors.datosPuntoMuestreo?.numeroSitios)}
                helperText={touched.datosPuntoMuestreo?.numeroSitios && errors.datosPuntoMuestreo?.numeroSitios}
                sx={{ mb: 2 }}
              />
              </Box>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Parámetros
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", lg: "repeat(5, 1fr)" },
                  gap: 2,
                }}
              >
              <Field
                as={TextField}
                fullWidth
                id="parametros.altitud"
                name="parametros.altitud"
                label="Altitud (msnm)"
                value={values.parametros.altitud}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.parametros?.altitud && errors.parametros?.altitud)}
                helperText={touched.parametros?.altitud && errors.parametros?.altitud}
                sx={{ mb: 2 }}
              />
              <Field
                as={TextField}
                fullWidth
                id="parametros.temperaturaAmbiente"
                name="parametros.temperaturaAmbiente"
                label="Temperatura Ambiente °C"
                value={values.parametros.temperaturaAmbiente}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.parametros?.temperaturaAmbiente && errors.parametros?.temperaturaAmbiente)}
                helperText={touched.parametros?.temperaturaAmbiente && errors.parametros?.temperaturaAmbiente}
                sx={{ mb: 2 }}
              />
              <Field
                as={TextField}
                fullWidth
                id="parametros.temperaturaSuelo"
                name="parametros.temperaturaSuelo"
                label="Temperatura del Suelo °C"
                value={values.parametros.temperaturaSuelo}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.parametros?.temperaturaSuelo && errors.parametros?.temperaturaSuelo)}
                helperText={touched.parametros?.temperaturaSuelo && errors.parametros?.temperaturaSuelo}
                sx={{ mb: 2 }}
              />
              <Field
                as={TextField}
                fullWidth
                id="parametros.estrato"
                name="parametros.estrato"
                label="Estrato"
                value={values.parametros.estrato}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.parametros?.estrato && errors.parametros?.estrato)}
                helperText={touched.parametros?.estrato && errors.parametros?.estrato}
                sx={{ mb: 2 }}
              />
              </Box>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Observaciones
              </Typography>
              <Field
                as={TextField}
                fullWidth
                multiline
                id="observaciones"
                name="observaciones"
                label="Observaciones"
                value={values.observaciones}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.observaciones && errors.observaciones)}
                helperText={touched.observaciones && errors.observaciones}
                sx={{ mb: 2 }}
              />
            </Box>

            <Box sx={{ textAlign: 'center' }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "16px", // Espacio entre los botones
                marginTop: "20px", // Margen superior para separarlos del contenido anterior
              }}
            >
              <Button
                variant="outlined"
                type="submit"
                sx={{
                  color: "green",
                  borderColor: "green",
                  "&:hover": {
                    borderColor: "darkgreen",
                    backgroundColor: "rgba(0, 255, 0, 0.04)", // Color de fondo al pasar el mouse
                  },
                }}
              >
                Enviar
              </Button>
              <Button
                type="button"
                variant="outlined"
                onClick={handleCancel}
                sx={{
                  color: "red", // Color del texto y contorno
                  borderColor: "red",
                  "&:hover": {
                    borderColor: "darkred", // Color del borde al pasar el mouse
                    backgroundColor: "rgba(255, 0, 0, 0.04)", // Un leve sombreado rojo al pasar el mouse
                  },
                }}
              >
                Cancelar
              </Button>
            </div>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NuevoMonitoreoSuelo;
