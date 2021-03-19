var jwt = require('jsonwebtoken');

var payload = {
    userdata: {'email' : 'jose@doe.com', 'phone' : '5535353535', 'perfil': 'user'}
};

const clave = "dios1234";
const token = jwt.sign(payload , clave , {expiresIn:60});

console.log(token);