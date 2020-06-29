const inquirer = require('inquirer');
const fs = require('fs');


inquirer
    .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?', 
    }
    ]).then (answers => {
        console.log(answers);
             fs.appendFile('README.md', 'utf8', function (err, data) {
                if(err) {
                    throw err;
                }else {
                console.log("Saved!");
                }
            })
    }).catch(error => {
        if(error) {
            console.log('error', error);
        }else{
            console.log('yo its something else.');
        }
    })

   