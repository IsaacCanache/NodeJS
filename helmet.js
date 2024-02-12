//npm install helmet

const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet());

app.get('/', (req, res) => {
    res.send('¡Hola Mundo!');
});

app.listen(3000, () => console.log('Microservicio escuchando en el puerto 3000'));

// curl http://localhost:3000/