const { Course, Student, Group } = require('../models');
const client = require('./connection');

client.sync({ force: true })
  .then(async () => {
    // Insert Courses
    await Course.bulkCreate([
      {
        course_name: 'FSF',
        course_type: 'Full Stack Web Dev'
      },
      {
        course_name: 'DV',
        course_type: 'Data Visualization'
      },
      {
        course_name: 'Cyber',
        course_type: 'Cyber Security'
      }
    ]);
    console.log('Courses created.');

    // Insert Groups
    await Group.bulkCreate([
      {
        group_name: 'Turtles'
      },
      {
        group_name: 'Team Awesome'
      },
      {
        group_name: 'Avengers'
      }
    ]);
    console.log('Groups created.');

    // Insert Students
    await Student.bulkCreate([
      {
        first_name: 'John',
        last_name: 'Smith',
        courseId: 2
      },
      {
        first_name: 'Jane',
        last_name: 'Doe',
        courseId: 1
      },
      {
        first_name: 'Will',
        last_name: 'Johnson',
        courseId: 1
      },
      {
        first_name: 'Susan',
        last_name: 'Berger',
        courseId: 3
      }
    ]);
    console.log('Students created.');

  });
