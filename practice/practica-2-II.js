//npm install socket.io-client

const io = require ('socket.io-client');
const socket = io('http://localhost:3000');

socket.on('transaccionEvent', funtion (dataConcurrent){

	console.log(`Datos de transacion ${dataConcurrent.amount} ${dataConcurrent.id}`)
)};