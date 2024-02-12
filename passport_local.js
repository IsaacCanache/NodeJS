const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

passport.use(new LocalStrategy((username, password, done) => {
 // Aquí debes verificar las credenciales del usuario. Por ejemplo, puedes buscar en tu base de datos el usuario con el nombre de usuario proporcionado y comparar la contraseña proporcionada con la almacenada en la base de datos.
 // Si las credenciales son correctas, llama a done con el usuario. De lo contrario, llama a done con false.
  
 // Para este ejemplo, simplemente verificaremos si el nombre de usuario y la contraseña son 'test'.
 if (username === 'test' && password === 'test') {
    return done(null, { id: 1, username: 'test' });
 } else {
    return done(null, false, { message: 'Credenciales incorrectas' });
 }
}));

app.use(passport.initialize());

app.post('/login', passport.authenticate('local'), (req, res) => {
 res.send('Autenticación exitosa');
});

app.listen(3000, () => {
 console.log('Aplicación escuchando en el puerto 3000');
});
