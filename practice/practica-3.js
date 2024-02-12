const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Conexión a la base de datos
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

// Creación del esquema
const Schema = mongoose.Schema;
const ItemSchema = new Schema({
 name: String,
 price: Number
});

// Creación del modelo
const Item = mongoose.model('Item', ItemSchema);

// Creación del servidor express
const app = express();
app.use(bodyParser.json());

// Ruta para crear un nuevo ítem
app.post('/items', (req, res) => {
 const newItem = new Item({
    name: req.body.name,
    price: req.body.price
 });

 newItem.save()
    .then(() => res.status(201).send(newItem))
    .catch((error) => res.status(400).send(error));
});

// Ruta para obtener todos los ítems
app.get('/items', (req, res) => {
 Item.find()
    .then((items) => res.send(items))
    .catch((error) => res.status(500).send(error));
});

// Ruta para obtener un ítem específico por su ID
app.get('/items/:id', (req, res) => {
 Item.findById(req.params.id)
    .then((item) => res.send(item))
    .catch((error) => res.status(404).send(error));
});

// Ruta para actualizar un ítem específico por su ID
app.put('/items/:id', (req, res) => {
 Item.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((item) => res.send(item))
    .catch((error) => res.status(400).send(error));
});

// Ruta para eliminar un ítem específico por su ID
app.delete('/items/:id', (req, res) => {
 Item.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).send())
    .catch((error) => res.status(400).send(error));
});

// Iniciar el servidor
app.listen(3000, () => console.log('Servidor escuchando en el puerto 3000'));
