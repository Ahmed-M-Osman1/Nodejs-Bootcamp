const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note)=> note.title === title)
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.inverse.green("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const checkNote = notes.filter((note) =>note.title !== title);
  if(checkNote.length < notes.length){
    console.log(chalk.inverse.green('Note was Removed.'))
  }else{
    console.log(chalk.red.inverse('No Note found!'))
  }
  saveNotes(checkNote);
};

const listNotes = () => {
  console.log(chalk.bgCyan('Your Notes :'));
  const notes = loadNotes();
  notes.forEach(note => {
    console.log(note.title)
  });
}

const readNotes = (title) =>{
  const notes = loadNotes();
  const noteToRead = notes.find((note)=> note.title === title)
if(noteToRead){
  console.log(chalk.inverse(noteToRead.title))
  console.log(noteToRead.body)}
  else {
    console.log(chalk.bgRed('Note not found!'))
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes,
};
