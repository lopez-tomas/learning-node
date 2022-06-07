function greetings(name, myCallback) {
  setTimeout(() => {
    console.log(`Hi, ${name}`);
    myCallback(name);
  }, 1500);
}

function bye(name, otherCallback) {
  setTimeout(() => {
    console.log(`Bye, ${name}`);
    otherCallback();
  }, 1000);
}

function talk(callbackTalk) {
  setTimeout(() => {
    console.log('Bla bla bla bla...');
    callbackTalk();
  }, 1000);
}

function conversation(name, quantity, callback) {
  if (quantity > 0) {
    talk(() => {
      conversation(name, --quantity, callback);
    })
  } else {
    bye(name, callback);
  }
}

console.log('Starting process...');
greetings('Tomas', (name) => {
  conversation(name, 3, () => () => {
    console.log('Ending process...');
  });
});
//   talk(() => {
//     talk(() => {
//       talk(() => {
//         bye(name, () => {
//           console.log('Ending process...');
//         })
//       })
//     })
//   })
// });