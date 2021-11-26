const chalk = require('chalk');
const rpc = require('discordrpcgenerator');
const config = require('.././config.json');
const uuid = ()=>([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a=>(a ^ Math.random() * 16 >> a / 4).toString(16));

const client = require('../index');
client.on('ready', () => {

 if (config.mode === 'twitch') {

   try {

    rpc.getRpcImage(config.twitch.applicationid, 'js')
    .then(image => {
        const presence = new rpc.Rpc()
        .setName(config.twitch.name)
        .setUrl(config.twitch.url)
        .setType('STREAMING')
        .setApplicationId(config.twitch.applicationid)

        .setAssetsLargeImage(config.twitch.largeimage ? config.twitch.largeimage : image.id)
        .setAssetsLargeText(config.twitch.largeimagetext ? config.twitch.largeimagetext : image.name)

        .setDetails(config.twitch.details)
        .setState(config.twitch.state)

        .setStartTimestamp(config.spotify.startTimestamp ? config.spotify.startTimestamp : undefined)
        .setEndTimestamp(config.spotify.endTimestamp ? config.spotiify.endTimestamp : undefined)

        .setParty({
            size: [1, 4],
            id: uuid()
        });

    client.user.setPresence(presence.toDiscord());
    console.log(chalk.hex('#800080')('Twitch RPC enabled successfully!'));
});
} catch (err) {
    console.log(err);
    console.log(chalk.hex('#800080')('Twitch RPC failed to enable!'));
}
}
});