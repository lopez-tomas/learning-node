// let i = 0;
// let interval = setInterval(() => {
//   console.log('Hi');
//   if (i === 3) {
//     clearInterval(interval);
//   }
//   i++;
// }, 1000);

// setImmediate(() => {
//   console.log('Hello!');
// })

// require();

// console.log(process);

console.log(__dirname);
console.log(__filename);

globalThis.myVariable = 'myValue';
console.log(global.myVariable); // console.log(myVariable);