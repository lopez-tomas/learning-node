const { printTable, createFile } = require('./helpers/multiply');
const argv = require('./config/yargs');

console.clear();

//console.log( argv ); => To know how are represented the values and my configs.
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
