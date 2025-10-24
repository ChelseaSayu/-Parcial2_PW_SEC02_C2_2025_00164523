const express = require('express');
const app = express();
const PORT = 3130;

// Middlewares
app.use(express.json());

// Importa las rutas
const cuentasRoutes = require('./routes/cuenta');

// Utiliza las rutas
app.use('/', cuentasRoutes);

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
  console.log(`Servidor corriendo en http://localhost:${PORT}/cuentas`); //Endpoint 1
  console.log(`Servidor corriendo en http://localhost:${PORT}/cuenta/1`); //endpoint 2
  console.log(`Servidor corriendo en http://localhost:${PORT}/query?client=Luis%20Hernandez`); //punto final 3
  console.log(`Servidor corriendo en http://localhost:${PORT}/cuentasBalance`); //Endpoint 4
});