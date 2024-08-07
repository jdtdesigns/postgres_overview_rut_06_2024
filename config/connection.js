const { Sequelize } = require('sequelize');

const client = new Sequelize(
  'movie_db',
  'postgres',
  'pass', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = client;