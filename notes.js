const fs = require('fs');
const chalk = require('chalk');

const getNotes = function() {
    return 'your notes'
}

const notes = (title, body) => {
    const note = loadNotes();
     // console.log("notes", title, body)
     const duplicatData = note.filter((note) => {
         return note.title === title
     })
    // console.log(duplicatData)
     if(duplicatData.length === 0) {
         note.push({
             title: title,
             body:body
         })
        saveNotes(note);
        console.log("adding this notes")
     } else {
         console.log("Title is already taken")
     }
}

const saveNotes =  (note) =>  {
    const dataJson = JSON.stringify(note);
    fs.writeFileSync('notes.json', dataJson);
}

const removeNotes =  (title) =>  {
    const notes = loadNotes();
    const deleteNote = notes.filter((note) => {
            return note.title !== title;
    })

    if(notes.length > deleteNote.length) {
        console.log(chalk.green.inverse("Note removed"));
        saveNotes(deleteNote);
    } else {
        console.log(chalk.red.inverse("No note found"));
    }
}


const loadNotes = () => {
    try {
        const dataBuffer =  fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e) {
        return [];
    } 
}

const listNotes = () => {
    const notes = loadNotes();  
    if(notes.length !== 0) {   
 console.log(chalk.yellow.inverse('your notes:'));
    notes.forEach(note => {
       console.log(note.title)
    }) 
}  else {
        console.log('no notes found')
}
}

const readNotes = (title) => {
    const notes = loadNotes();
    const readNote = notes.filter(note => note.title === title);
    if(readNote.length !== 0) {
        console.log(readNote)
    } else {
        console.log("this note is not found!");
    }
}

module.exports = {
    getNotes: getNotes,
    notes: notes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
};