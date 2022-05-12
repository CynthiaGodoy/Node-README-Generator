// FUNCTION TO CREATE A CLICKABLE BADGE TO A DETAILED SITE ABOUT LICENSE
function renderLicense(license) {
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

//FUNCTION TO CREATE REDUNDANT INFORMATION ON THE LICENSE
function renderInfo(license) {
  if (license === "Apache") {
    return "Apache License Version 2.0, January 2004"
    }

  if (license === "Boost") {
    return "Boost Software License - Version 1.0 - August 17th, 2003"
  }

  if (license === "BSD") {
    return "The 3-Clause BSD License"
  }

  if (license === "Creative Commons") {
    return "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication"
  }

  if (license === "Eclipse") {
    return "Eclipse Public License 1.0 (EPL-1.0)(NOTE: This license has been superseded by the Eclipse Public License version 2.0)"
}

if (license === "GNU") {
return "GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007 Copyright © 2007 Free Software Foundation, Inc."
}

if (license === "Hippocratic") {
return "Hippocratic License 3.0"
}

  if (license === "IBM") {
    return "IBM Public License Version 1.0 (IPL-1.0)"
  }

  if (license === "ICS") {
    return "ISC License (ISC)"
  }

  if (license === "MIT") {
    return "The MIT License"
  }

  if (license === "Mozilla") {
    return "Mozilla Public License 2.0 (MPL-2.0)"
  }

  if (license === "Open") {
    return "Open Data Commons Attribution License (ODC-By)"
  }

  if (license === "Unlicensed") { //RETURN AN EMPTY SCREEN
    return " "
  }
}

// FUNCTION TO GENERATE MARKDOWN FOR README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.why}
${data.problem}
${data.learn}

## Table of Contents
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Credits](#credits)
- [Questions](#questions)
- [Contribute](#contribute)
- [Screenshot](#Screenshot)

## License
${renderLicense(data.license)}
For detailed license information click on the badge. This project is licensed under: ${renderInfo(data.license)}

## Installation
To install this application, please follow the steps below:
${data.install}

## Usage
To use this application, please follow the steps below:
${data.usage}

## Tests
To run a test on this application, please follow the steps below:
${data.tests}

## Credits
Credits & Third-party Sources used are:
${data.credits}
${data.thirdparty}

## Questions
If you have any questions about this project, please contact me directly at ${data.email}. 
You can view more of my projects at [My GitHub](https://github.com/${data.github}).

## Contribute
The industry standard for [open source communities](https://www.contributor-covenant.org/)
${data.contribute}

## Screenshot
![](images/screenshot.PNG)

`;
}

module.exports = generateMarkdown;