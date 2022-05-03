// PACKAGES NEEDED FOR APPLICATION
const inquirer = require("inquirer");
const fs = require("fs")
const generator = require("./utils/generatorMarkdown")

inquirer
    .prompt([
        {
        type: "input",
        message: "What is the title of this project?",
        name: "title",
        },   
        {
        type: "input",
        message: "What is the project description?",
        name: "description",
        },  
        {
        type: "input",
        message: "What is the main objective?",
        name: "objective",
        },   
        {
        type: "checkbox",
        message: "What was used to make this project?",
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Node.js', 'API'],
        name: "files",
        },   
        {
        type: "input",
        message: "How do you use this project?",
        name: "use",
        },   
        {
        type: "input",
        message: "What is the live URL link?",
        name: "url",
        },   
        {
        type: "input",
        message: "Add a screenshot using ![](images/screenshot.PNG)",
        name: "screenshot",
        },   
        {
        type: "list",
        message: "Choose a license for your project.",
        name: "license",
        choices: ["Apache", "Academic", "GNU", "ICS", "MIT", "Mozilla", "Open"]
        },   
    ]).then((data) => {
        console.log(data);
        fs.writeFile("sampleREADME.md", generateMarkdown(data),
        error => {
            if (error) {
            console.log("Please input all the data")
        }
        console.log("Your README was generated")
        }
        )})



// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
