const anotherFunction = () => {
  itBreaks();
}

const itBreaks = () => {
  return 3 + z;
}

const asyncItBreaks = (callback) => {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (err) {
      console.error('An error occurred!');
      callback(err);
    }
  })
}

try {
  // anotherFunction();
  asyncItBreaks(() => {
    console.log('There is an ERROR!');
  });
} catch (err) {
  console.error('Wow! Something went wrong!');
  console.error(err.message);
  console.error(err);
}

console.log('This at the end');