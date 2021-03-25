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
  var license = projectTest + ("## License" + "\n" + response.projectLicense + "\n");
  var readme;

  if (profile) {
    readme = license + ("## Questions" + "\n for any questions contact me at " + response.emailaddress + " or " + `[github](${profile})` + "\n");
  } else {
    readme = license + ("## Author" + "\n" + response.emailaddress + "\n");
  }


  return (readme);
}

module.exports = generateMarkdown;
