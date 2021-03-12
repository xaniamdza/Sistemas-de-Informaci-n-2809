const login = (email, passwd, callback) => {
    var err;
    var bd_data;
    if (email == 'joe@doe.com' && passwd =='123') {
        bd_data={
            'email':email,
            'depto': "ventas",
            'phone': '5512121212'
        }
    } else {
        err = {'mensaje': "cedenciales incorrectas"}
    }

    callback(err,bd_data);
}

exports.login = login;