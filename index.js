//Main del proyecto, carga las librerias los enrutadores y conecta a la base de datos

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const methodOverride = require('method-override');
const session = require('express-session');


const recetas = require(__dirname + '/routes/recetas');
const auth = require(__dirname + '/routes/auth');
const publico = require(__dirname + '/routes/publico');

mongoose.connect('mongodb://recetas.jbatalaya.site:27017/recetas', { useNewUrlParser: true, useUnifiedTopology: true });

let app = express();

app.use(session({
    secret: '1234',
    resave: true,
    saveUninitialized: false
}));

app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.set('view engine', 'njk');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(methodOverride(function(req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        let method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.use('/public', express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/admin', recetas);
app.use('/auth', auth);
app.use('/', publico);

app.listen(8087);
