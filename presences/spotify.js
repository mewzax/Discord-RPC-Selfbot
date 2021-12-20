const config = require('../config.json');
const client = require('..');

const rpc = require('discordrpcgenerator');
const chalk = require('chalk');

if (config.mode === 'spotify') {
  client.on('ready', () => {

    try {

      const presence = rpc.createSpotifyRpc()
        .setDetails(config.settings.spotify.name)
        .setState(config.settings.spotify.details)

        .setAssetsLargeImage(config.settings.spotify.largeImage)
        .setAssetsLargeText(config.settings.spotify.largeImageText)

        .setAssetsSmallImage(config.settings.spotify.smallImage ? config.settings.spotify.smallImage : undefined)
        .setAssetsSmallText(config.settings.spotify.smallImageText ? config.settings.spotify.smallImageText : undefined)

        .setStartTimestamp(config.settings.spotify.startTimestamp)
        .setEndTimestamp(config.settings.spotify.endTimestamp);

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
      console.log(chalk.hex('#800080')('Spotify: ' + config.settings.spotify.name));
      console.log(chalk.hex('#800080')('Status: ' + config.status));

    } catch (err) {
      console.log(err);
    }
  });
}