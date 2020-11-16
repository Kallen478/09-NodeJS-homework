// function to generate markdown for README
function generateMarkdown(data) {
  return `
# Title: ${data.title}

# Description: ${data.description}

# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Username](#username)
* [Email](#email)

# Installation: ${data.installation}

# Usage: ${data.usage}

# License: ${data.license}

# Contributing: ${data.contributing}

# Tests: ${data.tests}

# Username: ${data.username}

# Email: ${data.email}

Contact me with any questions via email

`;
}

module.exports = generateMarkdown;