const colors = require('./config/colors');

const { showMenu, pause } = require('./helpers/messages');

const main = async() => {
  console.log('Hello World'); 

  let opt = '';

  do {
    opt = await showMenu();
    console.log({ opt });
    await pause();

  } while( opt !== '0' );
};	

main();
