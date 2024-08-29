import React from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Button, TextField, Box, Typography, MenuItem } from "@mui/material";

const initialValues = {
  informacionPersonal: {
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    correoElectronico: "",
    telefono: "",
  },
  accesoSistema: {
    rol: "",
    usuario: "",
    contrasena: "",
    observaciones: "",
  },
};

const validationSchema = Yup.object().shape({
  informacionPersonal: Yup.object().shape({
    nombre: Yup.string().required("Nombre es requerido"),
    apellidoPaterno: Yup.string().required("Apellido Paterno es requerido"),
    apellidoMaterno: Yup.string().required("Apellido Materno es requerido"),
    correoElectronico: Yup.string()
      .email("Correo electrónico no es válido")
      .required("Correo electrónico es requerido"),
    telefono: Yup.string().required("Teléfono es requerido"),
  }),
  accesoSistema: Yup.object().shape({
    rol: Yup.string().required("Rol es requerido"),
    usuario: Yup.string().required("Usuario es requerido"),
    contrasena: Yup.string().required("Contraseña es requerida"),
    observaciones: Yup.string(),
  }),
});

const NuevoUsuario = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const handleCancel = () => {
    navigate("/usuarios/listar");
  };

  return (
    <div className="p-8">
      <h1 className="text-center text-4xl font-bold text-blue-800 mb-8">
        Agregar Nuevo Usuario
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, touched, errors }) => (
          <Form>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6">Información Personal</Typography>
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
                  id="informacionPersonal.nombre"
                  name="informacionPersonal.nombre"
                  label="Nombre"
                  value={values.informacionPersonal.nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.informacionPersonal?.nombre &&
                      errors.informacionPersonal?.nombre
                  )}
                  helperText={
                    touched.informacionPersonal?.nombre &&
                    errors.informacionPersonal?.nombre
                  }
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="informacionPersonal.apellidoPaterno"
                  name="informacionPersonal.apellidoPaterno"
                  label="Apellido Paterno"
                  value={values.informacionPersonal.apellidoPaterno}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.informacionPersonal?.apellidoPaterno &&
                      errors.informacionPersonal?.apellidoPaterno
                  )}
                  helperText={
                    touched.informacionPersonal?.apellidoPaterno &&
                    errors.informacionPersonal?.apellidoPaterno
                  }
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="informacionPersonal.apellidoMaterno"
                  name="informacionPersonal.apellidoMaterno"
                  label="Apellido Materno"
                  value={values.informacionPersonal.apellidoMaterno}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.informacionPersonal?.apellidoMaterno &&
                      errors.informacionPersonal?.apellidoMaterno
                  )}
                  helperText={
                    touched.informacionPersonal?.apellidoMaterno &&
                    errors.informacionPersonal?.apellidoMaterno
                  }
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="informacionPersonal.correoElectronico"
                  name="informacionPersonal.correoElectronico"
                  label="Correo Electrónico"
                  value={values.informacionPersonal.correoElectronico}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.informacionPersonal?.correoElectronico &&
                      errors.informacionPersonal?.correoElectronico
                  )}
                  helperText={
                    touched.informacionPersonal?.correoElectronico &&
                    errors.informacionPersonal?.correoElectronico
                  }
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="informacionPersonal.telefono"
                  name="informacionPersonal.telefono"
                  label="Teléfono"
                  value={values.informacionPersonal.telefono}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.informacionPersonal?.telefono &&
                      errors.informacionPersonal?.telefono
                  )}
                  helperText={
                    touched.informacionPersonal?.telefono &&
                    errors.informacionPersonal?.telefono
                  }
                  sx={{ mb: 2 }}
                />
              </Box>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6">Acceso al Sistema</Typography>
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
                  select
                  id="accesoSistema.rol"
                  name="accesoSistema.rol"
                  label="Rol"
                  value={values.accesoSistema.rol}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.accesoSistema?.rol && errors.accesoSistema?.rol
                  )}
                  helperText={
                    touched.accesoSistema?.rol && errors.accesoSistema?.rol
                  }
                  sx={{ mb: 2 }}
                >
                  <MenuItem value="admin">Administrador</MenuItem>
                  <MenuItem value="user">Usuario</MenuItem>
                </Field>
                <Field
                  as={TextField}
                  fullWidth
                  id="accesoSistema.usuario"
                  name="accesoSistema.usuario"
                  label="Usuario"
                  value={values.accesoSistema.usuario}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.accesoSistema?.usuario && errors.accesoSistema?.usuario
                  )}
                  helperText={
                    touched.accesoSistema?.usuario && errors.accesoSistema?.usuario
                  }
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="accesoSistema.contrasena"
                  name="accesoSistema.contrasena"
                  label="Contraseña"
                  type="password"
                  value={values.accesoSistema.contrasena}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.accesoSistema?.contrasena && errors.accesoSistema?.contrasena
                  )}
                  helperText={
                    touched.accesoSistema?.contrasena && errors.accesoSistema?.contrasena
                  }
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="accesoSistema.observaciones"
                  name="accesoSistema.observaciones"
                  label="Observaciones"
                  multiline
                  rows={4}
                  value={values.accesoSistema.observaciones}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.accesoSistema?.observaciones &&
                    errors.accesoSistema?.observaciones
                  )}
                  helperText={
                    touched.accesoSistema?.observaciones &&
                    errors.accesoSistema?.observaciones
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

export default NuevoUsuario;
