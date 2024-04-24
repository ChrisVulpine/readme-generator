// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const readmeGen = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
    const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:'
    },
    {   type: 'input',
        name: 'Description',
        message: 'Describe your project:'
    },
    {   type: 'input',
        name: 'Installation_Instructions',
        message: 'Provide installation instructions:'
    },
    {   type: 'input',
        name: 'Usage_Information',
        message: 'Provide Usage Information:'
    },
    {   type: 'input',
        name: 'Contribution_Guidelines',
        message: 'Provide Contribution Guidelines:'
    },
    {   type: 'input',
        name: 'Test_Instructions',
        message: 'Provide Test Instructions:'
    },
    {   type: 'checkbox',
        name: 'License',
        message: 'Choose your license from the options below:',
        choices: ['MIT', 'Potato', 'Other'],
    },

    {   type: 'input',
        name: 'GitHub User Name',
        message: 'What is your GitHub User Name?'
    },

    {   type: 'input',
        name: 'Email Address',
        message: 'What is your email address?'
    },
]


// TODO: Create a function to write README file
function writeToFile() {
    inquirer.prompt(questions)
    .then((data)=> {
    
    const filename = `README.md`;
    const content = `# ${data.title}

## Description
${data.Description}

## Installation Instructions
${data.Installation_Instructions}

## Usage Information
${data.Usage_Information}

## Contribution Guidelines
${data.Contribution_Guidelines}

## Test Instructions
${data.Test_Instructions}

## License
${data.License}

## Questions
${data.Questions}

        `;

    fs.writeFile(filename, content, (err) =>
    err ? console.log(err) : console.log('Your Readme has been generated ^-^ !')
    );
})
};

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
