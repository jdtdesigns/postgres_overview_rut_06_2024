const { DataTypes, Model } = require('sequelize');
const client = require('../db/connection');

class Group extends Model { }

Group.init(
  {
    group_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: client,
    modelName: 'group'
  }
);

module.exports = Group;