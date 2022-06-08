const { exec, spawn } = require('child_process');
// const exec = require('child_process').exec;

// exec('ls -la', (err, stdout, stderr) => {
//   if (err) return console.error(err);

//   console.log(stdout);
// })

// exec('01-modules/03-console.js', (err, stdout, stderr) => {
//   if (err) return console.error(err);

//   console.log(stdout);
// })

let newProcess = spawn('ls', ['-la']);

console.log(newProcess.pid);
console.log(newProcess.connected);

newProcess.stdout.on('data', (data) => {
  console.log('is dead?');
  console.log(newProcess.killed);
  console.log(data.toString());
});

newProcess.on('exit', () => {
  console.log('newProcess process ended');
  console.log(newProcess.killed);
})