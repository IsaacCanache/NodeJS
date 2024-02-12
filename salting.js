//npm install bcrypt

const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());

let users = []; // Array para almacenar los usuarios

app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // Generar un salt y hashear la contraseña
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // Almacenar el usuario en el array
    users.push({ username, password: hashedPassword });

    res.send('Registro exitoso');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Buscar al usuario en el array
    const user = users.find(user => user.username === username);

    if (!user) {
        return res.status(401).send('Usuario no encontrado');
    }

    // Verificar la contraseña
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        return res.status(401).send('Contraseña incorrecta');
    }

    res.send('Inicio de sesión exitoso');
});

app.listen(3003, () => console.log('Microservicio escuchando en el puerto 3000'));


/*
# Registrar un usuario
curl -X POST -H "Content-Type: application/json" -d '{"username":"admin","password":"password"}' http://localhost:3003/register

# Iniciar sesión
curl -X POST -H "Content-Type: application/json" -d '{"username":"admin","password":"password"}' http://localhost:3003/login


*/