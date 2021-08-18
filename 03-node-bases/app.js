const { printTable, createFile } = require('./helpers/multiply');
const argv = require('./config/yargs');
const colors = require('./config/colors');

console.clear();

//console.log( argv ); => To know how are represented the values and my Yargs' configs.
let	base = argv.base;
let limit = argv.limit;
let show = argv.show;

//const [ , , arg3 = `base=${baseV}` ] = process.argv;
//const [ , base = baseV ] = arg3.split('=');
// I am not going to use it anymore, but I leave this part of the code for 'documentation'.

createFile( base, limit )
	.then( fileName => console.log(fileName.file.bold, 'succesfully created.'.success) )
	.catch( err => console.log(err.error) );

if ( show ) {
	printTable( base,  limit );
}
