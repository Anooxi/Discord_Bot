const request = require('request');
const discord = require('discord.js');
const token = require('../token.json');
const obj = {
    headers: { "content-type": "application/json", Authorization: token.tokendudestin }
}

exports.run = async (client,message,args) => {
    if(message.author.id != 112649141418516480 && message.author.id != 128579553378566144){
        message.channel.send("Tu n'as pas les droits !");
        return;
    }
    if(args.length < 1){
        message.channel.send("Il manque des arguments! (code)");
        return;
    }
    let code = args[0];

    request.delete({
        url: "https://lecodedudestin.dorpaxio.fr:3002/v1/codes/" + code,
        ...obj
    }, (err,res,bod) => {
        if(err) console.log(err);
        if(bod){
            let objBod = JSON.parse(bod);
            message.reply(objBod.message)
        }
    })
}