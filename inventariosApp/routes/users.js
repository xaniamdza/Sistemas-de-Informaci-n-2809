var express = require('express');
var router = express.Router();
var usuario = require('../models/user'); //tenemos que crear ese archu¿ivo en ese directorio

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("frmLogin", {})
});

// esto solo realiza el proceso de autenticacion, pero no tiene elementos de seguridad
router.post('/login', (req, res, next) => {
  //console.log(req.body.email, req.body.passwd);
  usuario.login(req.body.email, req.body.passwd, (e, d)=>{ // req.body.passwd SHA256: algoritmo hash
    if (d) {   
      ses = req.session;
      console.log(ses.id);
      ses.userdata = d;
      console.log(ses);
      res.redirect('/'); 
    } else {
      res.json(e);
    }
  });

});

router.get('/logout',(req,res,next)=>{
  req.session.destroy((falla)=>{
    if (falla) {
      res.send(501,"Error")
    } else {
      res.redirect('/');
    }
  });
});

module.exports = router;
