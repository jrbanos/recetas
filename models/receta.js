// Definir esquema de la receta
const mongoose = require('mongoose');

let elementosSchema = new mongoose.Schema({
    ingrediente: {
        required: true,
        type: String,
        minlength: 3
    },
    cantidad: {
        type: Number,
        required: true,
        min: 1
    },
    unidad: {
        type: String,
        required: true,
        minlength: 5
    }
})

let recetaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        minlength: 5,
        trim: true
    },
    comensales: {
        type: Number,
        required: true,
        min: 1
    },
    preparacion: {
        type: Number,
        required: true,
        min: 1
    },
    coccion: {
        type: Number,
        required: true,
        min: 0
    },
    descripcion: {
        type: String,
        required: true
    },
    imagen: {
        type: String
    },
    elementos: [elementosSchema]
});

let Receta = mongoose.model('receta', recetaSchema);

module.exports = Receta;