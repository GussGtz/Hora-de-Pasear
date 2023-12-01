const express = require('express');

const lugaresControllers = require('../controllers/lugaresControllers');

const router = express.Router()

router.get('/',lugaresControllers.obtenerLugares);
router.get('/:id_lugares', lugaresControllers.obtenerLugaresId);
router.post('/', lugaresControllers.crearLugar);
router.put('/:id_lugares', lugaresControllers.actualizarLugar);
router.delete('/:id_lugares', lugaresControllers.eliminarLugar);

module.exports = router;