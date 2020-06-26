// Genera usuarios 
const mongoose = require('mongoose');
const Usuario = require(__dirname + '/../models/usuario.js');
var CryptoJS = require("crypto-js");

mongoose.connect('mongodb://localhost:27017/recetasV3');

Usuario.collection.drop();
let usu1 = new Usuario({
    login: 'nacho',
    password: CryptoJS.AES.encrypt('qwerty', 'asdf')
});
usu1.save();

let usu2 = new Usuario({
    login: 'arturo',
    password: CryptoJS.AES.encrypt('qwerty', 'asdf')
});
usu2.save();