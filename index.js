const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },

    {
        type: "input",
        message: "Please enter a description of your project.",
        name: "description"
    },

    {
        type: "input",
        message: "Please list the installation instructions for your project.",
        name: "installation"
    },

    {
        type: "input",
        message: "What will this project be used for?",
        name: "usage"
    },

    {
        type: "checkbox",
        message: "Please select a license for your project.",
        choices: [
            "None",
            "MIT License",
            "Apache License 2.0",
            "Boost Software License 1.0",
            "Mozilla Public License 2.0"
        ],
        name: "license"
    },

    {
        type: "input",
        message: "Please list the contributors to this project.",
        name: "contributing"
    },

    {
        type: "input",
        message: "Please describe how to test this project.",
        name: "tests"
    },

    {
        type: "input",
        message: "Please enter your Github username.",
        name: "username"
    },

    {
        type: "input",
        message: "Please enter your email.",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (error) {
        if (error) {
            return console.log(error);
        }
        else {
            return console.log("README sucessfully generated");
        }
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("demoREADME.md", generateMarkdown(data));
        });
}

// function call to initialize program
init();
