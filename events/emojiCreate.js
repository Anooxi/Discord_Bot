const fs = require('fs')
const Discord = require('discord.js')
module.exports = (client,emoji) => {
    fs.readFile("./defaultchannels.json", 'utf8', (err,data) => {
        let obj = JSON.parse(data);
        obj.table.forEach((line) => {
            if(line.serv == emoji.guild.id){
                client.channels.get(line.chan).send("Un emoji a été crée! @everyone");
                let rich = new Discord.RichEmbed()
                rich.setImage(emoji.url)
                rich.setDescription(":"+ emoji.name +":")
                let promised = emoji.fetchAuthor()
                promised.then(function (result){
                    let promise = emoji.guild.fetchMember(result);
                    promise.then(function(result){
                        rich.setAuthor("Auteur de la monstruosité : " + result.user.username);
                        client.channels.get(line.chan).send(rich);
                    }, function(reason){
                        console.log(reason);
                    })
                }, function(reason) {
                    console.log(reason)
                })
            }
        })
    })
}