const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Presence is ready!');
});

app.listen(3000, () => {
  console.log('Project is ready');
});

const discord = require('discord.js-selfbot-v11');
const fs = require('fs');
const { dir } = require('console');

const client = new discord.Client();
module.exports = client;

const presences = fs.readdirSync('./presences/');
presences.forEach(file => {
const event = require(`./presences/${file}`);
});

const status = fs.readdirSync('./status/');
status.forEach(file => {
const event = require(`./status/${file}`);
});

client.login(process.env.TOKEN);