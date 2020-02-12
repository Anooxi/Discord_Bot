const request = require('request');
const discord = require('discord.js');
const token = require('../token.json');
const obj = {
    headers: { "content-type": "application/json"},
    url: "https://lecodedudestin.dorpaxio.fr:3002/v1/codes"
}

exports.run = async (client,message,args) => {

}