import React, { useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import {
  Button,
  TextField,
  Box,
  Typography,
  Select,
  MenuItem,
  LinearProgress,
} from "@mui/material";

const initialValues = {
  imagenes: [],
  noCamara: "",
  coordenadas: {
    x: "",
    y: "",
  },
};

const validationSchema = Yup.object().shape({
  imagenes: Yup.array()
    .min(1, "Debe subir al menos una imagen")
    .required("Las imágenes son requeridas"),
  noCamara: Yup.string().required("El número de cámara es requerido"),
  coordenadas: Yup.object().shape({
    x: Yup.string().required("Coordenada X es requerida"),
    y: Yup.string().required("Coordenada Y es requerida"),
  }),
});

const AgregarImagenesMonitoreoFauna = () => {
  const navigate = useNavigate();
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleSubmit = (values) => {
    // Simulamos el proceso de subida de imágenes
    const totalImages = values.imagenes.length;
    let uploadedImages = 0;

    const interval = setInterval(() => {
      if (uploadedImages < totalImages) {
        uploadedImages += 1;
        setUploadProgress((uploadedImages / totalImages) * 100);
      } else {
        clearInterval(interval);
        alert("Imágenes subidas exitosamente");
      }
    }, 50); // Simulación del tiempo de subida
  };

  const handleCancel = () => {
    navigate("/monitoreos/monitoreofauna/listar");
  };

  const handleFileChange = (event, setFieldValue) => {
    const files = Array.from(event.target.files);
    setFieldValue("imagenes", files);
  };

  return (
    <div className="p-8">
      <h1 className="text-center text-4xl font-bold text-green-800 mb-8">
        Agregar Monitoreo de Imágenes
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          handleChange,
          handleBlur,
          setFieldValue,
          touched,
          errors,
        }) => (
          <Form>
            <Box sx={{ mb: 4 }}>
  <Typography variant="h6">Subida de Imágenes</Typography>
  <input
    id="imagenes"
    name="imagenes"
    type="file"
    accept=".jpg"
    multiple
    onChange={(event) => handleFileChange(event, setFieldValue)}
    style={{
      display: "block",
      width: "100%",
      padding: "10px",
      border: "2px dashed #4caf50",
      borderRadius: "10px",
      backgroundColor: "#f5f5f5",
      cursor: "pointer",
      marginTop: "10px",
    }}
  />
  {touched.imagenes && errors.imagenes && (
    <Typography color="error">{errors.imagenes}</Typography>
  )}
</Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6">Número de Cámara</Typography>
              <Field
                as={Select}
                fullWidth
                id="noCamara"
                name="noCamara"
                value={values.noCamara}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.noCamara && errors.noCamara)}
              >
                <MenuItem value="camara1">Cámara 1</MenuItem>
                <MenuItem value="camara2">Cámara 2</MenuItem>
                <MenuItem value="camara3">Cámara 3</MenuItem>
                <MenuItem value="camara4">Cámara 4</MenuItem>
                <MenuItem value="camara5">Cámara 5</MenuItem>
                <MenuItem value="camara6">Cámara 6</MenuItem>
              </Field>
              {touched.noCamara && errors.noCamara && (
                <Typography color="error">{errors.noCamara}</Typography>
              )}
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6">Coordenadas de la Cámara</Typography>
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
                  id="coordenadas.x"
                  name="coordenadas.x"
                  label="Coordenada X"
                  value={values.coordenadas.x}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.coordenadas?.x && errors.coordenadas?.x
                  )}
                  helperText={
                    touched.coordenadas?.x && errors.coordenadas?.x
                  }
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="coordenadas.y"
                  name="coordenadas.y"
                  label="Coordenada Y"
                  value={values.coordenadas.y}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.coordenadas?.y && errors.coordenadas?.y
                  )}
                  helperText={
                    touched.coordenadas?.y && errors.coordenadas?.y
                  }
                  sx={{ mb: 2 }}
                />
              </Box>
            </Box>

            {values.imagenes.length > 0 && (
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6">Progreso de Subida</Typography>
                <LinearProgress variant="determinate" value={uploadProgress} />
                <Typography align="center">{`${Math.round(
                  uploadProgress
                )}%`}</Typography>
              </Box>
            )}

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

export default AgregarImagenesMonitoreoFauna;
