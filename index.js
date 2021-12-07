const config = require('./config');

if (!config.mode) {
    throw new Error('No mode specified');
  }

if (!process.env.TOKEN) {
    throw new Error('No token specified, please set TOKEN environment variable');
}

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
const { isFunction } = require('util');

const client = new discord.Client();
module.exports = client;

const presences = fs.readdirSync('./presences/');
presences.forEach(file => {
const event = require(`./presences/${file}`);
});

client.login(process.env.TOKEN);
