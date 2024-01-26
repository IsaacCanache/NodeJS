const express = require('express');
const app = express();
const port = 3002;

app.get('/aplicacion/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Aplicación: ${id}`);
});

app.listen(port, () => {
    console.log(`Microservicio corriendo en http://localhost:${port}`);
});

#probar microservicio>curl http://localhost:3002/aplicacion/testId
