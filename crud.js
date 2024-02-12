//npm install express sequelize mysql2


//Usuario.model.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
 host: 'localhost',
 dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

const Usuario = sequelize.define('Usuario', {
 // Model attributes are defined here
 nombre: {
    type: DataTypes.STRING,
    allowNull: false
 },
 email: {
    type: DataTypes.STRING,
    allowNull: false
 },
 // ...
}, {
 // Other model options go here
});

module.exports = Usuario;


//usuario.controller.js

const Usuario = require('./Usuario.model');

exports.crearUsuario = async (req, res) => {
 try {
    const usuario = await Usuario.create(req.body);
    res.status(201).send(usuario);
 } catch (error) {
    res.status(500).send({ error: 'Error al crear el usuario' });
 }
};

exports.obtenerUsuario = async (req, res) => {
 try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).send({ error: 'Usuario no encontrado' });
    res.send(usuario);
 } catch (error) {
    res.status(500).send({ error: 'Error al obtener el usuario' });
 }
};

exports.actualizarUsuario = async (req, res) => {
 try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).send({ error: 'Usuario no encontrado' });
    await usuario.update(req.body);
    res.send(usuario);
 } catch (error) {
    res.status(500).send({ error: 'Error al actualizar el usuario' });
 }
};

exports.eliminarUsuario = async (req, res) => {
 try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).send({ error: 'Usuario no encontrado' });
    await usuario.destroy();
    res.send({ message: 'Usuario eliminado correctamente' });
 } catch (error) {
    res.status(500).send({ error: 'Error al eliminar el usuario' });
 }
};

//routes.js

const express = require('express');
const router = express.Router();
const usuarioController = require('./usuario.controller');

router.post('/usuarios', usuarioController.crearUsuario);
router.get('/usuarios/:id', usuarioController.obtenerUsuario);
router.put('/usuarios/:id', usuarioController.actualizarUsuario);
router.delete('/usuarios/:id', usuarioController.eliminarUsuario);

module.exports = router;
