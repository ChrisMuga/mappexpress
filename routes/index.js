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
router.get('/directions', AppController.directions)
router.get('/geocoding', AppController.geocoding)
router.get('/simple-request', AppController.simpleRequest)
router.get('/snap', AppController.snap)
router.get('/snap-xy', AppController.snapXY)

module.exports = router;
