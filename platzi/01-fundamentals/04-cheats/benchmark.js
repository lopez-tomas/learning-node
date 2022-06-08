console.time('all');
const asyncFn = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('Process finished');
      res();
    })
  })
}

let add = 0;

console.time('for');
for(let i=0; i<100000000; i++) {
  add += 1;
}
console.timeEnd('for');

let add2 = 0;

console.time('for 2');
for(let j=0; j<1000000; j++) {
  add2 += 1;
}
console.timeEnd('for 2');

console.time('async');
console.log('asyncFn starting');
asyncFn()
  .then(() => {
    console.timeEnd('async');
  })

console.timeEnd('all');