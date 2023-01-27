// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}


const inquirer = require('inquirer');
const fs = require('fs');

function init () {
    inquirer
        .prompt([
            {   type: 'input',
                message: 'What is the title of your project?',
                name: 'title'},
            {   type: 'input',
                message:'What was your motivation for your project?',
                name: 'motivation'},
            {   type: 'input',
                message:'Why did you build this project?',
                name: 'whyBuild'},
            {   type: 'input',
                message: 'What problem does your project solve?',
                name: 'problem'},
            {   type: 'input',
                message: 'What did you learn from your project?',
                name: 'learn'},
            {   type: 'input',
                message:'What are the steps required to install your project?',
                name: 'install'},
            {   type: 'input',
                message: 'What are the usage instructions for your project?',
                name: 'usage'},
            {   type: 'checkbox',
                message: 'What licenses did your project use?',
                name: 'licenses',
                choices: ['license 1', 'license 2', 'license 3']},
            {   type: 'input',
                message: 'What are the Github user names of the contributors of your project?',
                name: 'github'},
            {   type: 'input',
                message:'What are the tests for your project?',
                name: 'tests'},
            {   type: 'input',
                message: 'What is your email address?',
                name: 'email'},
        ])
        .then((answers) => {
            fs.writeFile('README.md',
            `# ${answers.title}
            
## Description

${answers.motivation} ${answers.whyBuild} ${answers.problem} ${answers.learn}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${answers.install}

## Usage

${answers.usage}

## Credits 

${answers.github}

${answers.email}

## License

${answers.license}

## Tests

${answers.tests}`,
            (err) =>
            err ? console.error(err) : console.log('README file created!'))
        })
}

init ();