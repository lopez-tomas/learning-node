const { multiply, printTable, createFile } = require('./helpers/multiply');

console.clear();

const base = 5;
const limit = 10;

createFile( base, limit )
	.then( fileName => console.log(fileName, 'succesfully created.') )
	.catch( err => console.log(err) );

printTable( base, multiply( base, limit ) );
