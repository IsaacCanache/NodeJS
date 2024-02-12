const express = require('express');
const morgan = require('morgan');

const app = express();

// Usa Morgan middleware para registrar las solicitudes HTTP
app.use(morgan('combined'));

app.get('/', function (req, res) {
 res.send('Hola mundo');
});

app.listen(3000, function () {
 console.log('Aplicación escuchando en el puerto 3000');
});

//npm install express npm install morgan