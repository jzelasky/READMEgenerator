// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

const inquirer = require('inquirer');
const fs = require('fs');

const questions = ['What is the title of your project?', 'What was your motivation for your project?', 'Why did you build this project?', 'What problem does your project solve?', 'What did you learn from your project?', 'What are the steps required to install your project?', 'What are the usage instructions for your project?', 'What licenses did your project use?', 'What are the Github user names of the contributors of your project?', 'What are the tests for your project?', 'What is your email address?']
const {title, motivation, whyBuild, problem, learn, install, instructions, licenses, github, tests, email} = questions

