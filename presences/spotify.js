const chalk = require('chalk');
const rpc = require('discordrpcgenerator');
const config = require('.././config.json');

if (config.mode === 'spotify') {

const client = require('../index');
client.on('ready', () => {

  try {
    const presence = rpc.createSpotifyRpc(client)
    .setAssetsLargeImage(config.settings.spotify.largespotifyimage)
    .setAssetsSmallImage(config.settings.spotify.smallspotifyimage)
    .setDetails(config.settings.spotify.details)
    .setState(config.settings.spotify.state)
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