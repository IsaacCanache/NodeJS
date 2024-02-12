const express = require('express');
const crypto = require('crypto');
const app = express();
app.use(express.json());

let passwords = [];

app.post('/register', (req, res) => {
    const { password } = req.body;
    const hash = crypto.createHash('sha256').update(password).digest('hex');
    passwords.push(hash);
    res.send(`Password hashed and stored successfully.`);
});

app.post('/consulta', (req, res) => {
    const { password } = req.body;
    const hash = crypto.createHash('sha256').update(password).digest('hex');
    if (passwords.includes(hash)) {
        res.send('The password matches the stored hash.');
    } else {
        res.send('The password does not match any stored hash.');
    }
});

app.listen(3000, () => console.log('Microservice listening on port 3000'));

/*Registrar una contraseña
curl -X POST -H "Content-Type: application/json" -d '{"password":"hola123"}' http://localhost:3000/register

 Verificar la contraseña
curl -X POST -H "Content-Type: application/json" -d '{"password":"hola123"}' http://localhost:3000/consulta
*/