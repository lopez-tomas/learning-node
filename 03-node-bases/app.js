const fs = require('fs');
// import { writeFile } from 'fs'; => new standard to import in ES6

console.clear();

const base = 2;
const limit = 10;

console.log('================');
console.log(`Table of ${base}`);
console.log('================');

let output = '';

for(let i = 1; i <= limit; i++) {
	output += `${ base } X ${ i } = ${ base * i }\n`;
}

console.log(output);

fs.writeFile(`table-${base}.txt`, output, (err) => {
	if (err) throw err;

	console.log(`table-${base}.txt file created.`);
})
