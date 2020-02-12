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
        if(res.statusCode == 204){
            message.reply("This code is already claimed.");
        }
        if(bod){
            bodObj = JSON.parse(bod);
            if(bodObj.ok){
                message.reply(bodObj.message + " You won : " + bodObj.code.reward);
            } else {
                message.reply(bodObj.message);
            }
        }
    })
}