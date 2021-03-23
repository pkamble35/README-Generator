// array of questions for user
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
    name: "projectInstallationInstructions "
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
    name:"projectTestInstructions"
},

{
    type: "input",
    message: "What License do you need for project?",
    name: "projectLicense",
    choices:["License 1",  "License2"]
},

{
    type: "input",
    message: "What is your Github user name?",
    name:"username"
},

{
    type: "input",
    message: "What is your email address?",
    name:"emailaddress"
},

{
    type: "input",
    message: "click on links from Table of contents?",
    name:"clickOnLinks"
},


{
    type: "input",
    message: "What is your Project Test Instructions?",
    name:"projectTestInstructions"
},

];

// function to write README file
function writeToFile(fileName, data) {

    

}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(response) {
        console.log(response);
});

}

// function call to initialize program
init();
