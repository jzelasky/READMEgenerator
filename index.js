// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}


const inquirer = require('inquirer');
const fs = require('fs');

const questions = ['What is the title of your project?', 'What was your motivation for your project?', 'Why did you build this project?', 'What problem does your project solve?', 'What did you learn from your project?', 'What are the steps required to install your project?', 'What are the usage instructions for your project?', 'What licenses did your project use?', 'What are the Github user names of the contributors of your project?', 'What are the tests for your project?', 'What is your email address?']
const {title, motivation, whyBuild, problem, learn, install, instructions, licenses, github, tests, email} = questions

function init () {
    inquirer
        .prompt([
            {   type: 'input',
                message: title,
                name: 'title'},
            {   type: 'input',
                message: motivation,
                name: 'motivation'},
            {   type: 'input',
                message: whyBuild,
                name: 'whyBuild'},
            {   type: 'input',
                message: problem,
                name: 'problem'},
            {   type: 'input',
                message: learn,
                name: 'learn'},
            {   type: 'input',
                message: install,
                name: 'install'},
            {   type: 'input',
                message: instructions,
                name: 'instructions'},
            {   type: 'checkbox',
                message: licenses,
                name: 'licenses',
                choices: ['license 1', 'license 2', 'license 3']},
            {   type: 'input',
                message: github,
                name: 'github'},
            {   type: 'input',
                message: tests,
                name: 'tests'},
            {   type: 'input',
                message: email,
                name: 'email'},
        ])
}

init ();