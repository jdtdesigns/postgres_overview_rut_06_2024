const inquirer = require('inquirer');
const client = require('./db/connection');

const MenuSystem = require('./lib/MenuSystem');

async function showMainMenu() {
  const answerObj = await inquirer.prompt({
    name: 'choice',
    message: 'Please choose an option from the menu',
    type: 'list',
    choices: ['Show All Students', 'Add Course', 'Add Student']
  });

  switch (answerObj.choice) {
    case 'Show All Students':
      await MenuSystem.showAllStudents();
      showMainMenu();
      break;
    case 'Add Course':
      await MenuSystem.showAddCoursePrompt();
      showMainMenu();
      break;
    case 'Add Student':
      await MenuSystem.showAddStudentPrompt();
      showMainMenu();
  }
}

async function init() {
  await client.connect();

  console.log(`
  ------------------------------
  Welcome To The Student Manager
  ------------------------------  
  `)

  showMainMenu();
}

init();
