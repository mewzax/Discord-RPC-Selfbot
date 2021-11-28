const chalk = require('chalk');
const rpc = require('discordrpcgenerator');
const config = require('.././config.json');
const uuid = ()=>([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a=>(a ^ Math.random() * 16 >> a / 4).toString(16));

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
