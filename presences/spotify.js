const rpcGenerator = require('discordrpcgenerator');
const client = require('..');
const config = require('.././config.json');
const chalk = require('chalk');
if (config.mode === 'spotify') {
    try {
        client.on('ready', () => {
            const presence = rpcGenerator.createSpotifyRpc(client)
                .setAssetsLargeImage(config.settings.spotify.largeImageKey)
                .setAssetsSmallImage(config.settings.spotify.smallImageKey)
                .setDetails(config.settings.spotify.name)
                .setState(config.settings.spotify.details)
                .setStartTimestamp(config.settings.spotify.startTimestamp || Date.now())
                .setEndTimestamp(config.settings.spotify.endTimestamp || null);

            client.user.setPresence(presence.toDiscord());

            // Done !
            console.log(chalk.hex('#800080')('Spotify RPC enabled successfully!'));
            console.log(chalk.hex('#800080')('Spotify: ' + config.settings.spotify.name));
            console.log(chalk.hex('#800080')('Status: ' + config.status));

        });
    } catch (err) {
        console.error(err);
    }
}