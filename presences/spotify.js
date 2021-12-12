const chalk = require('chalk');
const rpc = require('discordrpcgenerator');

const config = require('.././config.json');

if (config.mode === 'spotify') {

	// Create the RPC
	const client = require('../index');
	client.on('ready', () => {

		try {
			const presence = rpc.createSpotifyRpc(client)

				.setDetails(config.settings.spotify.details ? config.settings.spotify.details : undefined)
				.setState(config.settings.spotify.state ? config.settings.spotify.state : undefined)

				.setAssetslargeImage(config.settings.spotify.largeImageKey)
				.setAssetsLargeText(config.settings.spotify.largeImageText ? config.settings.spotify.largeImageText : undefined)

				.setAssetsSmallImage(config.settings.spotify.smallimage ? config.settings.spotify.smallimage : undefined)
				.setAssetsSmallText(config.settings.spotify.smallimagetext ? config.settings.spotify.smallimagetext : undefined)

				.setStartTimestamp(config.settings.spotify.startTimestamp ? config.settings.spotify.startTimestamp : undefined)
				.setEndTimestamp(config.settings.spotify.endTimestamp ? config.settings.spotify.endTimestamp : undefined);

			// Set the presence
			client.user.setPresence(presence.toDiscord());

			// Set the status
			if (config.status === 'online' || config.status === 'idle' || config.status === 'dnd') {
				client.user.setStatus(config.status);
			}

			if (config.status === 'offline' || config.status === 'invisible') {
				console.log('Status cant be set to' + config.status + '\nPlease change the status in the config.json file');
			}

			// Done!
			console.log(chalk.hex('#800080')('Spotify RPC enabled successfully!'));
			console.log(chalk.hex('#800080')('Spotify: ' + config.settings.spotify.details));
			console.log(chalk.hex('#800080')('Status: ' + config.status ? config.status : 'status not defined'));


		} catch (err) {
			console.log(err);
			console.log(chalk.hex('#800080')('Spotify RPC failed to enable!'));
		}
	});
}