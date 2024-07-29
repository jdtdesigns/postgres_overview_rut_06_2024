const router = require('express').Router();
const Query = require('../lib/Query');

// GET ROUTES

// GET route to send all students
// localhost:3333/api/students
router.get('/students', async (request, response) => {
  const students = await Query.getStudents();

  response.json(students);
});

// GET route to send all courses
// localhost:3333/api/courses
router.get('/courses', async (request, response) => {
  const courses = await Query.getCourses();

  response.json(courses);
});


// CREATE ROUTES

// POST Create a course
// post request to localhost:3333/api/courses
router.post('/courses', async (request, response) => {
  const formData = request.body;

  await Query.addCourse(formData);

  response.json({
    message: 'Course created successfully!'
  });
});

// POST Create a student
// post request to localhost:3333/api/students
router.post('/students', async (request, response) => {
  const formData = request.body;

  await Query.addStudent(formData);

  response.json({
    message: 'Student created successfully!'
  });
});


module.exports = router;