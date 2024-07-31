const { DataTypes, Model } = require('sequelize');
const client = require('../db/connection');

const Student = require('./Student');
const Group = require('./Group');

class Course extends Model { }

Course.init(
  {
    course_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    course_type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: client,
    modelName: 'course'
  }
);

// One To Many
Course.hasMany(Student, {
  foreignKey: {
    allowNull: false,
    validate: {
      notNull: {
        msg: 'The courseId field must be provided with a valid id of a course.'
      }
    }
  }
});
Student.belongsTo(Course, {
  foreignKey: {
    allowNull: false,
    validate: {
      notNull: {
        msg: 'The courseId field must be provided with a valid id of a course.'
      }
    }
  }
});

// One To Many
Group.hasMany(Student);
Student.belongsTo(Group);

module.exports = Course;