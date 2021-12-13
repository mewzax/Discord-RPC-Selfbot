const chalk = require('chalk');
const rpc = require('discordrpcgenerator');

const config = require('.././config.json');
const uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));

if (config.mode === 'game') {

  // Create the RPC
  const client = require('../index');
  client.on('ready', () => {

    try {

      rpc.getRpcImage(config.settings.game.applicationid, config.settings.game.largeImageKey)
        .then(image => {
          const presence = new rpc.Rpc()

            .setName(config.settings.game.name)
            .setType('PLAYING')
            .setApplicationId(config.settings.game.applicationid)

            .setAssetslargeImage(config.settings.game.largeImageKey ? config.settings.game.largeImageKey : image.id)
            .setAssetsLargeText(config.settings.game.largeImageText ? config.settings.game.largeImageText : image.name)

            .setAssetsSmallImage(config.settings.game.smallimage ? config.settings.game.smallimage : undefined)
            .setAssetsSmallText(config.settings.game.smallimagetext ? config.settings.game.smallimagetext : undefined)

            .setDetails(config.settings.game.details ? config.settings.game.details : undefined)
            .setState(config.settings.game.state ? config.settings.game.state : undefined)

            .setStartTimestamp(config.settings.game.startTimestamp ? config.settings.game.startTimestamp : undefined)
            .setEndTimestamp(config.settings.game.endTimestamp ? config.settings.game.endTimestamp : undefined);

          // Set the presence
          client.user.setPresence(presence.toDiscord());

          // Set the status
          if (config.status === 'online' || config.status === 'idle' || config.status === 'dnd') {
            client.user.setStatus(config.status);
          }

          if (config.status === 'offline' || config.status === 'invisible') {
            console.log('Status cant be set to' + config.status + '\nPlease change the status in the config.json file');
          }

          // Done !
          console.log(chalk.hex('#800080')('Spotify RPC enabled successfully!'));
          console.log(chalk.hex('#800080')('Spotify: ' + config.settings.spotify.details));
          console.log(chalk.hex('#800080')('Status: ' + config.status ? config.status : 'status not defined'));

        });

    } catch (err) {
      console.log(err);
      console.log(chalk.hex('#800080')('Discord RPC failed to enable!'));
    }
  });
}