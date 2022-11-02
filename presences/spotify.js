const rpc = require('discordrpcgenerator'),
    client = require('..'),
    config = require('.././config'),
    console = require('.././utils/logger')
    
client.on("ready", async() => {
    console.logger.info(`Logged in as ${client.user.tag}!`)
    let presence = rpc.createSpotifyRpc(client)
        .setType("LISTENING")

    if (config.spotify.name) presence.setName(config.spotify.name)
    if (config.spotify.state) presence.setState(config.spotify.state)
    if (config.spotify.details) presence.setDetails(config.spotify.details)

    if (config.spotify.largeImageKey.startsWith("spotify:")) presence.setAssetsLargeImage(config.spotify.largeImageKey)
    if (config.spotify.smallImageKey.startsWith("spotify:")) presence.setAssetsSmallImage(config.spotify.smallImageKey)

    if (config.spotify.largeImageKey && config.spotify.largeImageText) presence.setAssetsLargeText(config.spotify.largeImageText)
    if (config.spotify.smallImageKey &&config.spotify.smallImageText) presence.setAssetsSmallText(config.spotify.smallImageText)

    if (config.spotify.startTimestamp) presence.setStartTimestamp(Date.now())
    if (config.spotify.endTimestamp) presence.setEndTimestamp(Date.now())

    client.user.setPresence(presence.toDiscord())
    if (config.status === 'online' || config.status === 'idle' || config.status === 'dnd') {
        client.user.setStatus(config.status);
    }
    console.logger.info('Spotify RPC enabled!');
    console.logger.info('Spotify: ' + config.spotify.details);
    console.logger.info(`Status: ${!config.status ? 'default' : config.status}`)
})