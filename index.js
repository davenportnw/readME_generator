const inquirer = require('inquirer');
const fs = require('fs');
// inquirer.prompt(questions).then((response) => 
 inquirer
.prompt([
    {
        type: "input",
        message: "What is your project title?",
        name: "projectname",
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description"
    },
    {    type: "input",
         message: "What are your installation instructions?",
         name: "installation"
    },
    {
        type: "input",
        message: "How does your user use your application?",
        name: "usageInfo"
    },
    {
        type: "input",
        message: "Would you like to add contribution capiabilities or report issues? If so, how would they do? If not, write n/a",
        name: "contributionGuidelines"
    },
    {
        type: "input",
        message: "What are you test instructions?",
        name: "testInstructions"
    },
    {
        type:"list",
        message: "Pick a license for your application",
        choices: [ 'None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3=Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Publice License 2.0' ] ,
        name: "license"
        
    }

  ])
  .then(answers => {
    console.log(projectname);
  })
  .catch(error => {
    if(error.isTtyError) {
      console.log("Error");
    } else {
      console.log("Incomplete");
    }
  });