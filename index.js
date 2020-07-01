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
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How does your user use your application?'
    },
    {
        type: 'input',
        name: 'contributors',
        message: "Any contributors besides you? If no, write none"

    },
    {
        type: "input",
        message: "What are your test instructions?",
        name: "testInstructions"
    },
    {
        type:"list",
        message: "Pick a license for your application",
        choices: [ 'None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3=Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Publice License 2.0' ] ,
        name: "license"
    },
    {
        type:'input',
        message: "What is your GitHub username?",
        name: 'githubUser'
    },
    {
        type: "input",
        message: "What is a good contact email?",
        name: "email"
    }
    ]).then (answers => {
        //Title
        fs.appendFileSync('README.md', ( '#' + answers.title), function (err, data) {
            if(err) {
                throw err;
            }else {
            console.log("Your README was succesfully created!");
            }
        })

        //Description
            fs.appendFileSync('README.md', ('\n' + answers.description + '\n'), function(err, data) {
                if(err) {
                    throw err;
                }else {
                    console.log("Your description was succesfully added to your README file.");
                }
            })

        //Installation
            fs.appendFileSync('README.md',("#Installation" + '\n' +  answers.installation + '\n'), function(err, data) {
                if(err) {
                    throw err;
                }else {
                    console.log("Your instructions were succesfully added to your README file.");

                }
            })

        //How to use application 
            fs.appendFileSync('README.md',("#How to use the Application " + '\n' +  answers.usage + '\n'), function(err, data) {
                if(err) {
                    throw err;
                }else {
                    console.log("Your description on how to use  the application was succesfully added to your README file.");

                }
            })
        //Contributors
        fs.appendFileSync('README.md',('\n' + "#Contributors " + '\n' +  answers.contributors + '\n'), function(err, data) {
            if(err) {
                throw err;
            }else {
                console.log("Your contributors of the application were succesfully added to your README file.");

            }
        })

        //Test Instructions
        fs.appendFileSync('README.md',("#Test_Instructions" + '\n' +  answers.testInstructions + '\n'), function(err, data) {
            if(err) {
                throw err;
            }else {
                console.log("Your test instructions were succesfully added to your README file.");

            }
        })
        
        //License 
        fs.appendFileSync('README.md',("#License" + '\n' +  answers.license + '\n'), function(err, data) {
            if(err) {
                throw err;
            }else {
                console.log("Your license was succesfully added to your README file.");

            }
        })

        //GitHub User -> Questions
        fs.appendFileSync('README.md', ("#Questions" + '\n' + "Check out my gibhut page, www.github.com/" + answers.githubUser + '\n'), function(err, data) {
            if(err) {
                throw err;
            } else {
                console.log("Your GitHub username was added to your READMe.");
            }
        })

        fs.appendFile('README.md', ("If you have any questions, please email me at, " + answers.email + '\n'), function(err, data) {
            if(err) {
                throw err;
            } else {
                console.log("Your README was succesfully created.")
            }
         })

        }).catch(error => {
            if(error) {
                console.log('error', error);
            }else{
                console.log('yo its something else.');
            }
        })
