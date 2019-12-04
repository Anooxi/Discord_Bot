const Discord = require('discord.js')
exports.run = async (client,message,args) => {
    if(args.length < 1){
        message.channel.send("Il manque le nom!")
        return;
    }
    let embed = new Discord.RichEmbed();
    embed.setAuthor(message.author.username);
    embed.setTitle(args[0]);
    embed.setColor(Math.floor(Math.random() * 16777214) + 1);
    message.channel.send(embed)
        .then((message) => message.react('👍')
            .then(() => message.react('👎')))
        .catch((error) => console.log(error));
    let role = {
        name: args[0],
    }
    message.guild.createRole(role);
}