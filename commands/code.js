const request = require('request');
const discord = require('discord.js');
const token = require('../token.json');
const obj = {
    headers: { "content-type": "application/json"},
    url: "https://lecodedudestin.dorpaxio.fr:3002/v1/codes"
}

exports.run = async (client,message,args) => {
    if(args.length < 1){
        message.channel.send("Il manque des arguments! (code)");
        return;
    }
    let code = args[0];
    request.post("https://lecodedudestin.dorpaxio.fr:3002/v1/codes/"+code, (err,res,bod) => {
        if(err) console.log(err);
        if(bod){
            console.log(bod)

            if(bod.ok){
                message.reply(bod.reward);
            } else {
                message.reply("T NUL WSH");
            }
        }
    })
}