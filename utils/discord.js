const rpc = require('discordrpcgenerator');

const getImage = async(applicationID, imageKey) => await rpc.getRpcImage(applicationID, imageKey) 

module.exports.getImage = getImage