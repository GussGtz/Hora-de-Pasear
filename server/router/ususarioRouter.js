const express = require("express");

const usuarioControllers = require('../controllers/usuarioContollers');

const router = express.Router();

//Rutas para los usuarios
router.get('/:id_admin', usuarioControllers.obtenerAdmin);
router.post('/', usuarioControllers.crearAdmin);

module.exports = router;