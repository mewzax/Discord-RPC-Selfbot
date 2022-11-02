const rpc = require('discordrpcgenerator'),
    client = require('..'),
    config = require('.././config'),
    console = require('.././utils/logger'),
    discord = require('../utils/discord')

client.on("ready", async() => {
    console.logger.info(`Logged in as ${client.user.tag}!`)
    if (!config.twitch.applicationID) return console.exit("No application ID specified");
    if (!config.twitch.url) console.logger.warn("No twitch channel specified")

    let presence = new rpc.Rpc()
        .setType("STREAMING")
        .setApplicationId(config.twitch.applicationID)
        .setName("rpc")
    
    if (config.twitch.url) presence.setUrl(config.twitch.url)

    largeImage = config.twitch.largeImageKey ? await discord.getImage(config.twitch.applicationID, config.twitch.largeImageKey) : null
    smallImage = config.twitch.smallImageKey ? await discord.getImage(config.twitch.applicationID, config.twitch.smallImageKey) : null

    if (config.twitch.state) presence.setState(config.twitch.state)
    if (config.twitch.details) presence.setDetails(config.twitch.details)


    if (largeImage && largeImage.id) presence.setAssetsLargeImage(largeImage.id)
    if (config.twitch.largeImageText) {
        presence.setAssetsLargeText(config.twitch.largeImageText)
    } else if (largeImage && largeImage.name){
        presence.setAssetsLargeText(largeImage.name)
    }

    if (smallImage && smallImage.id) presence.setAssetsSmallImage(smallImage.id)
    if (config.twitch.smallImageText) {
        presence.setAssetsSmallText(config.twitch.smallImageText)
    } else if (smallImage && smallImage.name){
        presence.setAssetsSmallText(smallImage.name)
    }

    if (config.twitch.startTimestamp) presence.setStartTimestamp(config.twitch.startTimestamp)
    if (config.twitch.endTimestamp) presence.setEndTimestamp(config.twitch.endTimestamp)

    client.user.setPresence(presence.toDiscord())
    if (config.status === 'online' || config.status === 'idle' || config.status === 'dnd') {
        client.user.setStatus(config.status);
    }
    console.logger.info('Twitch RPC enabled!');
    console.logger.info('Twitch: ' + config.twitch.state);
    console.logger.info(`Status: ${!config.status ? 'default' : config.status}`)
})