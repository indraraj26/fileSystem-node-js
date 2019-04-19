const notes = require('./notes');
const yargs = require('yargs');

//customize yargs version
yargs.version("1.1.0")
console.log(notes)
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
    handler: function(arg) {
        console.log('Title: '+ arg.title + " body: " + arg.body);
    }
})


//create remove method
yargs.command({
    command:'remove',
    describe: 'remove the note',
    builder: {

    },
    handler: function() {
        console.log('removing a note');
    }
})

//create a list method

yargs.command({
    command:'list',
    describe:'list a notes',
    handler: function() {
        console.log("listing the notes");
    }
})

//create a read method
yargs.command({
    command:'read',
    describe:'read a note',
    handler: function() {
        console.log("reading the notes")
    }
})

yargs.parse();
// console.log(yargs.argv)

