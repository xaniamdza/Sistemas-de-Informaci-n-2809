var express = require('express');
var router = express.Router();

// aqui van las rutas y metodos
router.get('/', (req,res,next) => {
    res.send('Bienvenido invocador');
});
router.get('/garen', (req,res,next) => {
    res.render('campeongaren', {nombre: 'Garen', pasiva: 'Perseverancia', q: 'Golpe decisivo', w: 'Coraje', e: 'Juicio', r: 'Justicia Demaciana'});
});
router.get('/xayah', (req,res,next) => {
    res.render('campeonxayah', {nombre: 'Xayah', pasiva: 'Corte limpio', q: 'Daga doble', w: 'Plumaje mortifero', e: 'Dagas a mi', r: 'Tormenta de plumas'});
});


module.exports = router;