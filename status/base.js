const chalk = require('chalk');
const config = require('.././config.json');

const client = require('../index');
client.on('ready', () => {

 if (config.status === 'dnd'
  || config.status === 'idle'
  || config.status === 'invisible'
  || config.status === 'online')
   {
   try {
    client.user.setStatus(config.status);
    console.log(chalk.hex('#800080')('Custom status enabled successfully!'));
  } catch (err) {
    console.log(err);
    }
}

if (config.status === 'offline') {
  try {
    client.user.setStatus(config.status);
    console.log(chalk.hex('#800080')('You cant use "offline" in status! please edit config file'));
  } catch (err) {
    console.log(err);
    }
}});