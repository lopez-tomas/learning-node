async function greetings(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hi, ${name}`);
      resolve(name);
    }, 1500);
  });
}

async function bye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Bye, ${name}`);
      resolve();
    }, 1000);
  })
}

async function talk(name) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      console.log('Bla bla bla bla...');
      resolve(name);
      // reject('There is an ERROR');
    }, 1000);
  })
}

// ----

async function main() {
  let name = await greetings('Tomas');
  await talk();
  await talk();
  await talk();
  await bye(name);
  console.log('Ending process...');
}

console.log('Starting process.');
main();
console.log('2nd instruction to be executed.');