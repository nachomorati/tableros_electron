var express = require('express');
var router = express.Router();
var api = require('./../models/routesApi');

/* GET home page. */
router.get('/', function(req, res, next) {
  api.traerTableros({}, function (err, tableros) {
    if (err) {
      return res.render('error', {
        message:err,
        error: {
          status:err.status
        }
      });
    }
    res.locals.tableros = tableros;
    res.render('index', { title: 'Express' });
  });
});

router.get('/crear', function (req, res) {
  res.render('new');
});

router.post('/crear_tablero', function (req, res) {
  api.crearTablero(req.body, function (err, tablero) {
    if (err) {
      return res.render('error', {
        message:err,
        error: {
          status:err.status
        }
      })
    }
    res.redirect('/');
  });
});

module.exports = router;
