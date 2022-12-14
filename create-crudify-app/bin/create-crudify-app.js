#!/usr/bin/env node

const commander = require("commander");
const inquirer = require("inquirer");
const package = require("../package.json");

const createApplication = require("../createApplication");

const program = new commander.Command();

program
  .name(package.name)
  .description(package.description)
  .version(package.version)
  .arguments("[projectName]")
  .action(async (projectName, options) => {
    if (!projectName) {
      const { projectName: promptProjectName } = await inquirer.prompt({
        type: "input",
        name: "projectName",
        default: "my-project",
        message: "프로젝트의 이름은 무엇인가요?",
        when: !projectName,
      });

      return createApplication(promptProjectName, options);
    }

    createApplication(projectName, options);
  })
  .parse(process.argv);
