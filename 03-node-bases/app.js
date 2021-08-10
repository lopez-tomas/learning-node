const { printTable, createFile } = require('./helpers/multiply');

console.clear();

const [ , , arg3 = 'base=5' ] = process.argv;
const [ , base = 5 ] = arg3.split('=');

//const base = 5;
const limit = 10;

createFile( base, limit )
	.then( fileName => console.log(fileName, 'succesfully created.') )
	.catch( err => console.log(err) );

printTable( base,  limit );
