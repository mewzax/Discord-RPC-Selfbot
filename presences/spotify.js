const chalk = require('chalk');
const rpc = require('discordrpcgenerator');
const config = require('.././config.json');

if (config.mode === 'spotify') {

const client = require('../index');
client.on('ready', () => {

  try {
    const presence = rpc.createSpotifyRpc(client)

    .setDetails(config.settings.spotify.details ? config.settings.spotify.details : undefined)
    .setState(config.settings.spotify.state ? config.settings.spotify.state : undefined)

    .setAssetsLargeImageKey(config.settings.spotify.LargeImageKey)
    .setAssetsLargeText(config.settings.spotify.LargeImageText ? config.settings.spotify.LargeImageText : undefined)

    .setAssetsSmallImageKey(config.settings.spotify.SmallImageKey ? config.settings.spotify.SmallImageKey : undefined)
    .setAssetsSmallText(config.settings.spotify.SmallImageText ? config.settings.spotify.SmallImageText : undefined)

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
