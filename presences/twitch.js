const client = require('..');
const chalk = require('chalk');
const rpc = require('discordrpcgenerator');
const config = require('.././config.json');

if (config.mode === 'twitch') {
    client.on('ready', () => {
        try {
            rpc.getRpcImage(config.settings.twitch.applicationID, config.settings.twitch.largeImageKey).then(image => {
                const presence = new rpc.Rpc()
                    .setName(config.settings.twitch.name)
                    .setType('STREAMING')
                    .setUrl(config.settings.twitch.url)
                    .setApplicationId(config.settings.twitch.applicationID)
                    .setState(config.settings.twitch.state)
                    .setDetails(config.settings.twitch.details)
                    .setAssetsLargeImage(config.settings.twitch.largeImageKey.id || image.id)
                    .setAssetsLargeText(config.settings.twitch.largeImageText || image.name)
                    .setStartTimestamp(config.settings.twitch.startTimestamp || Date.now())
                    .setEndTimestamp(config.settings.twitch.endTimestamp || Date.now());

                client.user.setPresence(presence.toDiscord());
            });

            // Set the status
            if (config.status === 'online' || config.status === 'idle' || config.status === 'dnd') {
                client.user.setStatus(config.status);
            }

            if (config.status === 'offline' || config.status === 'invisible') {
                console.log('Status cant be set to' + config.status + '\nPlease change the status in the config.json file');
            }

            // Done !
            console.log(chalk.hex('#800080')('Twitch RPC enabled successfully!'));
            console.log(chalk.hex('#800080')('Twitch: ' + config.settings.twitch.name));
            console.log(chalk.hex('#800080')('Status: ' + 'streaming icon lmfao'));


        } catch (err) {
            console.error(err);
        }
    });
}