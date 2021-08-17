const { printTable, createFile } = require('./helpers/multiply');
const argv = require('yargs')
								.options({
									'b': {
										alias: 'base',
										type: 'number',
										demandOption: true,
										describe: 'To establish the base.'
									},
									'l': {
										alias: 'limit',
										type: 'number',
										demandOption: true,
										describe: 'To establish the limit.'
									},
									's': {
										alias: 'show',
										type: 'boolean',
										default: false,
										describe: 'Prints on console the corresponding multiplication table.'
									}
								})								
								.check( (argv, options) => {
									if( isNaN( argv.b )) {
										throw 'The base must be a number.'
									}
									if( isNaN( argv.l )) {
										throw 'The limit must be a number.'
									}
									return true;
								})
								.argv;
	

console.clear();

console.log( argv );
let	base = argv.base;
let limit = argv.limit;
let show = argv.show;

//const [ , , arg3 = `base=${baseV}` ] = process.argv;
//const [ , base = baseV ] = arg3.split('=');
// I am not going to use it anymore, but I leave this part of the code for 'documentation'.

createFile( base, limit )
	.then( fileName => console.log(fileName, 'succesfully created.') )
	.catch( err => console.log(err) );

if ( show ) {
	printTable( base,  limit );
}
