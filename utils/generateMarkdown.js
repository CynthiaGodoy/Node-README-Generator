// FUNCTION TO CREATE A LICENSE TO PASS THROUGH "Apache", "Boost", "BSD", "Creative Commons", "Eclipse", "GNU", "Hippocratic", "IBM",  "ICS", "MIT", "Mozilla", "Open", "Unlicensed"
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }

  if (license === "Boost") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  }

  if (license === "BSD") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }

  if (license === "Creative Commons") {
    return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
  }

  if (license === "Eclipse") {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  }

  if (license === "GNU") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }

  if (license === "Hippocratic") {
    return "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)"
  }

  if (license === "IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  }

  if (license === "ICS") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  }

  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }

  if (license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }

  if (license === "Open") {
    return "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)"
  }

  if (license === "Unlicensed") { //RETURN AN EMPTY SCREEN
    return " "
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) { }
// 
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) { }

// FUNCTION TO GENERATE MARKDOWN FOR README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.why}
${data.problem}
${data.learn}

## Table of Contents
- [License](#License)
- [Installation and Testing](#Installation and Testing)
- [Features](#Features)
- [Credits](#Credits)
- [Tests](#Tests)
- [Questions](#Questions)
- [How to Contribute](#How to Contribute)
- [Screenshot](#Screenshot)

## License

This project is licensed under ${renderLicense(data.license)}

## Installation and Testing

To install or use this application, please follow the steps below:

${data.install}

## Features

${data.features}

## Credits & Third-party tutorials

${data.contributors}
${data.third-party}

## Questions

If you have any questions about this project, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.

## How to Contribute

${data.contribute}
The industry standard for [open source communities](https://www.contributor-covenant.org/).

## Screenshot

![](images/screenshot.PNG)

`;
}

module.exports = generateMarkdown;