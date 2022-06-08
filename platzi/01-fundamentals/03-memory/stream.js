const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('utf-8');

// readableStream.on('data', (chunk) => {
//   data += chunk;
// });

// readableStream.on('end', () => {
//   console.log(data);
// });

// process.stdout.write('hello');
// process.stdout.write('how');
// process.stdout.write('are');
// process.stdout.write('you');

const Transform = stream.Transform;

function ToUpper() {
  Transform.call(this);
}
util.inherits(ToUpper, Transform);

ToUpper.prototype._transform = function(chunk, codif, callback) {
  chunkUpper = chunk.toString().toUpperCase();
  this.push(chunkUpper);
  callback();
}

let upper = new ToUpper();

readableStream
  .pipe(upper)
  .pipe(process.stdout)