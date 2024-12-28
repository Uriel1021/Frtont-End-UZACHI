import React from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { TextField, Box, Typography, Checkbox, FormControlLabel, Button } from '@mui/material';

// Estado inicial del formulario
const initialValues = {
  usuario: 'u.aguilar',
  contrasena: 'Aguilar1021',
  recordar: false,
};

// Esquema de validación con Yup
const validationSchema = Yup.object().shape({
  usuario: Yup.string().required('El usuario es requerido'),
  contrasena: Yup.string().required('La contraseña es requerida'),
});

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    navigate('/menu');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="bg-gray-100 shadow-lg rounded-md"
        style={{
          width: '320px', // Tamaño reducido en píxeles
          padding: '20px', // Espaciado reducido
          transform: 'scale(0.85)', // Reduce al 20% su tamaño
          transformOrigin: 'top center', // Mantiene el centro en la parte superior
          maxWidth: '100%', // Asegura que no se sobrepase el tamaño de la pantalla
        }}
      >
        {/* Logo de usuario */}
        <img
          src="/images/user-logo.png"
          alt="Logotipo"
          style={{
            display: 'block',
            margin: '0 auto 16px',
            width: '60px', // Tamaño reducido del logo
            height: '60px', // Tamaño reducido del logo
          }}
        />
        <Typography variant="h5" gutterBottom className="text-center text-green-800 font-bold">
          Iniciar sesión
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur, values, touched, errors }) => (
            <Form>
              <Box sx={{ mb: 2 }}>
                <Field
                  as={TextField}
                  fullWidth
                  id="usuario"
                  name="usuario"
                  label="Usuario"
                  value={values.usuario}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.usuario && errors.usuario)}
                  helperText={touched.usuario && errors.usuario}
                  variant="outlined"
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Field
                  as={TextField}
                  fullWidth
                  type="password"
                  id="contrasena"
                  name="contrasena"
                  label="Contraseña"
                  value={values.contrasena}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.contrasena && errors.contrasena)}
                  helperText={touched.contrasena && errors.contrasena}
                  variant="outlined"
                />
                <Typography variant="body2" className="text-right mt-1">
                  <a href="#" className="text-green-800 hover:underline">
                    Restablecer contraseña
                  </a>
                </Typography>
              </Box>
              <FormControlLabel
                control={
                  <Field
                    as={Checkbox}
                    name="recordar"
                    color="primary"
                  />
                }
                label="Recordar contraseña"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 1 }}
              >
                Acceder
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
