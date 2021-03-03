var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FES Arabronx' });
});

router.get('/saludo', function(req, res, next) {
  res.send("<h1> Hola bb </h1>");
});

module.exports = router;
