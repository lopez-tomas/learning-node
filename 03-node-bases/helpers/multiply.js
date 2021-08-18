const fs = require('fs');
const colors = require('../config/colors');
//import { writeFile } from 'fs'; => new standard to import in ES6

const multiply = ( base, limit ) => {
	let output = '';
  for(let i = 1; i <= limit; i++) {
		output += `${ colors.number( base ) } ${ 'x'.crux } ${ colors.number( i ) } = ${ colors.result( base * i ) }\n`;
	}
	return output;
};

const printHeader = ( base ) => {
	let output = '============\n'.headerLines +
							 ` Table of ${ colors.headerNumber( base )} \n`.headerTitle +
	 						 '============\n\n'.headerLines;
	return output;
};

const printTable = ( base, limit ) => {
	console.log(printHeader( base ) + multiply( base, limit));
};

const createFile = async( base, limit ) => {
	
	try {
		let output = '';
		output += printHeader( base );
		output += multiply( base, limit );
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
	printTable,
	createFile 
}
