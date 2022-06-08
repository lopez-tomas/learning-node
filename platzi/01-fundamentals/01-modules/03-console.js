console.log('something');
console.info('something 2'); // used to inform
console.error('something error'); // used to errors
console.warn('something warning'); // used to warning

let table = [
  {
    name: 'Tomas',
    age: 23
  },
  {
    name: 'Carlos',
    age: 32
  }
]

// console.log(table);
console.table(table);

// console.group('Conversation');
// console.log('Hello');
// console.group('bla');
// console.log('Bla bla bla');
// console.log('Bla bla bla');
// console.log('Bla bla bla');
// console.groupEnd('bla');
// console.log('Bye');
// console.groupEnd('Conversation');

// console.log('other things');

// function function1() {
//   console.group('function 1');
//   console.log('This belongs to function 1')
//   console.log('This belongs to function 1 too')
//   function2();
//   console.log('We are in function 1 again');
//   console.groupEnd('function 1');
// }

// function function2() {
//   console.group('function 2');
//   console.log('Now, we are in function 2')
//   console.groupEnd('function 2');
// }

// console.log('starting');
// function1();

// console.count('asd');
// console.count('asd');
// console.count('asd');
// console.countReset('asd');
// console.count('asd');