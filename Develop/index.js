// array of questions for user
var inquirer = require("inquirer");
var fs = require('fs');
const axios = require("axios");

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
        choices: ["MIT", "Apache"]
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
// This function gets the github link for entered github user name
async function getGitProfile(username){
    const queryUrl = `https://api.github.com/users/${username}`;

    let res = await  axios.get(queryUrl);
      return res.data.url;
}
// function to write README file
function writeToFile(fileName, data) {


    fs.writeFile(fileName, data, function (err) {
        if (err) return console.log(err);
        console.log('readme file generated');
    });



}

//function to create Template of Readme

function generateReadme(response,profile) {

    var projectTitle = ("# " + response.projectTitle + "\n"); 
    
    var projectDiscription =projectTitle + (response.projectDiscription + "\n");
    var tableOfContent = projectDiscription +("##### Table of Contents "+"\n"
    +"[Installation](#Installation)\n"
    +"[Usage](#Usage)\n"
    +"[License](#License)\n"
    +"[Contributing](#Contributing)\n"
    +"[Test](#Test)\n"
    );
    var projectInstallation = tableOfContent + projectDiscription+("## Installation" + "\n" + response.projectInstallationInstructions + "\n");
    var projectUsage = projectInstallation+ ("## Usage" + "\n" + response.projectUsageInformation + "\n");
    var projectContribution = projectUsage+("## Contribution" + "\n" + response.projectContributionGuidelines + "\n");
    var projectTest = projectContribution+("## Test" + "\n" + response.projectTestInstructions + "\n");
    var license =projectTest+ ("## License" + "\n" + response.projectLicense + "\n");
    var readme;
    
    if(profile){
        readme = license+("## Questions" + "\n for any questions contact me at " + response.emailaddress + " or " + `[github](${profile})`+"\n");
    }else{
        readme = license+("## Author" + "\n" + response.emailaddress + "\n");
    }
    

    return (readme);



}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(async function (response) {
            var profile =  await getGitProfile(response.username);
            var readme = generateReadme(response,profile);
            writeToFile("README.md", readme);
        });

}

// function call to initialize program
init();
