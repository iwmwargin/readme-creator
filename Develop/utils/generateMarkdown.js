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
//   (https://opensource.org/licenses/Apache-2.0)
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  # ${data.title}
  ## Table of Contents
  *[Description](#description)
  <br>
  *[Installation](#install)
  <br>
  *[Languages Used](#languages)
  <br>
  *[Usage](#usage)
  <br>
  *[Link to URL](#link)
  <br>
  *[Contributing](#contributors)
  <br>
  *[Testing](#tests)
  <br>
  *[Questions](#questions)
  ## ${data.description}
  ## ${data.install}
  ## ${data.languages}
  ## ${data.link}
  ## ${data.usage}
  ## ${data.contributors}
  ## ${data.tests}
  ## ${data.questions}
`;
}

module.exports = generateMarkdown;
