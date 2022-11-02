const
	chalk = require('chalk'),
	winston = require('winston')

// skidded from https://github.com/Tenclea/YANG because i love this logger
module.exports.logger = winston.createLogger({
	transports: [new winston.transports.Console()],
	format: winston.format.printf(log => {
		const date = new Date();
		let times = [date.getHours(), date.getMinutes(), date.getSeconds()];
		times = times.map(t => { if (t < 10) { t = '0' + t; } return t; });

		const time = chalk.magenta(times.join(':')) + ' ';
		const message = ` » ${log.message}`;

		if (log.level === 'info') return time + chalk.greenBright(`[${log.level.toUpperCase()}] `) + message;
		else if (log.level === 'warn') return time + chalk.yellow(`[${log.level.toUpperCase()}] `) + message;
		else if (log.level === 'error') return time + chalk.red(`[${log.level.toUpperCase()}]`) + message;
		else if (log.level === 'debug') return time + chalk.blue(`[${log.level.toUpperCase()}]`) + message;
		else return time + `[${log.level.toUpperCase()}]` + message;
	}),
	level: 'info',
});

module.exports.log = console.log

module.exports.exit = (text) => {
    this.logger.error(`${text}. Exiting...`)
    process.exit();
}