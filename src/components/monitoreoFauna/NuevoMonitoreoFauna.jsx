import React from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Button, TextField, Box, Typography, MenuItem, Select } from "@mui/material";

const initialValues = {
  comunidad: "",
  puntoMuestreo: "",
  coordenadasX: "",
  coordenadasY: "",
  tipoVegetacion: "",
  fechaInicio: "",
  fechaFin: "",
};

const validationSchema = Yup.object().shape({
  comunidad: Yup.string().required("Comunidad es requerido"),
  puntoMuestreo: Yup.string().required("Punto de muestreo es requerido"),
  coordenadasX: Yup.string().required("Coordenadas X son requeridas"),
  coordenadasY: Yup.string().required("Coordenadas Y son requeridas"),
  tipoVegetacion: Yup.string().required("Tipo de vegetación es requerido"),
  fechaInicio: Yup.string().required("Fecha de inicio es requerida"),
  fechaFin: Yup.string().required("Fecha de finalización es requerida"),
});

const NuevoMonitoreoFauna = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const handleCancel = () => {
    navigate("/monitoreos/monitoreofauna/listar");
  };

  return (
    <div className="p-8">
      <h1 className="text-center text-4xl font-bold text-green-800 mb-8">
        Agregar Monitoreo de Fauna
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, touched, errors }) => (
          <Form>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6">Datos del Monitoreo</Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", lg: "repeat(4, 1fr)" },
                  gap: 2,
                }}
              >
                {/* Comunidad */}
                <Field
                  as={Select}
                  fullWidth
                  id="comunidad"
                  name="comunidad"
                  value={values.comunidad}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.comunidad && errors.comunidad)}
                  helperText={touched.comunidad && errors.comunidad}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Seleccionar comunidad
                  </MenuItem>
                  <MenuItem value="Comunidad 1">Comunidad 1</MenuItem>
                  <MenuItem value="Comunidad 2">Comunidad 2</MenuItem>
                </Field>

                {/* Punto de Muestreo */}
                <Field
                  as={Select}
                  fullWidth
                  id="puntoMuestreo"
                  name="puntoMuestreo"
                  value={values.puntoMuestreo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.puntoMuestreo && errors.puntoMuestreo)}
                  helperText={touched.puntoMuestreo && errors.puntoMuestreo}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Seleccionar punto de muestreo
                  </MenuItem>
                  <MenuItem value="Punto 1">Punto 1</MenuItem>
                  <MenuItem value="Punto 2">Punto 2</MenuItem>
                </Field>

                {/* Coordenadas X */}
                <Field
                  as={TextField}
                  fullWidth
                  id="coordenadasX"
                  name="coordenadasX"
                  label="Coordenadas X"
                  value={values.coordenadasX}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.coordenadasX && errors.coordenadasX)}
                  helperText={touched.coordenadasX && errors.coordenadasX}
                  sx={{ mb: 2 }}
                />

                {/* Coordenadas Y */}
                <Field
                  as={TextField}
                  fullWidth
                  id="coordenadasY"
                  name="coordenadasY"
                  label="Coordenadas Y"
                  value={values.coordenadasY}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.coordenadasY && errors.coordenadasY)}
                  helperText={touched.coordenadasY && errors.coordenadasY}
                  sx={{ mb: 2 }}
                />

                {/* Tipo de Vegetación */}
                <Field
                  as={TextField}
                  fullWidth
                  id="tipoVegetacion"
                  name="tipoVegetacion"
                  label="Tipo de Vegetación"
                  value={values.tipoVegetacion}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.tipoVegetacion && errors.tipoVegetacion)}
                  helperText={touched.tipoVegetacion && errors.tipoVegetacion}
                  sx={{ mb: 2 }}
                />

                {/* Fecha de Inicio */}
                <Field
                  as={TextField}
                  fullWidth
                  id="fechaInicio"
                  name="fechaInicio"
                  label="Fecha de Inicio"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={values.fechaInicio}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.fechaInicio && errors.fechaInicio)}
                  helperText={touched.fechaInicio && errors.fechaInicio}
                  sx={{ mb: 2 }}
                />

                {/* Fecha de Finalización */}
                <Field
                  as={TextField}
                  fullWidth
                  id="fechaFin"
                  name="fechaFin"
                  label="Fecha de Finalización"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={values.fechaFin}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.fechaFin && errors.fechaFin)}
                  helperText={touched.fechaFin && errors.fechaFin}
                  sx={{ mb: 2 }}
                />
              </Box>
            </Box>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "16px",
                marginTop: "20px",
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
                    backgroundColor: "rgba(0, 255, 0, 0.04)",
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
                  color: "red",
                  borderColor: "red",
                  "&:hover": {
                    borderColor: "darkred",
                    backgroundColor: "rgba(255, 0, 0, 0.04)",
                  },
                }}
              >
                Cancelar
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NuevoMonitoreoFauna;
