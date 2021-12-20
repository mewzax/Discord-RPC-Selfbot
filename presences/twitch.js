const config = require('../config.json');
const client = require('..');

const rpc = require('discordrpcgenerator');
const chalk = require('chalk');

if (config.mode === 'twitch') {
  client.on('ready', () => {

    try {
      rpc.getRpcImage(config.settings.twitch.applicationID, config.settings.twitch.largeImageKey)
        .then(image => {
          const presence = new rpc.Rpc()
            .setName(config.settings.twitch.name)
            .setUrl(config.settings.twitch.url)
            .setDetails(config.settings.twitch.name)
            .setType('STREAMING')
            .setState(config.settings.twitch.details)
            .setApplicationId(config.settings.twitch.applicationID)

            .setAssetsLargeImage(config.settings.twitch.largeImageKey ? config.settings.twitch.largeImageKey : image.id)
            .setAssetsLargeText(config.settings.twitch.largeImageText)

            .setAssetsSmallImage(config.settings.twitch.smallImagekey ? config.settings.twitch.smallImageKey : undefined)
            .setAssetsSmallText(config.settings.twitch.smallImageText ? config.settings.twitch.smallImageText : undefined)

            .setStartTimestamp(config.settings.twitch.startTimestamp)
            .setEndTimestamp(config.settings.twitch.endTimestamp);

          // Set the presence
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
      console.log(chalk.hex('#800080')('twitch RPC enabled successfully!'));
      console.log(chalk.hex('#800080')('twitch: ' + config.settings.twitch.name));
      console.log(chalk.hex('#800080')('Status: ' + config.status));

    } catch (err) {
      console.log(err);
    }
  });
}