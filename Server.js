const express = require('express');
const app = express();
const PORT = 3130;

// Middlewares
app.use(express.json());

// Importa las rutas
const cuentasRoutes = require('./-Parcial2_PW_SEC02_C2_2025_00164523/Routes/Cuenta');

// Utiliza las rutas
app.use('/', cuentasRoutes);

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
  console.log(`Servidor corriendo en http://localhost:${PORT}/cuentas`); //Endpoint 1
  console.log(`Servidor corriendo en http://localhost:${PORT}/cuenta/1`); //endpoint 2
  console.log(`Servidor corriendo en http://localhost:${PORT}/query?client=Monica%20Castillo`); //punto final 3
  console.log(`Servidor corriendo en http://localhost:${PORT}/cuentasBalance`); //Endpoint 4
});