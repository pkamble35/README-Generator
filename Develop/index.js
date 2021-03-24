// array of questions for user
var inquirer = require("inquirer");
var fs = require('fs');


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

];

// function to write README file
function writeToFile(fileName, data) {


    fs.writeFile(fileName, data, function (err) {
        if (err) return console.log(err);
        console.log('readme file');
    });



}

//function to create Template of Readme

function generateReadme(response) {

    var projectTitle = ("# " + response.projectTitle + "\n");
    var projectDiscription = (response.projectDiscription + "\n");
    var projectInstallation = ("## Installation" + "\n" + response.projectInstallationInstructions + "\n");
    var projectUsage = ("## Usage" + "\n" + response.projectUsageInformation + "\n");
    var projectContribution = ("## Contribution" + "\n" + response.projectContributionGuidelines + "\n");
    var projectTest = ("## Test" + "\n" + response.projectTestInstructions + "\n");
    var license = ("## License" + "\n" + response.projectLicense + "\n");
    var contact = ("## Author" + "\n" + response.emailaddress + "\n");


    return (projectTitle + projectDiscription + projectInstallation + projectUsage +
        projectContribution + projectTest + license + contact);



}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(function (response) {
            var readme = generateReadme(response);
            writeToFile("README.md", readme);





        });

}

// function call to initialize program
init();
