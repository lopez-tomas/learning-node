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

console.log('Starting process...');
greetings('Tomas', (name) => {
  bye(name, () => {
    console.log('Ending process...');
  })
});

// greetings('Carlos', () => {});
// bye('Carlos', () => {});