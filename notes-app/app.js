const chalk = require("chalk");
const { demandOption, argv } = require("yargs");
const yargs = require("yargs");
const notes = require("./notes.js");

//customize yargs version.
yargs.version("1.1.1");

//create add command

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//create remove command

yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

//create read command

yargs.command({
  command: "read",
  describe: "read note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.readNotes(argv.title)
  }
});

//create list command

yargs.command({
  command: "list",
  describe: "list notes",
  handler: function () {
    notes.listNotes()
  }
});

//add, remove, read, list

yargs.parse();
//console.log(yargs.argv)
