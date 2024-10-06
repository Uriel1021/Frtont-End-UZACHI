import React from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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
    // Lógica para manejar el inicio de sesión
    //alert(JSON.stringify(values, null, 2));
    // Redirigir
    navigate('/menu');
  };

  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto mt-10 p-6 sm:p-8 md:p-10 lg:p-12 bg-gray-100 shadow-lg rounded-md relative" style={{ top: '-100px' }}>
      {/* Logo de usuario */}
      <img 
        src="/images/user-logo.png" 
        alt="Logotipo" 
        className="mx-auto mb-4 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36" 
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
              sx={{ mt: 2 }}
            >
              Acceder
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
