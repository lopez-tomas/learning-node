const colors = require('../config/colors');

const showMenu = () => {
  console.clear;
  console.log('==================='.header);
  console.log(' Select one option'.header);
  console.log('===================\n'.header);

  console.log(`${ '1.'.option } Create task`);
  console.log(`${ '2.'.option } List tasks`);
  console.log(`${ '3.'.option } List completed tasks`);
  console.log(`${ '4.'.option } List pending tasks`);
  console.log(`${ '5.'.option } Complete task(s)`);
  console.log(`${ '6.'.option } Delete task`);
  console.log(`${ '0.'.option } Exit \n`);

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question('Select one option: ', (opt) => {
    console.log({ opt });
    readline.close();
  })
};

module.exports = {
  showMenu
}
