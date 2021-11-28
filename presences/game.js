const chalk = require('chalk');
const rpc = require('discordrpcgenerator');
const config = require('.././config.json');

if (config.mode === 'game') {

const client = require('../index');
client.on('ready', () => {

   try {

    rpc.getRpcImage(config.settings.game.applicationid, config.settings.game.largeimage)
    .then(image => {
        const presence = new rpc.Rpc()

        .setName(config.settings.game.name)
        .setType('PLAYING')
        .setApplicationId(config.settings.game.applicationid)

        .setAssetsLargeImage(config.settings.game.largeimage ? config.settings.game.largeimage : image.id)
        .setAssetsLargeText(config.settings.game.largeimagetext ? config.settings.game.largeimagetext : image.name)

        .setAssetsSmallImage(config.settings.game.smallimage ? config.settings.game.smallimage : undefined)
        .setAssetsSmallText(config.settings.game.smallimagetext ? config.settings.game.smallimagetext : undefined)

        .setDetails(config.settings.game.details)
        .setState(config.settings.game.state)

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
