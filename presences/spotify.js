const chalk = require('chalk');
const rpc = require('discordrpcgenerator');
const config = require('.././config.json');

const client = require('../index');
client.on('ready', () => {

if (config.mode === 'spotify') {

  try {
    const presence = rpc.createSpotifyRpc(client)
    .setAssetsLargeImage(config.spotify.largespotifyimage)
    .setAssetsSmallImage(config.spotify.smallspotifyimage)
    .setDetails(config.spotify.details)
    .setState(config.spotify.state)
    .setStartTimestamp(config.spotify.startTimestamp ? config.spotify.startTimestamp : undefined)
    .setEndTimestamp(config.spotify.endTimestamp ? config.spotify.endTimestamp : undefined);

    client.user.setPresence(presence.toDiscord());
    console.log(chalk.hex('#800080')('Spotify RPC enabled successfully!'));


} catch (err) {
  console.log(err);
  console.log(chalk.hex('#800080')('Spotify RPC failed to enable!'));
}
}
});