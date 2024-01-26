const express = require('express');
const app = express();
const port = 3000;
const pool = require('./db');

app.get('/usuario', (req, res) => {
 const user = req.header('user');
 if (!user) {
    return res.status(400).send({error: 'Falta el parámetro user en el header'});
 }
  
 pool.query('SELECT * FROM Usuarios WHERE username = ?', [user], (error, results) => {
    if (error) {
      return res.status(500).send({error: 'Error al consultar la base de datos'});
    }
    res.send(results);
 });
});

app.listen(port, () => {
 console.log(`Microservicio corriendo en http://localhost:${port}`);
});
