const router = require('express').Router();
const { Course, Student, Group } = require('../models');
// GET ROUTES

// GET route to send all students
// localhost:3333/api/students
router.get('/students', async (request, response) => {
  const students = await Student.findAll({
    include: [Course, Group],
    order: [['id', 'ASC']]
  });

  // const plainData = students.map(studentObj => studentObj.get({ plain: true }));

  // console.log(plainData[2].course.course_name);

  response.json(students);
});

// GET route to send all courses
// localhost:3333/api/courses
router.get('/courses', async (request, response) => {
  console.log('something');
  // findAll returns all rows in the table
  const courses = await Course.findAll();

  response.json(courses);
});


// CREATE ROUTES

// POST Create a course
// post request to localhost:3333/api/courses
router.post('/courses', async (request, response) => {
  const formData = request.body;

  // Insert a new row into the courses table
  const course = await Course.create(formData);

  response.json({
    message: 'Course created successfully!',
    course: course
  });
});

// POST Create a student
// post request to localhost:3333/api/students
router.post('/students', async (request, response) => {
  const formData = request.body;

  try {
    const student = await Student.create(formData);

    response.json({
      message: 'Student created successfully!',
      student: student
    });
  } catch (error) {
    const errors = error.errors.map((errObj) => {
      return {
        message: errObj.message
      }
    });

    response.json(errors);
  }
});


module.exports = router;