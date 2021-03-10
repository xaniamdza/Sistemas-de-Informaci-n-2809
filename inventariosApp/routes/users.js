var express = require('express');
var router = express.Router();
var usuario = require('../models/user'); //tenemos que crear ese archu¿ivo en ese directorio

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// esto solo realiza el proceso de autenticacion, pero no tiene elementos de seguridad
router.post('/login', (req, res, next) => {
  //console.log(req.body.email, req.body.passwd);
  usuario.login(req.body.email, req.body.passwd, (e, d)=>{ // req.body.passwd SHA256: algoritmo hash
    if (d) {
      res.send('Login correcto');    
      ses = req.session;
      console.log(ses, id); 
    } else {
      res.json(e);
    }
  });

});

module.exports = router;
