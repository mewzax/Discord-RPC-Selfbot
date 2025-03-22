require('dotenv').config();
const discord = require('selfbot-discord');
const client = new discord.Client();
const config = require("./config")
const express = require('express');
const console = require("./utils/logger")
const app = express();

module.exports = client;

const token = process.env.token || config.token;

if (!token) {
  console.exit("No token provided");
} else {
  client.login(token);
}

config.mode ? require(`./presences/${config.mode}`) : console.exit('No presence selected!');
console.logger.info(`

                    ██████╗ ██╗███████╗ ██████╗ ██████╗ ██████╗ ██████╗       ██████╗ ██████╗  ██████╗
                    ██╔══██╗██║██╔════╝██╔════╝██╔═══██╗██╔══██╗██╔══██╗      ██╔══██╗██╔══██╗██╔════╝
                    ██║  ██║██║███████╗██║     ██║   ██║██████╔╝██║  ██║█████╗██████╔╝██████╔╝██║     
                    ██║  ██║██║╚════██║██║     ██║   ██║██╔══██╗██║  ██║╚════╝██╔══██╗██╔═══╝ ██║     
                    ██████╔╝██║███████║╚██████╗╚██████╔╝██║  ██║██████╔╝      ██║  ██║██║     ╚██████╗
                    ╚═════╝ ╚═╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝       ╚═╝  ╚═╝╚═╝      ╚═════╝                                                                                
`
)

app.get('/', (_, res) => {
  res.send('Presence is ready!');
});
app.listen(3000)
