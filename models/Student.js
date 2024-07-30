const { DataTypes, Model } = require('sequelize');
const client = require('../db/connection');

class Student extends Model { }

Student.init(
  {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: client,
    modelName: 'student'
  }
);

module.exports = Student;