// PACKAGES NEEDED FOR APPLICATION
const inquirer = require("inquirer");
const fs = require("fs");

const generatorMardown = require("./utils/generatorMarkdown")

// const questions = [
inquirer
    .prompt([
        {
        type: "input",
        message: "What is the title of this project?",
        name: "title",
        },   
        {
        type: "input",
        message: "Why did you build this project?",
        name: "why",
        },  
        {
        type: "input",
        message: "What problems did it solve?",
        name: "problem",
        },   
        {
        type: "input",
        message: "What did you learn?",
        name: "learn",
        },   
        {
        type: "input",
        message: "How can the user install this application?",
        name: "install",
        },   
        {
        type: "input",
        message: "Add a screenshot using ![](images/screenshot.PNG)",
        name: "screenshot",
        },   
        {
        type: "input",
        message: "What are the key features of the application?",
        name: "features",
        },   
        {
        type: "input",
        message: "List collaborators and links to GitHub profiles.",
        name: "contributors",
        },   
        {
        type: "input",
        message: "Were there any third party assets or tutorial used?",
        name: "third-party",
        },    
        {
        type: "input",
        message: "Add your gitHub so users can collaborate.",
        name: "gitHub",
        },   
        {
        type: "input",
        message: "Add your email so users can ask questions.",
        name: "email",
        },  
        {
        type: "input",
        message: "How can others contribute?",
        name: "contribute",
        },     
        {
        type: "list",
        message: "Choose a license for your project.",
        name: "license",
        choices: ["Apache", "Boost", "BSD", "Creative Commons", "Eclipse", "GNU", "Hippocratic", "IBM",  "ICS", "MIT", "Mozilla", "Open", "Unlicensed"]
        },

    ]).then((data) => {
        console.log(data);
        fs.writeFile("sampleREADME.md", generateMarkdown(data), //FUNCTION TO WRITE README FILE
        error => {
            if (error) {
            console.log("Please input all the data")
        }
        console.log("Your README was generated")
        }
        )})
    // ];

// TODO: Create a function to initialize app
// function init() {}
// 
// Function call to initialize app
// init();
