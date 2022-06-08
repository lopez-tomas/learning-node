// const process = require('process');

process.on('beforeExit', () => {
  console.log('Process is about to finish.');
});

process.on('exit', () => {
  console.log('Process finished.');
  setTimeout(() => {
    console.log('This will never be shown.');
  }, 0);
});

setTimeout(() => {
  console.log('This will be shown.');
}, 0)

process.on('uncaughtException', (err, origin) => {
  console.error('Error not catched');
  setTimeout(() => {
    console.log('This came from exceptions.');
  }, 0)
  console.error(err);
})
process.on('uncaughtRejection', () => {})

iDontExist();

// console.log('If error is not catched, this line will be printed');