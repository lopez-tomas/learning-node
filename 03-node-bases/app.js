const { printTable, createFile } = require('./helpers/multiply');

console.clear();

const baseV = 2;
const limit = 10;

const [ , , arg3 = `base=${baseV}` ] = process.argv;
const [ , base = baseV ] = arg3.split('=');


createFile( base, limit )
	.then( fileName => console.log(fileName, 'succesfully created.') )
	.catch( err => console.log(err) );

printTable( base,  limit );
