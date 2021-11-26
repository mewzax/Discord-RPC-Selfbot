const chalk = require('chalk');
const rpc = require('discordrpcgenerator');
const config = require('.././config.json');

const client = require('../index');
client.on('ready', () => {

 if (config.useCustomStatus && config.customStatusMode === 'normal') {

   try {
    const custom = new rpc.CustomStatus()
    .setState(config.normalStatus.text)
    .setUnicodeEmoji(config.normalStatus.emoji);

    client.user.setCustomStatus(custom.toDiscord());
    console.log(chalk.hex('#800080')('Custom status enabled successfully!'));

       } catch (err) {
console.log('Custom status error');
        console.log(err);
    }
}
});