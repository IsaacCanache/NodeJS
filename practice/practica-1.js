const express = require('express');

const app = express();

/* Esto hace accesible la variable currentDate a todos los bloques, valor inicial (undefined), el valor asignado se habilita cuando se
llama a "/time" */

let currentDate;

app.get('/time', (req, res) => {
	
	/*si la linea de abajo se define fuera de la funcion, cuando se ejecute el servidor solo se ejecutará una vez y devolvera un valor estatico
	en cambio si se define dentro de la funcion se ejecutara en cada llamada dando el valor actual*/
	
	const currentDate = new Date();
    res.send(currentDate);
});


app.listen(3000, () => {
    console.log(`Hola mundo`);
	console.log(currentDate);
});