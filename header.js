const express = require('express');
const app = express();
const port = 3001;

// Middleware para analizar JSON bodies
app.use(express.json());

app.get('/usuario', (req, res) => {
    const param = req.header('param');
    if (!param) {
        return res.status(400).send('Falta el parámetro en el header');
    }
    res.send(`Usuario: ${param}`);
});

app.post('/informacion', (req, res) => {
    const body = req.body;
    if (!body || !body.example) {
        return res.status(400).send('Falta el campo example en el body');
    }
    res.send(`Información: ${body.example}`);
});

app.listen(port, () => {
    console.log(`Microservicio corriendo en http://localhost:${port}`);
});


#instalar antes del codigo: npm install express

#consultar usuario> curl -H "param: testParam" http://localhost:3001/usuario
#consultar informacion> curl -X POST -H "Content-Type: application/json" -d '{"example":"testExample"}' http://localhost:3001/informacion

