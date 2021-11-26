const chalk = require('chalk');
const rpc = require('discordrpcgenerator');
const config = require('.././config.json');

const client = require('../index');
client.on('ready', () => {

if (config.useCustomStatus && config.customStatusMode === 'successive') {

try {

const statuses = config.successiveStatuses;


setInterval(() => {
for (const element of statuses)
{
const custom = new rpc.CustomStatus()
.setUnicodeEmoji(element[0])
.setState(element[1]);
client.user.setCustomStatus(custom.toDiscord());
}
}, 10000);

console.log(chalk.hex('#800080')('Custom status enabled successfully!'));

} catch (err) {
console.log(chalk.hex('#ff0000')('Custom status failed to enable!'));
}}});