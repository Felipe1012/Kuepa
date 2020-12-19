const router = require("express").Router();

var mongoose = require('mongoose');
var connectionString = "mongodb+srv://10felipe12:10271215@pruebacluster.a0aqz.mongodb.net/usuarios?retryWrites=true&w=majority"
var hash = require('object-hash')
const jwt = require('jsonwebtoken')


mongoose.connect(connectionString, { useNewUrlParser: true }, function (err, res) {
    if (err) {
        console.log('Error conectando a Atlas: ' + err)
    } else {
        console.log('Conectado a Atlas')
    }
})


//routes

//Login

router.get('/login', (req, res) => {
    var email = req.body.email
    var pwd = req.body.pwd
    var rol = req.body.rol

    var comemail = hash.sha1(email + "contraseña" + pwd)
    var query = {
        pwd: { $eq: comemail }
    }

    User.find(query, function (err, result) {
        if (err) {
            console.log('Usuario Invalido')
            res.send('Usuario invalido')
        } else {
            if (result == "") {
                res.send('Usuario Invalido')
            }
            else {
                const payload = {
                    check: true
                };
                console.log('Usuario confirmado')
                res.send('Usuario Confirmado\n\n' + result)
            }
        }
    })

})

//register
var nameSchema = new mongoose.Schema({ //BASE DE DATOS; 
    email: String,
    pwd: String,
    rol: String,
    nombre: String,
    apellidos: String
})

var User = mongoose.model("usuarios", nameSchema) // CREAR TABLA

router.get('/register' , function (req, res) {
    var email = req.body.email
    var pwd = req.body.pwd
    var rol = req.body.rol
    var nombre = req.body.nombre
    var apellidos = req.body.apellidos

    var newUser = hash.sha1(email + "contraseña" + pwd)
    var query = {
        email: email,
        rol: rol,
        nombre: nombre,
        apellidos: apellidos
    }
    User.find(query, function (err, result) {
        if (err) {
            console.log('Error Consulta')
            res.send('Error Consuta')
        } else {
            if (result.length > 0) {
                res.send('Usuario ya existe')
            }
            else {
                var payload = {
                    email: email,
                    pwd: newUser,
                    rol: rol,
                    nombre: nombre,
                    apellidos: apellidos
                }
                var myDatos = new User(payload)
                myDatos.save().then(item => {
                    console.log('Registro salvado en Atlas')
                })
                    .catch(err => {
                        console.log('No se pudo salvar el registro')
                    })
                console.log(payload)
                console.log('Usuario confirmado')
                var payload = {
                    "message": "ok"
                }
                res.send(payload)
            }
        }
    })
    console.log(email + "-" + pwd)

    if (!email || !pwd) {
        var payload = {
            "mensaje": "ERROR"
        }
        res.send(payload)
        return
    }
})

router.get('/conversacion', function(req,res){
    var mensaje = req.body.msg;
    
})
module.exports = router;
