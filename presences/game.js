const config = require('../config.json');
const client = require('..');

const rpc = require('discordrpcgenerator');
const chalk = require('chalk');

if (config.mode === 'game') {
  client.on('ready', () => {

    try {
      rpc.getRpcImage(config.settings.game.applicationID, config.settings.game.largeImageKey)
        .then(image => {
          const presence = new rpc.Rpc()
            .setApplicationId(config.settings.game.applicationID)
            .setType('PLAYING')
            .setName(config.settings.game.name)

            .setDetails(config.settings.game.details)
            .setState(config.settings.game.state)

            .setAssetsLargeImage(image.id)
            .setAssetsLargeText(config.settings.game.largeImageText ? config.settings.game.largeText : image.name)

            .setAssetsSmallImage(config.settings.game.smallImage ? config.settings.game.smallImage : undefined)
            .setAssetsSmallText(config.settings.game.smallImageText ? config.settings.game.smallImageText : undefined)

            .setStartTimestamp(config.settings.game.startTimestamp)
            .setEndTimestamp(config.settings.game.endTimestamp);

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
      console.log(chalk.hex('#800080')('Game RPC enabled successfully!'));
      console.log(chalk.hex('#800080')('Game: ' + config.settings.game.name));
      console.log(chalk.hex('#800080')('Status: ' + config.status));

    } catch (err) {
      console.log(err);
    }
  });
}