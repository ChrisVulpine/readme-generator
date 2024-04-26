// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');
const readmeGen = require("./utils/generateMarkdown");

// Questions
    const questions = [
    {
        type: 'confirm',
        name: 'intro',
        message: chalk.green(`Hello! I'm your personal README generator helper. ^-^ Are you ready to create your awesome README file?`)
    },
    {
        type: 'input',
        name: 'title',
        message: `I am going to assume you said yes! Who would say no to the first prompt anyways? -_-; Please Enter your project title:`
    },
    {   type: 'input',
        name: 'Description',
        message: chalk.green(`That's an amazing title! Now, describe your project:`)
    },
    {   type: 'input',
        name: 'Installation_Instructions',
        message: `Wow! Your project sounds incredible! What are the installation instructions:`
    },
    {   type: 'input',
        name: 'Usage_Information',
        message: chalk.green(`You are doing great! Please provide the Usage Information:`)
    },
    {   type: 'input',
        name: 'Contribution_Guidelines',
        message: `Nice! How can people contribute to your project? Provide Contribution Guidelines:`
    },
    {   type: 'input',
        name: 'Test_Instructions',
        message: chalk.green(`I'm sure your code has no bugs...but if it did, please provide Test Instructions:`)
    },
    {
        type: 'list',
        name: 'license',
        message: `Legal time! Please select a license to use for your project (I've provided the most common ones.):`,
        choices: ['Apache 2.0', 'BSD 2-Clause', 'BSD 3-Clause', 'GNU AGPLv3.0', 'GNU GPLv2.0', 'GNU GPLv3.0', 'MIT', 'Mozilla Public 2.0'],
    },

    {   type: 'input',
        name: 'githubUser',
        message: chalk.green('What is your GitHub User Name?')
    },

    {   type: 'input',
        name: 'email',
        message: `I'll be sure to follow you! What is your email address?`
    },
]

// Function to write README file
function writeToFile(filename, content) {

    fs.writeFile(filename, content, (err) =>
    err ? console.log(err) : console.log('Nice work! Your Readme has been generated. It was a pleasure working with you. ^-^ Enjoy!')
    );
};

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const createReadme = readmeGen(answers);
        writeToFile('README.md', createReadme);
    })
}

// Function call to initialize app
init();
