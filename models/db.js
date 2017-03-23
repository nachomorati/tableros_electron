const Datastore = require('nedb'),
      db = new Datastore({filename: './tableros_db', autoload: true});

module.exports = db;
