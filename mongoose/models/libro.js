var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LibroSchema =  Schema({
  titulo: String,
  autor: {
    primer: String,
    paterno: String
  },
  genero: String,
  edicion: String,
  editorial: String,
  numeroPaginas: String,
  sinopsis: String
});

module.exports = mongoose.model('Libro', LibroSchema);