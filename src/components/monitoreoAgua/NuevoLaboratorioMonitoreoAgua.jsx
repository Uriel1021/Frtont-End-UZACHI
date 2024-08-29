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
    fecha: Yup.string().required("Fecha es requerido"),
  }),
  datosfisicoquimico: Yup.object().shape({
    temperatura: Yup.string().required("Temperatura es requerido"),
    conductividad: Yup.string().required("Conductividad es requerida"),
    ph: Yup.string().required("Ph es requerido"),
    dureza: Yup.string().required("Dureza es requerida"),
    nitritos: Yup.string().required("Nitritos es requerido"),
    alcalinidad: Yup.string().required("Alcalinidad es requerida"),
    acidez: Yup.string().required("Acidez es requerida"),
    
  }),
  datosbacteriologicos: Yup.object().shape({
    coliformestotales: Yup.string().required("Coliformes totales es requerido"),
    coliformesfecales: Yup.string().required("Coliformes fecales es requerido"),
    flujovolumetrico: Yup.string().required("Flujo volumetrico es requerido"),
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
                    label="Hora"
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
                    label="Fecha"
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
                  label="Temperatura"
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
                  label="Conductividad"
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
                  label="Ph"
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
                  label="Dureza"
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
                  label="Nitritos"
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
                  label="Alcalinidad"
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
                  label="Acidez"
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
                  label="Coliformes Totales"
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
                  label="Coliformes Fecales"
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
                <Field
                  as={TextField}
                  fullWidth
                  id="datosbacteriologicos.flujovolumetrico"
                  name="datosbacteriologicos.flujovolumetrico"
                  label="Flujo Volumetrico"
                  value={values.datosbacteriologicos.flujovolumetrico}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.datosbacteriologicos?.flujovolumetrico &&
                    errors.datosbacteriologicos?.flujovolumetrico
                  )}
                  helperText={
                    touched.datosbacteriologicos?.flujovolumetrico &&
                    errors.datosbacteriologicos?.flujovolumetrico
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
