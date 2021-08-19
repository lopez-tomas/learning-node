const colors = require('../config/colors');

const showMenu = () => {
  console.clear;
  console.log('==================='.header);
  console.log(' Select one option'.header);
  console.log('===================\n'.header);

  console.log(`1. Create task`);
  console.log(`2. List tasks`);
  console.log(`3. List completed tasks`);
  console.log(`4. List pending tasks`);
  console.log(`5. Complete task(s)`);
  console.log(`6. Delete task`);
  console.log(`0. Exit \n`);
};

module.exports = {
  showMenu
}
