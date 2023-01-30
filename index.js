const inquirer = require('inquirer');
const fs = require('fs');
let badge

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
                choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'Mozilla Public License 2.0', 'The Unlicense', 'Other']},
            {   type: 'input',
                message: 'If anyone other than yourself worked on this project please list their github usernames.',
                name: 'contributing'},
            {   type: 'input',
                message:'What are the tests for your project?',
                name: 'tests'},
            {   type: 'input',
                message: 'What is your email address?',
                name: 'email'},
            {   type: 'input',
                message: 'What is your github username?',
                name: "github"}
        ])
        .then((answers) => {
            if (String(answers.licenses) === 'Apache License 2.0'){
                 badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            } else if (String(answers.licenses) === 'GNU General Public License v3.0'){
                badge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
            } else if (String(answers.licenses) === 'MIT License'){
                badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            } else if (String(answers.licenses) === 'BSD 2-Clause "Simplified" License'){
                badge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
            } else if (String(answers.licenses) === 'BSD 3-Clause "New" or "Revised" License'){
                badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
            } else if (String(answers.licenses) === 'Boost Software License 1.0'){
                badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
            } else if (String(answers.licenses) === 'Creative Commons Zero v1.0 Universal'){
                badge = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'
            } else if (String(answers.licenses) === 'Eclipse Public License 2.0'){
                badge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
            } else if (String(answers.licenses) === 'Mozilla Public License 2.0'){
                badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
            } else if (String(answers.licenses) === 'The Unlicense'){
                badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
            } else if (String(answers.licenses) === 'Other'){
                badge = ''
            } 
    
            fs.writeFile('README.md',
            `
# ${answers.title}

${badge}
            
## Description

${answers.motivation} ${answers.whyBuild} ${answers.problem} ${answers.learn}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

${answers.install}

## Usage

${answers.usage}

## Contributing

${answers.contributing}

## License

${answers.licenses}

## Tests

${answers.tests}

## Questions

For any questions about this project please contact:

github.com/${answers.github}

${answers.email}
`,
            (err) =>
            err ? console.error(err) : console.log('README file created!'))
        })
}

init ();