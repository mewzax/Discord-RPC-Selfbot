const chalk = require('chalk');
const rpc = require('discordrpcgenerator');

const config = require('.././config.json');

const uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));

if (config.mode === 'twitch') {

  // Create the rich presence
  const client = require('../index');
  client.on('ready', () => {

    try {

      rpc.getRpcImage(config.settings.twitch.applicationid, config.settings.twitch.largeImageKey)
        .then(image => {
          const presence = new rpc.Rpc()
            .setName(config.settings.twitch.name)
            .setUrl(config.settings.twitch.url)
            .setType('STREAMING')
            .setApplicationId(config.settings.twitch.applicationid)

            .setAssetslargeImage(config.settings.twitch.largeImageKey ? config.settings.twitch.largeImageKey : image.id)
            .setAssetsLargeText(config.settings.twitch.largeImageText ? config.settings.twitch.largeImageText : image.name)

            .setDetails(config.settings.twitch.details ? config.settings.twitch.details : undefined)
            .setState(config.settings.twitch.state ? config.settings.twitch.state : undefined)

            .setStartTimestamp(config.settings.spotify.startTimestamp ? config.settings.spotify.startTimestamp : undefined)
            .setEndTimestamp(config.settings.spotify.endTimestamp ? config.settings.spotiify.endTimestamp : undefined)

            .setParty({
              size: [1, 4],
              id: uuid()
            });

          // Set the presence
          client.user.setPresence(presence.toDiscord());

          // Set the status
          if (config.status === 'online' || config.status === 'idle' || config.status === 'dnd') {
            client.user.setStatus(config.status);
          }

          if (config.status === 'offline' || config.status === 'invisible') {
            console.log('Status cant be set to' + config.status + '\nPlease change the status in the config.json file');
            process.exit(1);
          }

          // Done!
          console.log(chalk.hex('#800080')('Twitch RPC enabled successfully!'));
          console.log(chalk.hex('#800080')('Twitch: ' + config.settings.twitch.name));
          console.log(chalk.hex('#800080')('Status: ' + config.status ? config.status : 'status not defined'));
        });
    } catch (err) {
      console.log(err);
      console.log(chalk.hex('#800080')('Twitch RPC failed to enable!'));
    }
  });
}