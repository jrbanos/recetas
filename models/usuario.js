// Definir esquema y modelo del usuario
const mongoose = require('mongoose');

let usuarioSchema = new mongoose.Schema({
    login: {
        required: true,
        type: String,
        minlength: 3,
        unique: true
    },
    password: {
        type: String,
        minlength: 8,
        required: true,
    }
})

let Usuario = mongoose.model('usuario', usuarioSchema);

module.exports = Usuario;