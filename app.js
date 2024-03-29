const notes = require('./notes');
const yargs = require('yargs');

// console.log(notes.getNotes())

//customize yargs version
yargs.version("1.1.0")
//create add method

yargs.command({
    command:'add',
    describe: 'add a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body',
            demandOption: true,
            type:'string'
        }
    },
    handler: (arg) => {
      //  console.log('Title: '+ arg.title + " body: " + arg.body);
      notes.notes(arg.title, arg.body);
    }
})


//create remove method
yargs.command({
    command:'remove',
    describe: 'remove the note',
    builder: {
         title: {
             describe: "remove a note",
             demandOption: true,
             type:'string'
         }
    },
    handler: (arg) => {
        //console.log('removing a note', arg.title);
        notes.removeNotes(arg.title);
    }
})

//create a list method

yargs.command({
    command:'list',
    describe:'list a notes',
    handler: () => {
        // console.log("listing the notes");
         notes.listNotes();
    }
})

//create a read method
yargs.command({
    command:'read',
    describe:'read a note',
    builder: {
        title:{
            describe:'read a note',
            type:'string',
            demandOption: true
        }
    },
    handler: (arg) => {
        // console.log("reading the notes", arg.title)
        notes.readNotes(arg.title);
    }
})

yargs.parse();
// console.log(yargs.argv)

