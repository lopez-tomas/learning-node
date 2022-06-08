import bcrypt from 'bcrypt';

const password = '1234Secured!';

bcrypt.hash(password, 10000, (err, hash) => {
  console.log(hash);

  bcrypt.compare('password', hash, (err, res) => {
    // console.log(err);
    console.log(res);
  });
});