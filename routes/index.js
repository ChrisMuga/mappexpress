var express = require('express');
var router = express.Router();

// controllers
var AppController = require('../controllers/AppController')

// index
router.get('/', AppController.index);

module.exports = router;
