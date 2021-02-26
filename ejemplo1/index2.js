var Http = require( 'http' );
var fs=require("fs")
var server = Http.createServer(function(request,response){

    fs.readFile(__dirname+"/hola.html",(error,data)=>{
        console.log('Alguien entró ...123');
        response.write(data)

    });
    response.end();
});

server.listen( 3000, function( ) {
console.log( 'Escuchando conexión en el puerto 3000' );
})