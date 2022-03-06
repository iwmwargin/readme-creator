// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },

    {
        type: "input",
        name: "description",
        message: "Please provide a short description of what your project is about.",
        validate: projectDesc => {
            if (projectDesc) {
                return true;
            } else {
                console.log("Please describe your project!");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running (if required)"

    },
    {

        type: "checkbox",
        name: "languages",
        message: "What did you build this project with? (Check all that apply)",
        choices: ["JavaScript", "HTML", "CSS", "ES6", "jQuery", "Bootstrap", "Node"]
    },

    {
        type: "input",
        name: "link",
        message: "Enter the URL link to your project. (Required)",
        validate: link => {
            if (link) {
                return true;
            } else {
                console.log("Please provide a link to your project!");
                return false;
            }
        }
      },

      {
          type: "input",
          name: "usage",
          message: "Please provide instructions on how to use your project!"
      },

      {
        type: "list",
        name: "license",
        message: "What license would you like to use?",
        choices:["Apache_2.0", "Boost_1.0", "MIT", "GPL_3.0", "Unlicense"]
    },

    {
        type: "input",
        name: "contributors",
        message: "Who contributed to the creation of your app?"
    },

    {
        type: "input",
        name: "tests",
        message: "Please give explicit instructions on how to run all necessary tests. Supply libraries used for testing and provide necessary commands."
    },

    {
        type: "input",
        name: "questions",
        message: "Insert your email address here so you can be reached if there are questions!",
        validate: link => {
            if (link) {
                return true;
            } else {
                console.log("Please provide an email address!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "github",
        message: "Insert your GitHub username here so you can be reached if there are questions!",
        validate: link => {
            if (link) {
                return true;
            } else {
                console.log("Please provide an GitHub username!");
                return false;
            }
        },
    },

    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile("./README.md", generateMarkdown(answers), err =>
        {
            if (err) {
                console.error(err)
                return
            }
        })
        console.log(answers)
    })
}

// Function call to initialize app
init();
