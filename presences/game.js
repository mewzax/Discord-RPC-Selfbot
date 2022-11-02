const rpc = require('discordrpcgenerator'),
    client = require('..'),
    config = require('.././config'),
    console = require('.././utils/logger'),
    discord = require('../utils/discord')

client.on("ready", async() => {
    console.logger.info(`Logged in as ${client.user.tag}!`)
    if (!config.game.applicationID) return console.exit("No application ID specified");
    if (!config.game.name) return console.exit("No application name specified");
    
    let presence = new rpc.Rpc()
        .setName(config.game.name)
        .setType("PLAYING")
        .setApplicationId(config.game.applicationID)

    largeImage = config.game.largeImageKey ? await discord.getImage(config.game.applicationID, config.game.largeImageKey) : null
    smallImage = config.game.smallImageKey ? await discord.getImage(config.game.applicationID, config.game.smallImageKey) : null

    if (config.game.state) presence.setState(config.game.state)
    if (config.game.details) presence.setDetails(config.game.details)

    if (largeImage && largeImage.id) presence.setAssetsLargeImage(largeImage.id)
    if (largeImage && config.game.largeImageText) {
        presence.setAssetsLargeText(config.game.largeImageText)
    } else if (largeImage && largeImage.name){
        presence.setAssetsLargeText(largeImage.name)
    }

    if (smallImage && smallImage.id) presence.setAssetsSmallImage(smallImage.id)
    if (smallImage && config.game.smallImageText) {
        presence.setAssetsSmallText(config.game.smallImageText)
    } else if (smallImage && smallImage.name){
        presence.setAssetsSmallText(smallImage.name)
    }

    if (config.game.startTimestamp) presence.setStartTimestamp(config.game.startTimestamp)
    if (config.game.endTimestamp) presence.setEndTimestamp(config.game.endTimestamp)

    client.user.setPresence(presence.toDiscord())
    if (config.status === 'online' || config.status === 'idle' || config.status === 'dnd') {
        client.user.setStatus(config.status);
    }
    console.logger.info('Game RPC enabled!');
    console.logger.info('Game: ' + config.game.name);
    console.logger.info(`Status: ${!config.status ? 'default' : config.status}`)
})