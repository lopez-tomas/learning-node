const fs = require('fs');
// import { writeFile } from 'fs'; => new standard to import in ES6

const multiply = ( base, limit ) => {
	let output = '';
  for(let i = 1; i <= limit; i++) {
		output += `${ base } X ${ i } = ${ base * i }\n`;
	}
	return output;
};

const printTable = ( base, output ) => {
	console.log('================');
	console.log(`Table of ${base}`);
	console.log('================');
	console.log(output);
};

const createFile = ( base, limit ) => {
  	
	let output = '';
	output = multiply( base, limit );

	//fs.writeFile(`table-${base}.txt`, output, (err) => {
	//	if (err) throw err;
	//
	//	console.log(`table-${base}.txt file created.`);
	//})

	fs.writeFileSync( `table-${base}.txt`, output );
	// To manage erros with writeFileSync we have to use try and catch.

	return `\ntable-${base}.txt file created.\n`;
};

module.exports = {
	multiply,
	printTable,
	createFile 
}
