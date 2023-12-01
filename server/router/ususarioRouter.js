const express = require("express");

const usuarioControllers = require('../controllers/usuarioContollers');

const router = express.Router();

//Rutas para los usuarios
router.get('/', usuarioControllers.obtenerAdmin);
router.get('/:id_usuario', usuarioControllers.obtenerAdminId);
router.post('/', usuarioControllers.crearAdmin);
router.put('/:id_usuario', usuarioControllers.actualizarAdmin);
router.delete('/:id_usuario', usuarioControllers.eliminarAdmin);

module.exports = router;