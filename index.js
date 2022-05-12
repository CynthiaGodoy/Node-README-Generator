// PACKAGES NEEDED FOR APPLICATION
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown")

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
        type: "list",
        message: "Choose a license for your project.",
        name: "license",
        choices: ["Apache", "Boost", "BSD", "Creative Commons", "Eclipse", "GNU", "Hippocratic", "IBM",  "ICS", "MIT", "Mozilla", "Open", "Unlicensed"]
        },
        {
        type: "input",
        message: "How can the user install this application?",
        name: "install",
        },   
        {
        type: "input",
        message: "How do you use this application?",
        name: "usage",
        },   
        {
        type: "input",
        message: "Are there any tests on this application? If yes, please describe.",
        name: "tests",
        }, 
        {
        type: "input",
        message: "List collaborators with a link to their profile.",
        name: "credits",
        },   
        {
        type: "input",
        message: "Were there any third party assets or tutorial used?",
        name: "thirdparty",
        },
        {
        type: "input",
        message: "Add your email so users can ask questions.",
        name: "email",
        }, 
        {
        type: "input",
        message: "Add your gitHub username so users can collaborate.",
        name: "github",
        },   
        {
        type: "input",
        message: "How can others contribute? Permission to fork the repo?",
        name: "contribute",
        }, 
        {
        type: "input",
        message: "Add a screenshot using ![](images/screenshot.PNG)",
        name: "screenshot",
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