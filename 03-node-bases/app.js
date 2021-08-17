const argv = require('yargs').argv;
const { printTable, createFile } = require('./helpers/multiply');

console.clear();

const baseV = 2;
const limit = 10;

//const [ , , arg3 = `base=${baseV}` ] = process.argv;
//const [ , base = baseV ] = arg3.split('=');
// I am not going to use it anymore, but I leave this part of the code for 'documentation'.

//createFile( base, limit )
//	.then( fileName => console.log(fileName, 'succesfully created.') )
//	.catch( err => console.log(err) );

printTable( base,  limit );
