require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/DB');

const app = express();

// Conectar a MongoDB
connectDB();


app.use(cors({
  origin: 'http://localhost:5173', 
}));
app.use(express.json());



app.use('/api', require('./routes/productRoutes'));
app.use('/', require('./routes/auth.routes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor en puerto http://localhost:${PORT}`));