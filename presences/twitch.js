const chalk = require('chalk');
const rpc = require('discordrpcgenerator');
const config = require('.././config.json');
const uuid = ()=>([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a=>(a ^ Math.random() * 16 >> a / 4).toString(16));

if (config.mode === 'twitch') {

const client = require('../index');
client.on('ready', () => {

   try {

    rpc.getRpcImage(config.settings.twitch.applicationID, config.settings.twitch.LargeImageKey)
    .then(image => {
        const presence = new rpc.Rpc()
        .setName(config.settings.twitch.name)
        .setUrl(config.settings.twitch.url)
        .setType('STREAMING')
        .setapplicationID(config.settings.twitch.applicationID)

        .setAssetsLargeImageKey(config.settings.twitch.LargeImageKey ? config.settings.twitch.LargeImageKey : image.id)
        .setAssetsLargeText(config.settings.twitch.LargeImageText ? config.settings.twitch.LargeImageText : image.name)

        .setDetails(config.settings.twitch.details ? config.settings.twitch.details : undefined)
        .setState(config.settings.twitch.state ? config.settings.twitch.state : undefined)

        .setStartTimestamp(config.settings.spotify.startTimestamp ? config.settings.spotify.startTimestamp : undefined)
        .setEndTimestamp(config.settings.spotify.endTimestamp ? config.settings.spotiify.endTimestamp : undefined)

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
);}
