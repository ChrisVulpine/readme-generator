// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const readmeGen = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter your project title:'
        },
//     {   type: 'input',
//         name: 'Description',
//         message: 'Describe your project:'
//     },
//     {   type: 'input',
//         name: 'Installation Instructions',
//         message: 'Provide installation instructions:'
//     },
//     {   type: 'input',
//         name: 'Usage Information',
//         message: 'Provide Usage Information:'
//     },
//     {   type: 'input',
//         name: 'Contribution Guidelines',
//         message: 'Provide Contribution Guidelines:'
//     },
//     {   type: 'input',
//         name: 'Test Instructions',
//         message: 'Provide Test Instructions:'
//     },

//     {   type: 'checkbox',
//         name: 'License',
//         message: 'Choose your license from the options below:',
//         choices: ['MIT', 'Potato', 'Other'],
//     },

//     {   type: 'input',
//         name: 'GitHub User Name',
//         message: 'What is your GitHub User Name?'
//     },

//     {   type: 'input',
//         name: 'Email Address',
//         message: 'What is your email address?'
//     },
])
.then((data) => {
    const filename = `README.md`;
    const content = `
# ${data.title}

## Description
<!-- Add your project description here -->

## Installation Instructions
<!-- Add your installation instructions here -->

## Usage Information
<!-- Add your usage information here -->

## Contribution Guidelines
<!-- Add your contribution guidelines here -->

## Test Instructions
<!-- Add your test instructions here -->

## License
<!-- Add your license here -->

## Questions
<!-- Add your GitHub username and email address here -->

        `;

    fs.writeFile(filename, content, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
});
// .then(writeToFile);

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {

    

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//     err ? console.log(err) : console.log('Success!')
// );};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
