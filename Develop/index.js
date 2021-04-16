// Require inquirer packages and fs
const inquirer = require('inquirer');
const fs = require('fs');

// Functions
function init(){
inquirer
  .prompt([
    {
    type: 'input',
    name: 'title',
    message: 'Please enter the title of the application:',
    },
    {
    type: 'input',
    name: 'description',
    message: 'Please enter a brief description of the application:',
    },
    {
    type: 'input',
    name: 'installation',
    message: 'Please enter installation instructions for the application:',
    },
    {
    type: 'input',
    name: 'usage',
    message: 'Please enter usage information for the application:',
    },
    {
    type: 'input',
    name: 'contribution',
    message: 'Please enter contribution guidelines for the application:',
    },
    {
    type: 'input',
    name: 'test',
    message: 'Please enter test instructions for the application:',
    },
    {
    type: 'list',
    message: 'Please select the license under which the application is covered:',
    name: 'license',
    choices: ["None", 
    "Apache 2.0 License",
    "Boost Software License 1.0",
    "BSD 3-Clause License",
    "BSD 2-Clause License",
    "ISC License (ISC)",
    "The MIT License",
    "Mozilla Public License 2.0",
    ],},
    {
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username:',
    },
    {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address:',
    },
  ])
  .then((readmeData) => {
    let readmeText = '';
    let licLink = "";


    switch(readmeData.license){
    case "Apache 2.0 License":
        licLink = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
    case "Boost Software License 1.0":
        licLink = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        break;
    case "BSD 3-Clause License":
        licLink = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        break;
    case "BSD 2-Clause License":
        licLink = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    case "ISC License (ISC)":
        licLink = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
        break;
    case "The MIT License":
          licLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
          break;
    case "Mozilla Public License 2.0":
          licLink = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
          break;
    default:
        licLink = "";
    }
  

    readmeText += `
# ${readmeData.title}

${licLink}

Table of contents
=================

<!--ts-->
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Testing](#testing)
* [License](#license)
* [Questions](#questions)
<!--te-->

## Description
===========

${readmeData.description}

## Installation
============

${readmeData.installation}

## Usage
=====

${readmeData.usage}

## Contribution
============ 

${readmeData.contribution}

## Testing
======= 

${readmeData.test}

## License
=======

${readmeData.license}

## Questions
=========

Email:    [${readmeData.email}](mailto:${readmeData.email}) with additional questions or comments

GitHub:   [github.com/${readmeData.github}](https://github.com/${readmeData.github})`

  writeToFile(readmeText);
  })};


  function writeToFile(writeText) {
    fs.writeFile("README.md", writeText, (err) =>
    err ? console.log(err) : console.log('Success!'));
  };

init();