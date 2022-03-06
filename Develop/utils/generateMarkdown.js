// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let badge = "";

function renderLicenseBadge(license) {
  switch (license) {
    case "Apache_2.0":
      badge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
      break;

    case "Boost_1.0":
      badge = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
      break;

    case "MIT":
      badge = `![License](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      break;

    case "GPL_3.0":
      badge = `![License](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
      break;

    case "Unlicense":
      badge = `![License](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
      break;
  }
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache_2.0":
      link = "https://opensource.org/licenses/Apache-2.0";
      break;

    case "Boost_1.0":
      link = "https://www.boost.org/LICENSE_1_0.txt";
      break;

    case "MIT":
      link = "https://opensource.org/licenses/MIT";
      break;

    case "GPL_3.0":
      link = "https://www.gnu.org/licenses/gpl-3.0";
      break;

    case "Unlicense":
      link = "http://unlicense.org/";
      break;
  }
  return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "Unlicensed") {
    return (
      `
      This project is licensed under the ${license} license. Please see ${renderLicenseLink(license)} for more details. `
    )
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  # ${data.title}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Languages](#languages)
  * [Usage](#usage)
  * [Link to URL](#live-url-link)
  * [Contributors](#contributors)
  * [Testing](#tests)
  * [Questions](#questions)
  * [License](#license)
  

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Languages
   ${data.languages}
  ## Live URL Link
  ${data.link}
  ## Usage
  ${data.usage}
  ## Contributors
  ${data.contributors}
  ## Tests
  ${data.tests}
  ## Questions? 
  ${data.questions}
  <br>
  https://github.com/${data.github}
  ## License
  ${renderLicenseSection(data.license)}  
`;
}

module.exports = generateMarkdown;
