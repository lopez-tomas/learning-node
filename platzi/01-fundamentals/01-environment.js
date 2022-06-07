let fullName = process.env.NAME || 'N/N'; // NAME=Your_name node 01-environment.js
let web = process.env.WEB || 'no web'; // WEB=yourweb.com node 01-environment.js

console.log(`Hi, ${fullName}.`);
console.log(`Web: ${web}`);