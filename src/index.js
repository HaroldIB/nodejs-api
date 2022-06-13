const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const userRoutes = require('./routes/user.js');
const app = express();

const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', userRoutes);


// routes
app.get('/', (req, res) => {
    res.send("Bienvenido a la API");
})

//mongo db connection
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Conectado a mongo db atlas")).catch((error) => console.log(error));

app.listen(port, () => {
    console.log('Servidor escuchando en el puerto ', port)
});
