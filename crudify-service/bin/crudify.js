#!/usr/bin/env node

const commander = require("commander");
const start = require("crudify-service/commands/start");
const manage = require("crudify-service/commands/manage");

const program = new commander.Command();

program
  .command("start")
  .alias("s")
  .option("--server-only", "Do not open dashboard, start server only")
  .description("start crudify server and open dashboard")
  .action(start);

program
  .command("manage")
  .description("open crudify server dashboard")
  .action(manage);

program.parseAsync(process.argv);
