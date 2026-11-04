//Configurar express app.use le de un orden para cada petición

const express = require('express');
const tareasRouter = require('./routes/tareas.routes');
const { rutaNoEncontrada, manejarErrores } = require('./middlewares/manejarErrores');
const swaggerUi = require('swagger-ui-express');
const documentacion = require('./docs/openapi');
const app = express();
// 1. convertir el cuerpo json de la petición req.body
app.use(express.json());
//2. Documentación de la API
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(documentacion));
// 2. Rutas
app.get("/api/salud", (req, res) => {
    res.json({estado: "ok"});
});

app.use('/api/tareas', tareasRouter);

//3. si no responde la ruta 404 Json
app.use(rutaNoEncontrada);
//4. manejar errores
app.use(manejarErrores);



module.exports = app;