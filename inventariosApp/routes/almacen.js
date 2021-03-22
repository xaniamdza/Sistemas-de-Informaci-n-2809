const {response} = require('express');
var express = require('express');
var router = express.Router();
var session = require('express-session');
var checkAutorizacion = require('../autorizacion/general');
router.get('/alta', checkAutorizacion, (req, res, next) => {
    var ses = req.session;
    res.render("almacen/frmAlta", {user: ses.userdata, token:ses.token});
});

router.get('/reporte', (req, res, next)=>{
    res.render("almacen/frmReporte");
});

router.get('/baja', (req, res, next)=>{
    res.render("almacen/frmRBaja");
});


module.exports = router;