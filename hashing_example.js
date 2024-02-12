npm install express passport passport-local bcrypt

const bcrypt = require('bcrypt');

const password = 'miContraseña';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
 if (err) {
    console.error(err);
 } else {
    console.log('Hash de la contraseña:', hash);

    // Supongamos que esta es la contraseña proporcionada por el usuario
    const passwordProporcionada = 'miContraseña';

    bcrypt.compare(passwordProporcionada, hash, (err, sonIguales) => {
     if (err) {
        console.error(err);
     } else {
        console.log('Las contraseñas coinciden:', sonIguales);
     }
    });
 }
});
