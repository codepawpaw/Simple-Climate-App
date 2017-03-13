
var Sequelize = require('sequelize');

// initialize database connection
var sequelize = new Sequelize(
  'event_bot',
  'quiz',
  'wv55ZWWl-production',
  {"dialect": "mysql", "host": 'localhost', "port": '3306',
    "logging": false, "define": {underscored: true}
  }
);

// export connection
module.exports.sequelize = sequelize;

