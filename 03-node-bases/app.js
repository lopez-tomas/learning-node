const { multiply, printTable, createFile } = require('./helpers/multiply');

console.clear();

const base = 5;
const limit = 10;

let message = createFile( base, limit );
console.log(message);

printTable( base, multiply( base, limit ) );
