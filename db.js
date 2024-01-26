const mysql = require('mysql2');

const pool = mysql.createPool({
 host: 'localhost',
 user: 'tu-usuario',
 password: 'tu-contraseña',
 database: 'tu-base-de-datos'
});

module.exports = pool;
