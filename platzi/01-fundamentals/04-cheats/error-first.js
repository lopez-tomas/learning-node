const async = (callback) => {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callbacki(null, a);
    } catch (err) {
      callback(err);
    }
  }, 1000);
}

// try {
async((err, data) => {
  if (err) {
    console.error('ERROR: ', err);
    return false;
    // throw err; // It's not going to work in async functions
  }

  console.log('everything is ok. Data: ', data);
});
// } catch (err) {
//   console.error('ERRRO: ', err);
// }