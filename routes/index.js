var express = require('express');
var router = express.Router();

// controllers
var AppController = require('../controllers/AppController')

// index
router.get('/', AppController.index)
router.get('/distances', AppController.distances)
router.get('/proximity', AppController.proximity)
router.get('/driving', AppController.driving)
router.get('/data', AppController.data)
router.get('/places', AppController.places)

module.exports = router;
