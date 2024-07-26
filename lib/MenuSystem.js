const inquirer = require('inquirer');
const client = require('../db/connection');
const Query = require('./Query');
require('console.table');

class MenuSystem {
  static async showAllStudents() {
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

    console.table(data.rows);
  }

  static async showAddCoursePrompt() {
    console.log('\nPlease enter the course information\n');

    const answerObj = await inquirer.prompt([
      {
        name: 'course_name',
        message: 'Enter the course name'
      },
      {
        name: 'course_type',
        message: 'Enter the course type'
      }
    ]);

    await Query.addCourse(answerObj);
  }

  static async showAddStudentPrompt() {
    // Grab the courses from the database, so we can show a list of courses for the user to choose from when creating the student
    const { rows: courses } = await client.query('SELECT * FROM courses');

    // Show a prompt of questions to get the student information and also the course that they are attached to
    const answerObj = await inquirer.prompt([
      {
        name: 'first_name',
        message: 'Enter the student first name'
      },
      {
        name: 'last_name',
        message: 'Enter the student last name'
      },
      {
        name: 'course_id',
        message: 'Select the course the student is enrolled in',
        type: 'list',
        choices: courses.map(courseObj => {
          return {
            name: courseObj.course_name, // What the user sees
            value: courseObj.id
          }
        })
      }
    ]);

    // Call our addStudent method to add the student row to the students table
    await Query.addStudent(answerObj);
  }
}

module.exports = MenuSystem;