const client = require('..');
const config = require('../config.json');

if (config.status === 'online' || config.status === 'idle' || config.status === 'dnd') {
client.on('ready', () => {
client.user.setStatus(config.status);
console.log('Status set to ' + config.status);});}

if (config.status === 'offline' || config.status === 'invisible') {
client.on('ready', () => {
client.user.setStatus(config.status);
console.log('Status cant be set to' + config.status);});}

if (!config.status) {
console.log('Status not set. Ok I understand');}