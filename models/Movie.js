const { DataTypes, Model } = require('sequelize');
const client = require('../config/connection');

class Movie extends Model { }

Movie.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: client
  }
);

module.exports = Movie;