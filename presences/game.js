const chalk = require('chalk');
const rpc = require('discordrpcgenerator');
const config = require('.././config.json');

const client = require('../index');
client.on('ready', () => {

 if (config.mode === 'game') {

   try {

    rpc.getRpcImage(config.game.applicationid, 'js')
    .then(image => {
        const presence = new rpc.Rpc()
        .setName(config.game.name)
        .setType('PLAYING')
        .setApplicationId(config.game.applicationid)

        .setAssetsLargeImage(config.game.largeimage ? config.game.largeimage : image.id)
        .setAssetsLargeText(config.game.largeimagetext ? config.game.largeimagetext : image.name)

        .setAssetsSmallImage(config.game.smallimage ? config.game.smallimage : undefined)
        .setAssetsSmallText(config.game.smallimagetext ? config.game.smallimagetext : undefined)

        .setDetails(config.game.details)
        .setState(config.game.state)

        .setStartTimestamp(config.game.startTimestamp ? config.game.startTimestamp : undefined)
        .setEndTimestamp(config.game.endTimestamp ? config.game.endTimestamp : undefined);

    client.user.setPresence(presence.toDiscord());
    console.log(chalk.hex('#800080')('Discord RPC enabled successfully!'));
});

} catch (err) {
    console.log(err);
    console.log(chalk.hex('#800080')('Discord RPC failed to enable!'));
}
}
});