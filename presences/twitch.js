const client = require('..');
const chalk = require('chalk');
const rpc = require('discordrpcgenerator');
const config = require('.././config.json');

if (config.mode === 'twitch') {
  try {
    rpc.getRpcImage(config.settings.twitch.applicationID, config.settings.twitch.largeImageKey).then(image => {
      const presence = new rpc.Rpc()
        .setName(config.settings.twitch.name)
        .setType('STREAMING')
        .setUrl(config.settings.twitch.url)
        .setApplicationId(config.settings.twitch.applicationID)
        .setState(config.settings.twitch.state)
        .setDetails(config.settings.twitch.details)
        .setAssetsLargeImage(image.settings.twitch.id)
        .setAssetsLargeText(image.settings.twitch.name);
      client.user.setPresence(presence.toDiscord());
    });

    // Done !
    console.log(chalk.hex('#800080')('Twitch RPC enabled successfully!'));
    console.log(chalk.hex('#800080')('Twitch: ' + config.settings.twitch.name));

  } catch (err) {
    console.error(err);
  }
}
