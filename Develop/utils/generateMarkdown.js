// function to generate markdown for README
function generateMarkdown(response, profile) {

  var projectTitle = ("# " + response.projectTitle + "\n");

  var projectDiscription = projectTitle + (response.projectDiscription + "\n");
  var tableOfContent = projectDiscription + ("##### Table of Contents " + "\n"
  + "==================================\n"
    + "* [Installation](#Installation)\n"
    + "* [Usage](#Usage)\n"
    + "* [License](#License)\n"
    + "* [Contributing](#Contributing)\n"
    + "* [Test](#Test)\n"
  );
  var projectInstallation = tableOfContent + projectDiscription + ("## Installation" + "\n" + response.projectInstallationInstructions + "\n");
  var projectUsage = projectInstallation + ("## Usage" + "\n" + response.projectUsageInformation + "\n");
  var projectContribution = projectUsage + ("## Contribution" + "\n" + response.projectContributionGuidelines + "\n");
  var projectTest = projectContribution + ("## Test" + "\n" + response.projectTestInstructions + "\n");
  var license = projectTest + ("## License" + "\n" );
  if(response.projectLicense === "MIT"){
    license = license +"[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/) \n";
  }else{
    license = license +"[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html) \n";
  }  
  
  var readme;

  if (profile) {
    readme = license + ("## Questions" + "\n for any questions contact me at " + response.emailaddress + " or " + `[Github](${profile})` + "\n");
  } else {
    readme = license + ("## Questions" + "\n for any questions contact me at " + response.emailaddress + "\n");
  }


  return (readme);
}

module.exports = generateMarkdown;
