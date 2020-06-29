const inquirer = require('inquirer');
const fs = require('fs');


inquirer
    .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?', 
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are your installation instructions?'
    }
    ]).then (answers => {
             fs.appendFile('README.md', ( '#' + answers.title + '\n'), function (err, data) {
                if(err) {
                    throw err;
                }else {
                console.log("Your README was succesfully created!");
                }
            })
            fs.appendFile('README.md', (answers.description + '\n'), function(err, data) {
                if(err) {
                    throw err;
                }else {
                    console.log("Your description was succesfully added to your README file.");
                }
            })
            fs.appendFile('README.md',("#Installation " +  answers.installation + '\n'), function(err, data) {
                if(err) {
                    throw err;
                }else {
                    console.log("Your instructions were succesfully added to your README file.");

                }
            })
    
    }).catch(error => {
        if(error) {
            console.log('error', error);
        }else{
            console.log('yo its something else.');
        }
    })

   