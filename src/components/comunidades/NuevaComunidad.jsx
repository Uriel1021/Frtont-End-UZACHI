import React from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Button, TextField, Box, Typography } from "@mui/material";

const initialValues = {
  comunidad: "",
  paraje: "",
  utmX: "",
  utmY: "",
  observaciones: "",
};

const validationSchema = Yup.object().shape({
  comunidad: Yup.string().required("Comunidad es requerida"),
  paraje: Yup.string().required("Paraje es requerido"),
  utmX: Yup.number()
    .typeError("Debe ser un número")
    .required("UTM X es requerido"),
  utmY: Yup.number()
    .typeError("Debe ser un número")
    .required("UTM Y es requerido"),
  observaciones: Yup.string(),
});

const NuevaComunidad = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const handleCancel = () => {
    navigate("/comunidades/listar");
  };

  return (
    <div className="p-8">
      <h1 className="text-center text-4xl font-bold text-blue-800 mb-8">
        Agregar Nueva Comunidad
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, touched, errors }) => (
          <Form>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6">Datos del Punto de Muestreo</Typography>
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
                  id="comunidad"
                  name="comunidad"
                  label="Comunidad"
                  value={values.comunidad}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.comunidad && errors.comunidad)}
                  helperText={touched.comunidad && errors.comunidad}
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="paraje"
                  name="paraje"
                  label="Paraje"
                  value={values.paraje}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.paraje && errors.paraje)}
                  helperText={touched.paraje && errors.paraje}
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="utmX"
                  name="utmX"
                  label="UTM X"
                  value={values.utmX}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.utmX && errors.utmX)}
                  helperText={touched.utmX && errors.utmX}
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="utmY"
                  name="utmY"
                  label="UTM Y"
                  value={values.utmY}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.utmY && errors.utmY)}
                  helperText={touched.utmY && errors.utmY}
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="observaciones"
                  name="observaciones"
                  label="Observaciones"
                  multiline
                  rows={4}
                  value={values.observaciones}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.observaciones && errors.observaciones)}
                  helperText={touched.observaciones && errors.observaciones}
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

export default NuevaComunidad;
