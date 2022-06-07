function greetings(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hi, ${name}`);
      resolve(name);
    }, 1500);
  });
}

function bye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Bye, ${name}`);
      resolve();
    }, 1000);
  })
}

function talk(name) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      console.log('Bla bla bla bla...');
      // resolve(name);
      reject('There is an ERROR');
    }, 1000);
  })
}

// ----
console.log('Starting process...');
greetings('Tomás')
  .then(talk)
  .then(talk)
  .then(talk)
  .then(bye)
  .then((name) => {
    console.log('Ending process...');
  })
  .catch(err => {
    console.error(err);
  })