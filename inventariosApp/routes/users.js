var express = require('express');
var router = express.Router();
var usuario = require('../models/user'); //tenemos que crear ese archu¿ivo en ese directorio

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', (req, res, next) => {


});

module.exports = router;
