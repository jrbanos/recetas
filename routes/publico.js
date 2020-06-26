// Router publico
const express = require('express');

let Receta = require(__dirname + '/../models/receta.js');
let router = express.Router();


router.get('/', (req, res) => {
    res.render('publico_index');
});

router.post('/buscar', (req, res) => {
    let receta = req.body.busqueda;
    let busqueda = new RegExp(receta, 'i');
    Receta.find({'titulo': busqueda}).then(resultado => {
        if(resultado.length > 0){
            res.render('publico_index',{recetas: resultado});
        } else {
            res.render('publico_index',{error: 'No se encontraron recetas'});
        }
    }).catch(error => {
        res.render('publico_error');
    });
});

router.get('/receta/:id', (req, res) => {
    Receta.findById(req.params.id).then(resultado => {
        if (resultado) {
            res.render('publico_receta', { receta: resultado });
        } else {
            res.render('publico_error', { error: "Receta no encontrada" });
        }
    }).catch(error => {
        res.render('publico_error', { error: 'Error en la aplicación' })
    });
});

module.exports = router;