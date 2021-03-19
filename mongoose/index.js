var mongoose = require('mongoose');
var Alumno = require('./models/alumnos.js');
var Libro = require('./models/libro.js');

mongoose.connect('mongodb+srv://Xania:fYjZZBrdsyCflxwX@cluster0.yfgno.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true
  }).then(() => {
    console.log('Conectado a Mongo DB Atlas')
  })
  .catch(err => console.log(err));

 /* function nuevoLibro(){
      var lib = Libro({
        titulo: "El nombre del Viento",
        autor: {
          primer: "Patrick",
          paterno: "Rothfuss"
        },
        genero: "Novela",
        edicion: "Noviembre, 2011",
        editorial: "Plaza Janes",
        numeroPaginas: "613",
        sinopsis: "En una posada en tierra de nadie, un hombre se dispone a relatar, por primera vez, la auténtica historia de su vida. Una historia que únicamente él conoce y que ha quedado diluida tras los rumores, las conjeturas y los cuentos de taberna que le han convertido en un personaje legendario a quien todos daban ya por muerto: Kvothe# músico, mendigo, ladrón, estudiante, mago, héroe y asesino. Ahora va a revelar la verdad sobre sí mismo. Y para ello debe empezar por el principio: su infancia en una troupe de artistas itinerantes, los años malviviendo como un ladronzuelo en las calles de una gran ciudad y su llegada a una universidad donde esperaba encontrar todas las respuestas que había estado buscando. «Viajé, amé, perdí, confié y me traicionaron.» «He robado princesas a reyes agónicos. Incendié la ciudad de Trebon. He pasado la noche con Felurian y he despertado vivo y cuerdo. Me expulsaron de la Universidad a una edad a la que a la mayoría todavía no los dejan entrar. He recorrido de noche caminos de los que otros no se atreven a hablar ni siquiera de día. He hablado con dioses, he amado a mujeres y he escrito canciones que hacen llorar a los bardos. Me llamo Kvothe. Quizá hayas oído hablar de mí."
      });

      lib.save(function(err,data){
        if (err) {
          console.log("------------------------ERROR --------------------------");
        }else {
          console.log("------------------------OK ---------------------------");
        }
      });
  } */

  function nuevoAlumno() {

      var alum= Alumno({
      numeroCuenta: "1111111",
      nombre: {
        primer: "Jesús",
        paterno: "Hewrnandez",
        materno: "Cabrera"
      },
      semestre: 6,
      promedio: 7.99
    });
  
    alum.save(function(err,data){
      if (err) {
        console.log("------------------------ERROR --------------------------");
      }else {
        console.log("------------------------OK ---------------------------");
      }
    });
  }

 
 function nuevosAlumnos() {

    var alumnos=[
      { numeroCuenta: "1111111",nombre: {primer: "Jesús", paterno: "Hernandez", materno: "Cabrera" },semestre: 6, promedio: 7.99},
      { numeroCuenta: "2222222",nombre: {primer: "Diego", paterno: "Pérez", materno: "Zedillo" },semestre: 2, promedio:8.2},
      { numeroCuenta: "3333333",nombre: {primer: "Alex", paterno: "Pérez", materno: "Obrador" },semestre: 3, promedio: 7.3},
      { numeroCuenta: "4444444",nombre: {primer: "René", paterno: "Dávila", materno: "Moreno" },semestre: 4, promedio: 7.1},
      { numeroCuenta: "5555555",nombre: {primer: "Ari", paterno: "Olarte", materno: "Paz" },semestre: 8, promedio: 9.2},
  
    ];
  
  
    Alumno.collection.insert(alumnos,function(err,data){
      if (err) {
        console.log("------------------------ERROR --------------------------");
      }else {
        console.log("------------------------OK ---------------------------");
        console.log(data);
      }
    });
  }


  function findAlumnoPorNumCta(nc){
    Alumno.find({numeroCuenta:"1111111"},function(err,documentos){
      console.log(documentos);
    });
  }
  
  function findByNombre(nom){
    Alumno.find({'nombre.primer':"Jesús"},function(err,documentos){
      console.log(documentos);
    });
  }
  
  function cambiarNombre(numcta, nuevoNombre){
    Alumno.findOneAndUpdate({numeroCuenta:"1111111"},{'nombre.primer':"Alejandro"},function(err,data){
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  }

  function deleteAlumnoByNumCta(nc){
    Alumno.findOneAndDelete({numeroCuenta:"4444444"},function(err,data){
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  }
  

function main() {

  //nuevoAlumno();
  //nuevosAlumnos();
  //findAlumnoPorNumCta();
  //findByNombre();
  //cambiarNombre();
  deleteAlumnoByNumCta("4444444");
  //nuevoLibro();


}

main(); 

