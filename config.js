// to understand how to use app id and image keys, follow https://github.com/slowwdev/Discord-Selfbot-RPC/wiki/Installation

module.exports = {
    // spotify/game/twitch
    "mode": "", 
    // dnd/online/idle
    "status": "",

    "game": {
        "applicationID": "",

        "name": "", // title
        "details": "", // first row below title
        "state": "", // row below first row

        "largeImageKey": "", // Large Image
        "largeImageText": "", // Small Image

        "smallImageKey": "",
        "smallImageText": "",
        
        // Date.now() Epoch timestamps
        "startTimestamp": "", // time elapsed since this timestamp (increase ++)
        "endTimestamp": "" // time left since this timestamp (decrease --)
    },
    "twitch": {
        "applicationID": "",
        "url": "", // twitch channel link

        "details": "", // title
        "state": "", // first row below title (playing ...)

        "largeImageKey": "",
        "largeImageText": "", // will also be second row below title
        
        "smallImageKey": "",
        "smallImageText": "",

        "startTimestamp": "",
        "endTimestamp": ""
    },
    "spotify": {
        "name": "", // for exemple listening to {name} instead of listening to spotify
        "details": "", // title
        "state": "", // row below title

        "largeImageKey": "", // https://github.com/mewzax/Discord-RPC-Selfbot/wiki/Spotify-API
        "largeImageText": "", // will also be second row below title
        
        "smallImageKey": "",
        "smallImageText": "",
        
        "startTimestamp": "",
        "endTimestamp": "",
    }
}