// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions =() =>
{
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter a title!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project'
      },
      {
        type: 'input',
        name: 'install',
        message: 'Please instructions on how to install your project'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide a information about how to use this project',
      },
      {
        type: 'input',
        name: 'contributiopm',
        message: 'Provide a the contribution guridlines for this project (Required)'
      },
      {
        type:'input',
        name:'test',
        message:'Provide a testing intructions for this project (Required)'
      },
      {
        type: 'confirm',
        name: 'confirmLiscense',
        message: 'Would you like to enter a liscense',
        default: true
      },
      {
        type: 'input',
        name: 'Liscense',
        message: 'Provide some a liscense',
        when: ({ confirmLiscense }) => {
          if (confirmLiscense) {
            return true;
          } else {
            return false;
          }
        }
      }
    ])
};

// TODO: Create a function to write README file
function writeToFile(README, readmeData) {
 questions()
 .then(readmeData => {
  return generatePage(readmeData);
})
.then(pageHTML => {
  return writeToFile(pageHTML);
})
.then(writeFileResponse => {
  console.log(writeFileResponse);
})
.catch(err => {
  console.log(err);
})}
// TODO: Create a function to initialize app
function init() {}
module.exports = { writeToFile};
// Function call to initialize app
init();
