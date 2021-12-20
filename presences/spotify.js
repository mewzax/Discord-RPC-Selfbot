const client = require('..');
const chalk = require('chalk');
const rpc = require('discordrpcgenerator');
const config = require('.././config.json');

if (config.mode === 'spotify') {
  client.on("ready", () => {
  try {
      const presence = new rpc.createSpotifyRpc()
        .setType('LISTENING')
        .setState(config.settings.spotify.details)
        .setDetails(config.settings.spotify.name)
        .setAssetsLargeImage(config.settings.largeImageKey)
        .setAssetsLargeText(config.settings.spotify.largeImageText);

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
  })
  } catch (err) {
    console.error(err);
  }
}
