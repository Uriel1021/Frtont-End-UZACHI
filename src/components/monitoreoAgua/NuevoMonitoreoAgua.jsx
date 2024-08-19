import React, { useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  Box,
  Typography,
  IconButton,
  FormControl,
  InputLabel,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const initialValues = {
  datosTecnico: {
    nombre: "",
  },
  datosPuntoMuestreo: {
    comunidad: "",
    paraje: "",
    coordenadaX: "",
    coordenadaY: "",
  },
  parametros: {
    ph: "",
    temperaturaAgua: "",
    temperaturaAire: "",
    conductividad: "",
    solidosDisueltos: "",
  },
  metodoMonitoreo: "",
  seccionVelocidad: {
    cauces: [],
    noSecciones: "",
    anchoTotalCauce: "",
    observaciones: "",
  },
  medicionDirecta: {
    ancho: "",
    largo: "",
    altura: "",
    volumenParcial: "",
    alturaContenidoAgua: "",
    porcentajeContenidoAgua: "",
  },
};

const validationSchema = Yup.object().shape({
  datosTecnico: Yup.object().shape({
    nombre: Yup.string().required("Nombre del técnico es requerido"),
  }),
  datosPuntoMuestreo: Yup.object().shape({
    comunidad: Yup.string().required("Comunidad es requerida"),
    paraje: Yup.string().required("Paraje es requerido"),
    coordenadaX: Yup.string().required("Coordenada X es requerida"),
    coordenadaY: Yup.string().required("Coordenada Y es requerida"),
  }),
  parametros: Yup.object().shape({
    ph: Yup.string().required("pH es requerido"),
    temperaturaAgua: Yup.string().required("Temperatura del agua es requerida"),
    temperaturaAire: Yup.string().required("Temperatura del aire es requerida"),
    conductividad: Yup.string().required("Conductividad es requerida"),
    solidosDisueltos: Yup.string().required(
      "Sólidos disueltos totales son requeridos"
    ),
  }),
  metodoMonitoreo: Yup.string().required("Método de monitoreo es requerido"),
  seccionVelocidad: Yup.object().shape({
    cauces: Yup.array().of(
      Yup.object().shape({
        longitudInicial: Yup.string().required("Longitud inicial es requerida"),
        longitudFinal: Yup.string().required("Longitud final es requerida"),
        profundidadInicial: Yup.string().required(
          "Profundidad inicial es requerida"
        ),
        profundidadFinal: Yup.string().required(
          "Profundidad final es requerida"
        ),
        velocidad: Yup.string().required("Velocidad es requerida"),
      })
    ),
    noSecciones: Yup.string().required("Número de secciones es requerido"),
    anchoTotalCauce: Yup.string().required(
      "Ancho total del cauce es requerido"
    ),
    observaciones: Yup.string(),
  }),
  medicionDirecta: Yup.object().shape({
    ancho: Yup.string().required("Ancho es requerido"),
    largo: Yup.string().required("Largo es requerido"),
    altura: Yup.string().required("Altura es requerida"),
    volumenParcial: Yup.string().required("Volumen parcial es requerido"),
    alturaContenidoAgua: Yup.string().required(
      "Altura del contenido de agua es requerida"
    ),
    porcentajeContenidoAgua: Yup.string().required(
      "Porcentaje de contenido de agua es requerido"
    ),
  }),
});

const NuevoMonitoreoAgua = () => {
  const [metodoSeleccionado, setMetodoSeleccionado] = useState("");
  const navigate = useNavigate(); // Inicializa useNavigate para la redirección

  const handleMetodoChange = (event, handleChange) => {
    const { value } = event.target;
    setMetodoSeleccionado(value);
    handleChange(event);
  };

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };
  const handleCancel = () => {
    navigate("/monitoreos/monitoreoagua/listar"); // Redirige a la ruta deseada
  };

  return (
    <div className="p-8">
      <h1 className="text-center text-4xl font-bold text-green-800 mb-8">
        Nuevo Monitoreo Suelo
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
                Datos del Técnico
              </Typography>

              <Field
                as={TextField}
                fullWidth
                id="datosTecnico.nombre"
                name="datosTecnico.nombre"
                label="Nombre"
                value={values.datosTecnico.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(
                  touched.datosTecnico?.nombre && errors.datosTecnico?.nombre
                )}
                helperText={
                  touched.datosTecnico?.nombre && errors.datosTecnico?.nombre
                }
                sx={{ mb: 2 }}
              />
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Datos del Punto de Muestreo
              </Typography>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Comunidad</InputLabel>
                <Field
                  as={Select}
                  id="datosPuntoMuestreo.comunidad"
                  name="datosPuntoMuestreo.comunidad"
                  value={values.datosPuntoMuestreo.comunidad}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.datosPuntoMuestreo?.comunidad &&
                      errors.datosPuntoMuestreo?.comunidad
                  )}
                >
                  <MenuItem value="Comunidad1">Comunidad 1</MenuItem>
                  <MenuItem value="Comunidad2">Comunidad 2</MenuItem>
                  <MenuItem value="Comunidad3">Comunidad 3</MenuItem>
                </Field>
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Paraje</InputLabel>
                <Field
                  as={Select}
                  id="datosPuntoMuestreo.paraje"
                  name="datosPuntoMuestreo.paraje"
                  value={values.datosPuntoMuestreo.paraje}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.datosPuntoMuestreo?.paraje &&
                      errors.datosPuntoMuestreo?.paraje
                  )}
                >
                  <MenuItem value="Paraje1">Paraje 1</MenuItem>
                  <MenuItem value="Paraje2">Paraje 2</MenuItem>
                  <MenuItem value="Paraje3">Paraje 3</MenuItem>
                </Field>
              </FormControl>
              <Field
                as={TextField}
                fullWidth
                id="datosPuntoMuestreo.coordenadaX"
                name="datosPuntoMuestreo.coordenadaX"
                label="Coordenada X"
                value={values.datosPuntoMuestreo.coordenadaX}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(
                  touched.datosPuntoMuestreo?.coordenadaX &&
                    errors.datosPuntoMuestreo?.coordenadaX
                )}
                helperText={
                  touched.datosPuntoMuestreo?.coordenadaX &&
                  errors.datosPuntoMuestreo?.coordenadaX
                }
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
                error={Boolean(
                  touched.datosPuntoMuestreo?.coordenadaY &&
                    errors.datosPuntoMuestreo?.coordenadaY
                )}
                helperText={
                  touched.datosPuntoMuestreo?.coordenadaY &&
                  errors.datosPuntoMuestreo?.coordenadaY
                }
                sx={{ mb: 2 }}
              />
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Parámetros
              </Typography>
              <Field
                as={TextField}
                fullWidth
                id="parametros.ph"
                name="parametros.ph"
                label="pH"
                value={values.parametros.ph}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.parametros?.ph && errors.parametros?.ph)}
                helperText={touched.parametros?.ph && errors.parametros?.ph}
                sx={{ mb: 2 }}
              />
              <Field
                as={TextField}
                fullWidth
                id="parametros.temperaturaAgua"
                name="parametros.temperaturaAgua"
                label="Temperatura del Agua"
                value={values.parametros.temperaturaAgua}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(
                  touched.parametros?.temperaturaAgua &&
                    errors.parametros?.temperaturaAgua
                )}
                helperText={
                  touched.parametros?.temperaturaAgua &&
                  errors.parametros?.temperaturaAgua
                }
                sx={{ mb: 2 }}
              />
              <Field
                as={TextField}
                fullWidth
                id="parametros.temperaturaAire"
                name="parametros.temperaturaAire"
                label="Temperatura del Aire"
                value={values.parametros.temperaturaAire}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(
                  touched.parametros?.temperaturaAire &&
                    errors.parametros?.temperaturaAire
                )}
                helperText={
                  touched.parametros?.temperaturaAire &&
                  errors.parametros?.temperaturaAire
                }
                sx={{ mb: 2 }}
              />
              <Field
                as={TextField}
                fullWidth
                id="parametros.conductividad"
                name="parametros.conductividad"
                label="Conductividad"
                value={values.parametros.conductividad}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(
                  touched.parametros?.conductividad &&
                    errors.parametros?.conductividad
                )}
                helperText={
                  touched.parametros?.conductividad &&
                  errors.parametros?.conductividad
                }
                sx={{ mb: 2 }}
              />
              <Field
                as={TextField}
                fullWidth
                id="parametros.solidosDisueltos"
                name="parametros.solidosDisueltos"
                label="Sólidos Disueltos Totales"
                value={values.parametros.solidosDisueltos}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(
                  touched.parametros?.solidosDisueltos &&
                    errors.parametros?.solidosDisueltos
                )}
                helperText={
                  touched.parametros?.solidosDisueltos &&
                  errors.parametros?.solidosDisueltos
                }
                sx={{ mb: 2 }}
              />
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Método de Monitoreo
              </Typography>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Método de Monitoreo</InputLabel>
                <Field
                  as={Select}
                  id="metodoMonitoreo"
                  name="metodoMonitoreo"
                  value={values.metodoMonitoreo}
                  onChange={(e) => handleMetodoChange(e, handleChange)}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.metodoMonitoreo && errors.metodoMonitoreo
                  )}
                >
                  <MenuItem value="seccionVelocidad">
                    Sección Velocidad
                  </MenuItem>
                  <MenuItem value="medicionDirecta">Medición Directa</MenuItem>
                </Field>
              </FormControl>
            </Box>

            {metodoSeleccionado === "seccionVelocidad" && (
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Sección Velocidad
                </Typography>
                <FieldArray name="seccionVelocidad.cauces">
                  {({ push, remove }) => (
                    <>
                      {values.seccionVelocidad.cauces.map((_, index) => (
                        <Box key={index} sx={{ mb: 4 }}>
                          <Typography variant="subtitle1" gutterBottom>
                            Cauce {index + 1}
                          </Typography>
                          <Field
                            as={TextField}
                            fullWidth
                            id={`seccionVelocidad.cauces[${index}].longitudInicial`}
                            name={`seccionVelocidad.cauces[${index}].longitudInicial`}
                            label="Longitud Inicial"
                            value={
                              values.seccionVelocidad.cauces[index]
                                .longitudInicial
                            }
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={Boolean(
                              touched.seccionVelocidad?.cauces?.[index]
                                ?.longitudInicial &&
                                errors.seccionVelocidad?.cauces?.[index]
                                  ?.longitudInicial
                            )}
                            helperText={
                              touched.seccionVelocidad?.cauces?.[index]
                                ?.longitudInicial &&
                              errors.seccionVelocidad?.cauces?.[index]
                                ?.longitudInicial
                            }
                            sx={{ mb: 2 }}
                          />
                          <Field
                            as={TextField}
                            fullWidth
                            id={`seccionVelocidad.cauces[${index}].longitudFinal`}
                            name={`seccionVelocidad.cauces[${index}].longitudFinal`}
                            label="Longitud Final"
                            value={
                              values.seccionVelocidad.cauces[index]
                                .longitudFinal
                            }
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={Boolean(
                              touched.seccionVelocidad?.cauces?.[index]
                                ?.longitudFinal &&
                                errors.seccionVelocidad?.cauces?.[index]
                                  ?.longitudFinal
                            )}
                            helperText={
                              touched.seccionVelocidad?.cauces?.[index]
                                ?.longitudFinal &&
                              errors.seccionVelocidad?.cauces?.[index]
                                ?.longitudFinal
                            }
                            sx={{ mb: 2 }}
                          />
                          <Field
                            as={TextField}
                            fullWidth
                            id={`seccionVelocidad.cauces[${index}].profundidadInicial`}
                            name={`seccionVelocidad.cauces[${index}].profundidadInicial`}
                            label="Profundidad Inicial"
                            value={
                              values.seccionVelocidad.cauces[index]
                                .profundidadInicial
                            }
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={Boolean(
                              touched.seccionVelocidad?.cauces?.[index]
                                ?.profundidadInicial &&
                                errors.seccionVelocidad?.cauces?.[index]
                                  ?.profundidadInicial
                            )}
                            helperText={
                              touched.seccionVelocidad?.cauces?.[index]
                                ?.profundidadInicial &&
                              errors.seccionVelocidad?.cauces?.[index]
                                ?.profundidadInicial
                            }
                            sx={{ mb: 2 }}
                          />
                          <Field
                            as={TextField}
                            fullWidth
                            id={`seccionVelocidad.cauces[${index}].profundidadFinal`}
                            name={`seccionVelocidad.cauces[${index}].profundidadFinal`}
                            label="Profundidad Final"
                            value={
                              values.seccionVelocidad.cauces[index]
                                .profundidadFinal
                            }
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={Boolean(
                              touched.seccionVelocidad?.cauces?.[index]
                                ?.profundidadFinal &&
                                errors.seccionVelocidad?.cauces?.[index]
                                  ?.profundidadFinal
                            )}
                            helperText={
                              touched.seccionVelocidad?.cauces?.[index]
                                ?.profundidadFinal &&
                              errors.seccionVelocidad?.cauces?.[index]
                                ?.profundidadFinal
                            }
                            sx={{ mb: 2 }}
                          />
                          <Field
                            as={TextField}
                            fullWidth
                            id={`seccionVelocidad.cauces[${index}].velocidad`}
                            name={`seccionVelocidad.cauces[${index}].velocidad`}
                            label="Velocidad"
                            value={
                              values.seccionVelocidad.cauces[index].velocidad
                            }
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={Boolean(
                              touched.seccionVelocidad?.cauces?.[index]
                                ?.velocidad &&
                                errors.seccionVelocidad?.cauces?.[index]
                                  ?.velocidad
                            )}
                            helperText={
                              touched.seccionVelocidad?.cauces?.[index]
                                ?.velocidad &&
                              errors.seccionVelocidad?.cauces?.[index]
                                ?.velocidad
                            }
                            sx={{ mb: 2 }}
                          />
                          <IconButton
                            onClick={() => remove(index)}
                            sx={{ mb: 2 }}
                          >
                            <RemoveCircleOutlineIcon color="error" />
                          </IconButton>
                        </Box>
                      ))}
                      <Button
                        type="button"
                        onClick={() =>
                          push({
                            longitudInicial: "",
                            longitudFinal: "",
                            profundidadInicial: "",
                            profundidadFinal: "",
                            velocidad: "",
                          })
                        }
                        variant="outlined"
                        startIcon={<AddCircleOutlineIcon />}
                        sx={{ mb: 2 }}
                      >
                        Añadir Cauce
                      </Button>
                    </>
                  )}
                </FieldArray>
                <Field
                  as={TextField}
                  fullWidth
                  id="seccionVelocidad.noSecciones"
                  name="seccionVelocidad.noSecciones"
                  label="Número de Secciones"
                  value={values.seccionVelocidad.noSecciones}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.seccionVelocidad?.noSecciones &&
                      errors.seccionVelocidad?.noSecciones
                  )}
                  helperText={
                    touched.seccionVelocidad?.noSecciones &&
                    errors.seccionVelocidad?.noSecciones
                  }
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="seccionVelocidad.anchoTotalCauce"
                  name="seccionVelocidad.anchoTotalCauce"
                  label="Ancho Total del Cauce"
                  value={values.seccionVelocidad.anchoTotalCauce}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.seccionVelocidad?.anchoTotalCauce &&
                      errors.seccionVelocidad?.anchoTotalCauce
                  )}
                  helperText={
                    touched.seccionVelocidad?.anchoTotalCauce &&
                    errors.seccionVelocidad?.anchoTotalCauce
                  }
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="seccionVelocidad.observaciones"
                  name="seccionVelocidad.observaciones"
                  label="Observaciones"
                  value={values.seccionVelocidad.observaciones}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.seccionVelocidad?.observaciones &&
                      errors.seccionVelocidad?.observaciones
                  )}
                  helperText={
                    touched.seccionVelocidad?.observaciones &&
                    errors.seccionVelocidad?.observaciones
                  }
                  sx={{ mb: 2 }}
                />
              </Box>
            )}

            {metodoSeleccionado === "medicionDirecta" && (
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Medición Directa
                </Typography>
                <Field
                  as={TextField}
                  fullWidth
                  id="medicionDirecta.ancho"
                  name="medicionDirecta.ancho"
                  label="Ancho"
                  value={values.medicionDirecta.ancho}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.medicionDirecta?.ancho &&
                      errors.medicionDirecta?.ancho
                  )}
                  helperText={
                    touched.medicionDirecta?.ancho &&
                    errors.medicionDirecta?.ancho
                  }
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="medicionDirecta.largo"
                  name="medicionDirecta.largo"
                  label="Largo"
                  value={values.medicionDirecta.largo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.medicionDirecta?.largo &&
                      errors.medicionDirecta?.largo
                  )}
                  helperText={
                    touched.medicionDirecta?.largo &&
                    errors.medicionDirecta?.largo
                  }
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="medicionDirecta.altura"
                  name="medicionDirecta.altura"
                  label="Altura"
                  value={values.medicionDirecta.altura}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.medicionDirecta?.altura &&
                      errors.medicionDirecta?.altura
                  )}
                  helperText={
                    touched.medicionDirecta?.altura &&
                    errors.medicionDirecta?.altura
                  }
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="medicionDirecta.volumenParcial"
                  name="medicionDirecta.volumenParcial"
                  label="Volumen Parcial"
                  value={values.medicionDirecta.volumenParcial}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.medicionDirecta?.volumenParcial &&
                      errors.medicionDirecta?.volumenParcial
                  )}
                  helperText={
                    touched.medicionDirecta?.volumenParcial &&
                    errors.medicionDirecta?.volumenParcial
                  }
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="medicionDirecta.alturaContenidoAgua"
                  name="medicionDirecta.alturaContenidoAgua"
                  label="Altura del Contenido de Agua"
                  value={values.medicionDirecta.alturaContenidoAgua}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.medicionDirecta?.alturaContenidoAgua &&
                      errors.medicionDirecta?.alturaContenidoAgua
                  )}
                  helperText={
                    touched.medicionDirecta?.alturaContenidoAgua &&
                    errors.medicionDirecta?.alturaContenidoAgua
                  }
                  sx={{ mb: 2 }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="medicionDirecta.porcentajeContenidoAgua"
                  name="medicionDirecta.porcentajeContenidoAgua"
                  label="Porcentaje de Contenido de Agua"
                  value={values.medicionDirecta.porcentajeContenidoAgua}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    touched.medicionDirecta?.porcentajeContenidoAgua &&
                      errors.medicionDirecta?.porcentajeContenidoAgua
                  )}
                  helperText={
                    touched.medicionDirecta?.porcentajeContenidoAgua &&
                    errors.medicionDirecta?.porcentajeContenidoAgua
                  }
                  sx={{ mb: 2 }}
                />
              </Box>
            )}
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NuevoMonitoreoAgua;
