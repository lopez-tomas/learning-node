const os = require('os');
const { Serializer } = require('v8');

// console.log(os.arch());
// console.log(os.platform());
// console.log(os.cpus().length);
// console.log(os.constants);

const SIZE = 1024;
const kiloBytes = (bytes) => bytes / SIZE;
const megaBytes = (kb) => kiloBytes(kb / SIZE);
const gigaBytes = (mb) => megaBytes(mb / SIZE);
// console.log(os.freemem());
// console.log(kiloBytes(os.freemem()));
// console.log(megaBytes(os.freemem()));
// console.log(gigaBytes(os.freemem()));

// console.log(gigaBytes(os.totalmem()));

// console.log(os.homedir());
// console.log(os.tmpdir());

console.log(os.hostname());
console.log(os.networkInterfaces());