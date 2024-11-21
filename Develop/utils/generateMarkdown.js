// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return '';
  } else {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  /*if (license === 'none') {
    return '';
  } else {
    return `[License](#license)`;
  }*/
 switch (license) {
    case 'MIT':
      return `[MIT](https://opensource.org/licenses/MIT)`;
    case 'GNU GPLv3':
      return `[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)`;
    case 'Apache 2.0':
      return `[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)`;
    case 'ISC':
      return `[ISC](https://opensource.org/licenses/ISC)`;
    default:
      return '';
    case 'None':
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
  } else {
    return `## License
    This project is licensed under the ${license} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)


## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.test}

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Questions
[GitHub]https://github.com/${data.github}\n
[Email] for more questions, email me at: ${data.email}

`;
}

export default generateMarkdown;
