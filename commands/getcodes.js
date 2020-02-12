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
    let details = ""
    let query = "&query="
    if(args[0] == "true"){
        details += "?details=true";
    }
    if(args[1]){
        query = ""
    } else {
        query = "?query="
    }
    for(let str of args.splice(1,args.length)){
        query += str + " ";
    }
    let url = "https://lecodedudestin.dorpaxio.fr:3002/v1/codes" + details + query;
    request.get({
        url: url,
        ...obj
    }, (err,res,bod) => {
        if(err) console.log(err);
        if(bod) {
            let objBod = JSON.parse(bod);
            if(args[0] == "true"){
                let str = "";
                for(let x of objBod.codes ){
                    str = JSON.stringify(x);
                    message.author.send(str);
                }
                message.author.send("Finished!")
            } else {
                message.author.send(objBod.codes);
            }
        }
    })
}