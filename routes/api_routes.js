const router = require('express').Router();
const Query = require('../lib/Query');

// GET route to send all students
// localhost:3333/api/students
router.get('/students', async (request, response) => {
  const students = await Query.getStudents();

  response.json(students);
});

// POST Create a course
// post request to localhost:3333/api/courses
router.post('/courses', async (request, response) => {
  const formData = request.body;

  await Query.addCourse(formData);

  response.json({
    message: 'Course created successfully!'
  });
});

module.exports = router;