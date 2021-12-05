const chalk = require('chalk');
const rpc = require('discordrpcgenerator');
const config = require('.././config.json');
const uuid = ()=>([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a=>(a ^ Math.random() * 16 >> a / 4).toString(16));

if (config.mode === 'game') {

const client = require('../index');
client.on('ready', () => {

   try {

    rpc.getRpcImage(config.settings.game.applicationID, config.settings.game.LargeImageKey)
    .then(image => {
        const presence = new rpc.Rpc()

        .setName(config.settings.game.name)
        .setType('PLAYING')
        .setapplicationID(config.settings.game.applicationID)

        .setAssetsLargeImageKey(config.settings.game.LargeImageKey ? config.settings.game.LargeImageKey : image.id)
        .setAssetsLargeText(config.settings.game.LargeImageText ? config.settings.game.LargeImageText : image.name)

        .setAssetsSmallImageKey(config.settings.game.SmallImageKey ? config.settings.game.SmallImageKey : undefined)
        .setAssetsSmallText(config.settings.game.SmallImageText ? config.settings.game.SmallImageText : undefined)

        .setDetails(config.settings.game.details ? config.settings.game.details : undefined)
        .setState(config.settings.game.state ? config.settings.game.state : undefined)

        .setStartTimestamp(config.settings.game.startTimestamp ? config.settings.game.startTimestamp : undefined)
        .setEndTimestamp(config.settings.game.endTimestamp ? config.settings.game.endTimestamp : undefined);

    client.user.setPresence(presence.toDiscord());
    console.log(chalk.hex('#800080')('Discord RPC enabled successfully!'));
});

} catch (err) {
    console.log(err);
    console.log(chalk.hex('#800080')('Discord RPC failed to enable!'));
}
});}
