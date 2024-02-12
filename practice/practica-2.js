//npm install express socket.io cors

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require(socket.io)(http);

app.get('/transaccion', funtion(req, res){
	
	const dataConcurrent = { amount: 123, id: 1 };
	
	io.emit('transaccionEvent', dataConcurrent);
	
	res.send('transaccion enviada!');
	
});




app.listen(300, () => {
	
	console.log('microservicio 1 activo');
});