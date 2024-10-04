const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');
const productRoutes = require('./routes/productRoutes');
const syncRoutes = require('./routes/syncRoutes');


const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/auth', authRoutes); // Rutas de autenticación
app.use('/user', userRoutes); // Rutas de usuario
app.use('/categories', categoriesRoutes); // Rutas de categorías
app.use('/products', productRoutes); // Rutas de productos
app.use('/sync', syncRoutes); // Rutas de sincronización

// Inicio del servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
