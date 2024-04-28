// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {

  switch (license) {
    case 'Apache 2.0':
      return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    case 'BSD 3-Clause':
      licenseBadge = `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]`;
      break;
    case 'GNU AGPLv3.0':
      licenseBadge = `![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]`;
      break;
    case 'GNU GPLv3.0':
      licenseBadge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
      break;
    case 'MIT':
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      break;
    case 'Mozilla Public 2.0':
      licenseBadge = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]`;
      break;
    default:
      return '';
}
};

// Function that returns the license link
function renderLicenseLink(license) {

  switch (license) {
    case 'Apache 2.0':
      return `[Apache 2.0](https://opensource.org/licenses/Apache-2.0)`;
    case 'BSD 3-Clause':
      licenseBadge = `[BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case 'GNU AGPLv3.0':
      licenseBadge = `[GNU AGPLv3.0](https://www.gnu.org/licenses/agpl-3.0)`;
      break;
    case 'GNU GPLv3.0':
      licenseBadge = `[GNU GPLv3.0](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case 'MIT':
      return `[MIT](https://opensource.org/licenses/MIT)`;
      break;
    case 'Mozilla Public 2.0':
      licenseBadge = `[Mozilla Public 2.0](https://opensource.org/licenses/MPL-2.0)`;
      break;
    default:
      return '';
}
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  return `This project is covered under the ${renderLicenseLink(license)} license.
  
  ${renderLicenseBadge(license)}`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title} 
${renderLicenseBadge(data.license)}
## Description
${data.Description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Credits](#credits)
- [Questions](#questions)

## Installation
${data.Installation_Instructions}

## Usage
${data.Usage_Information}

## Contribution
${data.Contribution_Guidelines}

## Tests
${data.Test_Instructions}

## License
${renderLicenseSection(data.license)}

## Questions
Got questions? Use the info below to contact me!<br>
GitHub: [@${data.githubUser}](https://github.com/${data.githubUser}/)\n\n <br>
Email: [${data.email}](mailto:${data.email})\n`;
}

module.exports = generateMarkdown;
