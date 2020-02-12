const request = require('request');
const discord = require('discord.js');
const token = require('../token.json');
const obj = {
    headers: { "content-type": "application/json", Authorization: token.tokendudestin },
    url: "https://lecodedudestin.dorpaxio.fr:3002/v1/codes"
}

exports.run = async (client,message,args) => {
    if(message.author.id != 112649141418516480 && message.author.id != 128579553378566144){
        message.channel.send("Tu n'as pas les droits !");
        return;
    }
    if(args.length < 2){
        message.channel.send("Il manque des arguments! (code,rewards...)");
        return;
    }
    let code = args[0];
    let reward = "";
    for(let str of args.splice(1,args.length)){
        reward += str + " ";
    }

    request.put({
        body: JSON.stringify({
            code: code,
            reward: reward,
        }), ...obj
    }, (err,res,bod) => {
        if(err) console.log(err);
        if(bod) {
            bodObj = JSON.parse(bod);
            if(bodObj.ok){
                message.reply(bodObj.message);
            } else {
                message.reply("Error : " + bodObj.message);
            }
        };
        // if(res) console.log(res);
    })
}