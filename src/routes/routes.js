const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

//Nodes

router.get('/suma', controller.realizarSumaDosNumeros);
router.get('/', controller.regresaFecha);


//Relationship

module.exports = router;