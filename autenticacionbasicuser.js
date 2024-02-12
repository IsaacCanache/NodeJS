#Autenticacion de usuario basic middleware

const express = require('express');
const app = express();
app.use(express.json()); // Para poder acceder a req.body

// Middleware para autenticar usuarios
const authenticateUser = (req, res, next) => {
    const { username, password } = req.body;

    // Aquí iría tu lógica para verificar las credenciales del usuario
    // Por ejemplo, podrías buscar al usuario en una base de datos y comparar la contraseña

    if (username === 'admin' && password === 'password') {
        next(); // Si las credenciales son correctas, llamamos a next() para continuar con el siguiente middleware o ruta
    } else {
        res.status(401).send('Unauthorized'); // Si las credenciales son incorrectas, enviamos un estado 401 Unauthorized
    }
};

app.post('/user', authenticateUser, (req, res) => {
    res.send('Autenticado exitosamente!');
});

app.listen(3000, () => console.log('Microservicio escuchando en el puerto 3000'));


#curl -X POST -H "Content-Type: application/json" -d '{"username":"admin","password":"password"}' http://localhost:3000/user
