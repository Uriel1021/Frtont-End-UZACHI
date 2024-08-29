import React from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Button, TextField, Box, Typography } from "@mui/material";

const initialValues = {
  informacion: {
    hora: "",
    fecha: "",
  },
  datosLaboratorio: {
    ph: "",
    conductividad: "",
    materiaorganica: "",
    textura: "",
    densidad: "",
  },
};

const validationSchema = Yup.object().shape({
  informacion: Yup.object().shape({
    hora: Yup.string().required("Hora es requerido"),
    fecha: Yup.string().required("Fecha es requerido"),
  }),
  datosLaboratorio: Yup.object().shape({
    ph: Yup.string().required("Ph es requerido"),
    conductividad: Yup.string().required("Conductividad es requerido"),
    materiaorganica: Yup.string().required("Materia Orgánica es requerido"),
    textura: Yup.string().required("Textura es requerido"),
    densidad: Yup.string().required("Densidad es requerido"),
  }),
});

const NuevoLaboratorioMonitoreoSuelo = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const handleCancel = () => {
    navigate("/monitoreos/monitoreosuelo/listar");
  };

  return (
    <div className="p-8">
      <h1 className="text-center text-4xl font-bold text-green-800 mb-8">
        Agregar Resultados de Laboratorio
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, touched, errors }) => (
          <Form>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6">Información general</Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", lg: "repeat(4, 1fr)" },
                  gap: 2,
                }}
              >
                <Field
                  as={TextField}
                  fullWidth
                  id="informacion.hora"
                  name="informacion.hora"
                  label="Hora"
                  value={values.informacion.hora}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.informacion?.hora && errors.informacion?.hora
                  )}
                  helperText={
                    touched.informacion?.hora && errors.informacion?.hora
                  }
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="informacion.fecha"
                  name="informacion.fecha"
                  label="Fecha"
                  value={values.informacion.fecha}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.informacion?.fecha && errors.informacion?.fecha
                  )}
                  helperText={
                    touched.informacion?.fecha && errors.informacion?.fecha
                  }
                  sx={{ mb: 2 }}
                />
              </Box>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6">Datos del Laboratorio</Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", lg: "repeat(3, 1fr)" },
                  gap: 2,
                }}
              >
                <Field
                  as={TextField}
                  fullWidth
                  id="datosLaboratorio.ph"
                  name="datosLaboratorio.ph"
                  label="pH"
                  value={values.datosLaboratorio.ph}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.datosLaboratorio?.ph && errors.datosLaboratorio?.ph
                  )}
                  helperText={
                    touched.datosLaboratorio?.ph && errors.datosLaboratorio?.ph
                  }
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="datosLaboratorio.conductividad"
                  name="datosLaboratorio.conductividad"
                  label="Conductividad"
                  value={values.datosLaboratorio.conductividad}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.datosLaboratorio?.conductividad &&
                      errors.datosLaboratorio?.conductividad
                  )}
                  helperText={
                    touched.datosLaboratorio?.conductividad &&
                    errors.datosLaboratorio?.conductividad
                  }
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="datosLaboratorio.materiaorganica"
                  name="datosLaboratorio.materiaorganica"
                  label="Materia Orgánica"
                  value={values.datosLaboratorio.materiaorganica}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.datosLaboratorio?.materiaorganica &&
                      errors.datosLaboratorio?.materiaorganica
                  )}
                  helperText={
                    touched.datosLaboratorio?.materiaorganica &&
                    errors.datosLaboratorio?.materiaorganica
                  }
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="datosLaboratorio.textura"
                  name="datosLaboratorio.textura"
                  label="Textura"
                  value={values.datosLaboratorio.textura}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.datosLaboratorio?.textura &&
                      errors.datosLaboratorio?.textura
                  )}
                  helperText={
                    touched.datosLaboratorio?.textura &&
                    errors.datosLaboratorio?.textura
                  }
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="datosLaboratorio.densidad"
                  name="datosLaboratorio.densidad"
                  label="Densidad"
                  value={values.datosLaboratorio.densidad}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.datosLaboratorio?.densidad &&
                      errors.datosLaboratorio?.densidad
                  )}
                  helperText={
                    touched.datosLaboratorio?.densidad &&
                    errors.datosLaboratorio?.densidad
                  }
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

export default NuevoLaboratorioMonitoreoSuelo;
