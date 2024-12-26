import React from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import {
  Button,
  TextField,
  Box,
  Typography,
} from "@mui/material";

const initialValues = {
  informacion:{
    hora:"",
    fecha:"",
  },
  datosfisicoquimico: {
    temperatura: "",
    conductividad: "",
    ph: "",
    dureza: "",
    nitritos: "",
    alcalinidad: "",
    acidez: "",
  },
  datosbacteriologicos: {
    coliformestotales: "",
    coliformesfecales: "",
    flujovolumetrico: "",
  },  
};

const validationSchema = Yup.object().shape({
  informacion: Yup.object().shape({
    hora: Yup.string().required("Hora es requerida"),
    fecha: Yup.string().required("Fecha es requerida"),
  }),
  datosfisicoquimico: Yup.object().shape({
    temperatura: Yup.number().typeError("Debe ser un número").required("Temperatura es requerida"),
    conductividad: Yup.number().typeError("Debe ser un número").required("Conductividad es requerida"),
    ph: Yup.number()
      .typeError("Debe ser un número")
      .min(0, "El pH no puede ser menor a 0")
      .max(14, "El pH no puede ser mayor a 14")
      .required("pH es requerido"),
    dureza: Yup.number().typeError("Debe ser un número").required("Dureza es requerida"),
    nitritos: Yup.number().typeError("Debe ser un número").required("Nitritos es requerido"),
    alcalinidad: Yup.number().typeError("Debe ser un número").required("Alcalinidad es requerida"),
    acidez: Yup.number().typeError("Debe ser un número").required("Acidez es requerida"),
  }),
  datosbacteriologicos: Yup.object().shape({
    coliformestotales: Yup.number().typeError("Debe ser un número").required("Coliformes totales es requerido"),
    coliformesfecales: Yup.number().typeError("Debe ser un número").required("Coliformes fecales es requerido"),
    flujovolumetrico: Yup.number().typeError("Debe ser un número").required("Flujo volumétrico es requerido"),
  }),
});

const NuevoLaboratorioMonitoreoAgua = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const handleCancel = () => {
    navigate("/monitoreos/monitoreoagua/listar");
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
              <Typography variant="h6" gutterBottom>
                Datos Generales
              </Typography>
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
                    label="Hora (hh:mm:ss)"
                    value={values.informacion.hora}
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
                    label="Fecha (dd/mm/aaaa)"
                    value={values.informacion.fecha}
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
              <Typography variant="h6" gutterBottom>
                Datos Fisicoquimicos
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
                  id="datosfisicoquimico.temperatura"
                  name="datosfisicoquimico.temperatura"
                  label="Temperatura °C"
                  value={values.datosfisicoquimico.temperatura}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.datosfisicoquimico?.temperatura && 
                    errors.datosfisicoquimico?.temperatura
                  )}
                  helperText={
                    touched.datosfisicoquimico?.temperatura && 
                    errors.datosfisicoquimico?.temperatura
                  }
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="datosfisicoquimico.conductividad"
                  name="datosfisicoquimico.conductividad"
                  label="Conductividad µS/cm"
                  value={values.datosfisicoquimico.conductividad}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.datosfisicoquimico?.conductividad && 
                    errors.datosfisicoquimico?.conductividad
                  )}
                  helperText={
                    touched.datosfisicoquimico?.conductividad && 
                    errors.datosfisicoquimico?.conductividad
                  }
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="datosfisicoquimico.ph"
                  name="datosfisicoquimico.ph"
                  label="pH"
                  value={values.datosfisicoquimico.ph}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.datosfisicoquimico?.ph && 
                    errors.datosfisicoquimico?.ph
                  )}
                  helperText={
                    touched.datosfisicoquimico?.ph && 
                    errors.datosfisicoquimico?.ph
                  }
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="datosfisicoquimico.dureza"
                  name="datosfisicoquimico.dureza"
                  label="Dureza mg/L"
                  value={values.datosfisicoquimico.dureza}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.datosfisicoquimico?.dureza && 
                    errors.datosfisicoquimico?.dureza
                  )}
                  helperText={
                    touched.datosfisicoquimico?.dureza && 
                    errors.datosfisicoquimico?.dureza
                  }
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="datosfisicoquimico.nitritos"
                  name="datosfisicoquimico.nitritos"
                  label="Nitritos mg/L"
                  value={values.datosfisicoquimico.nitritos}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.datosfisicoquimico?.nitritos && 
                    errors.datosfisicoquimico?.nitritos
                  )}
                  helperText={
                    touched.datosfisicoquimico?.nitritos && 
                    errors.datosfisicoquimico?.nitritos
                  }
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="datosfisicoquimico.alcalinidad"
                  name="datosfisicoquimico.alcalinidad"
                  label="Alcalinidad mg/L"
                  value={values.datosfisicoquimico.alcalinidad}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.datosfisicoquimico?.alcalinidad && 
                    errors.datosfisicoquimico?.alcalinidad
                  )}
                  helperText={
                    touched.datosfisicoquimico?.alcalinidad && 
                    errors.datosfisicoquimico?.alcalinidad
                  }
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="datosfisicoquimico.acidez"
                  name="datosfisicoquimico.acidez"
                  label="Acidez mg/L"
                  value={values.datosfisicoquimico.acidez}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.datosfisicoquimico?.acidez && 
                    errors.datosfisicoquimico?.acidez
                  )}
                  helperText={
                    touched.datosfisicoquimico?.acidez && 
                    errors.datosfisicoquimico?.acidez
                  }
                  sx={{ mb: 2 }}
                />
              </Box>
            </Box>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Datos Bacteriologicos
              </Typography>                       
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
                  id="datosbacteriologicos.coliformestotales"
                  name="datosbacteriologicos.coliformestotales"
                  label="Coliformes Totales (NMP/100 mL)"
                  value={values.datosbacteriologicos.coliformestotales}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.datosbacteriologicos?.coliformestotales &&
                    errors.datosbacteriologicos?.coliformestotales
                  )}
                  helperText={
                    touched.datosbacteriologicos?.coliformestotales &&
                    errors.datosbacteriologicos?.coliformestotales
                  }
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="datosbacteriologicos.coliformesfecales"
                  name="datosbacteriologicos.coliformesfecales"
                  label="Coliformes Fecales (NMP/100 mL)"
                  value={values.datosbacteriologicos.coliformesfecales}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.datosbacteriologicos?.coliformesfecales &&
                    errors.datosbacteriologicos?.coliformesfecales
                  )}
                  helperText={
                    touched.datosbacteriologicos?.coliformesfecales &&
                    errors.datosbacteriologicos?.coliformesfecales
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

export default NuevoLaboratorioMonitoreoAgua;
