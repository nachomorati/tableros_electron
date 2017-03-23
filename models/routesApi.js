const Tableros = require('./db');

var tableros = [
  {
    nombre: 'tablero 1',
    codigo: '1-002'
  },
  {
    nombre: 'tablero 2',
    codigo: '2-018'
  }
];

exports.traerTableros = function (filtro, cb) {
  var keys = Object.keys(filtro);
  console.log(keys.length == 0);

  if (keys.length == 0) {
    console.log('keys:', keys);
    Tableros.find({}, function (err, tableros) {
      if (err) {
        return cb(err);
      }
      return cb(null, tableros);
    })
  }
};

exports.crearTablero = function (tablero, cb) {
  Tableros.insert(tablero, function (err, newDoc) {
    if (err) {
      return cb(err);
    }
    return cb(null, newDoc);
  });
};
