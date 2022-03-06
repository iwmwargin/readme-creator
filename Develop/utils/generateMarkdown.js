// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
  let licenseBadges = [];
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`




}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log(license)
  let licenseLink = [];
  return `(https://opensource.org/licenses/Apache-2.0)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}${renderLicenseLink()}
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
  

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Languages Used
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
  https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
