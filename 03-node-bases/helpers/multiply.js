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

const createFile = async( base, limit ) => {
	
	try {
		let output = '';
		output = multiply( base, limit );
		fileName = `table-${base}.txt`;

		//fs.writeFile(`table-${base}.txt`, output, (err) => {
		//	if (err) throw err;
		//
		//	console.log(`table-${base}.txt file created.`);
		//})
		
		fs.writeFileSync( fileName, output ); 
		// To manage erros with writeFileSync we have to use try and catch.
		
		return `${ fileName }`;
	} catch (err) {
		throw err;
	}
}

module.exports = {
	multiply,
	printTable,
	createFile 
}
