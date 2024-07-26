const router = require('express').Router();
const client = require('../db/connection');

// GET route to send all students
// localhost:3333/api/students
router.get('/students', async (request, response) => {
  const sql = `
    SELECT
      s.id AS student_id,
      CONCAT(s.first_name, ' ', s.last_name) AS full_name,
      c.id AS course_id,
      course_name,
      course_type,
      g.id AS group_id,
      group_name,
      gleaders.first_name AS group_leader
      FROM students AS s
        JOIN courses AS c
          ON s.course_id = c.id
        LEFT JOIN groups AS g
          ON s.group_id = g.id
        LEFT JOIN students AS gleaders
          ON s.group_leader_id = gleaders.id
      ORDER BY student_id
    `;

  const data = await client.query(sql);

  response.json(data.rows);
});

module.exports = router;