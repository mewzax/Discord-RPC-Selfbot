const chalk = require('chalk');
const rpc = require('discordrpcgenerator');
const config = require('.././config.json');

if (config.mode === 'spotify') {

const client = require('../index');
client.on('ready', () => {

  try {
    const presence = rpc.createSpotifyRpc(client)

    .setDetails(config.settings.spotify.details)
    .setState(config.settings.spotify.state)

    .setAssetsLargeImage(config.settings.spotify.largeimage)
    .setAssetsLargeText(config.settings.spotify.largeimagetext ? config.settings.spotify.largeimagetext : undefined)

    .setAssetsSmallImage(config.settings.spotify.smallimage)
    .setAssetsSmallText(config.settings.spotify.smallimagetext ? config.settings.spotify.smallimagetext : undefined)

    .setStartTimestamp(config.settings.spotify.startTimestamp ? config.settings.spotify.startTimestamp : undefined)
    .setEndTimestamp(config.settings.spotify.endTimestamp ? config.settings.spotify.endTimestamp : undefined);

    client.user.setPresence(presence.toDiscord());
    console.log(chalk.hex('#800080')('Spotify RPC enabled successfully!'));


} catch (err) {
  console.log(err);
  console.log(chalk.hex('#800080')('Spotify RPC failed to enable!'));
}
}
);}