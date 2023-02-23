const chalk = require('chalk');
const winston = require('winston');

// skidded from https://github.com/Tenclea/YANG because i love this logger
module.exports.logger = winston.createLogger({
	transports: [new winston.transports.Console()],
	format: winston.format.printf(log => {
		const date = new Date();
		let times = [date.getHours(), date.getMinutes(), date.getSeconds()];
		times = times.map(t => { if (t < 10) { t = '0' + t; } return t; });

		const time = chalk.magenta(times.join(':')) + ' ';
		const message = ` » ${log.message}`;
		const logColors = { debug: 'blue', error: 'red', info: 'greenBright', warn: 'yellow' };

		return time + (logColors[log.level] ? chalk[logColors[log.level]](`[${log.level.toUpperCase()}]`) : `[${log.level.toUpperCase()}]`) + message;
	}),
	level: 'info'
});

module.exports.log = console.log;

module.exports.exit = (text) => {
    this.logger.error(`${text}. Exiting...`);
    process.exit();
};
