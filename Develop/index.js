// array of questions for user
var inquirer = require("inquirer");


const questions = [
    {
        type: "input",
        message: "What is your Project Title?",
        name: "projectTitle"
    },

    {
        type: "input",
        message: "What is your Project Discription?",
        name: "projectDiscription"
    },
    {
        type: "input",
        message: "What is your Project Installation Instructions?",
        name: "projectInstallationInstructions"
    },

    {
        type: "input",
        message: "What is your Project Usage Information?",
        name: "projectUsageInformation"
    },

    {
        type: "input",
        message: "What is your Project Contribution Guidelines?",
        name: "projectContributionGuidelines"
    },

    {
        type: "input",
        message: "What is your Project Test Instructions?",
        name: "projectTestInstructions"
    },

    {
        type: "list",
        message: "What License do you need?",
        name: "projectLicense",
        choices: ["License 1", "License2"]
    },

    {
        type: "input",
        message: "What is your Github user name?",
        name: "username"
    },

    {
        type: "input",
        message: "What is your email address?",
        name: "emailaddress"
    },

    {
        type: "input",
        message: "Please click on links from Table of contents?",
        name: "clickOnLinks"
    },


    {
        type: "input",
        message: "What is your Project Test Instructions?",
        name: "projectTestInstructions"
    }

];

// function to write README file
function writeToFile(fileName, data) {

    

}

//function to create Template of Readme

function generateReadme(response) {

    var projectTitle = ( "# "  +  response.projectTitle  + "\n");
    var projectDiscription = (response.projectDiscription + "\n");
    var projectInstallation = ("## Installation" + "\n" + response.projectInstallationInstructions + "\n");
    console.log(projectTitle + projectDiscription + projectInstallation);



}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(response) {


        generateReadme(response);
        
});

}

// function call to initialize program
init();
