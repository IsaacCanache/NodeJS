const express = require('express');
const app = express();
const port = 3000;

app.get('/usuario', (req, res) => {
    const user = req.header('user');
    if (!user) {
        return res.status(400).send({error: 'Falta el parámetro user en el header'});
    }
    res.send({user: user});
});

app.listen(port, () => {
    console.log(`Microservicio usuario corriendo en http://localhost:${port}`);
});
