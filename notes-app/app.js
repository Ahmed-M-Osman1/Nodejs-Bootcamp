const chalk = require('chalk')
const { demandOption } = require('yargs')
const yargs = require('yargs')
const getNotes = require('./notes.js')

//customize yargs version.
yargs.version('1.1.1')

//create add command

yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler: function(argv){
        console.log( 'Title: '+ argv.title)
        console.log( 'Body: '+ argv.body)

    }
})

//create remove command

yargs.command({
    command:'remove',
    describe: 'remove a note',
    handler: function(){
        console.log('remove a note from library.')
    }
})

//create read command

yargs.command({
    command:'read',
    describe: 'read note',
    handler: function(){
        console.log('reading a note from library.')
    }
})


//create list command

yargs.command({
    command:'list',
    describe: 'list notes',
    handler: function(){
        console.log('list library notes.')
    }
})

//add, remove, read, list

yargs.parse()
//console.log(yargs.argv)