const Discord = require('discord.js')
exports.run = async (client,message,args) => {
    let helpEmbed = new Discord.RichEmbed()
        .setTitle("Liste des commandes")
        .addField("!help", "Donne ce message d'aide")
        .addField("!setchannel", "Permet de faire les commandes dans 1 seul et unique channel")
        .addField("!thomas", ":)")
        .addField("!privatechannel", "Créer un channel privé avec un nom et un role associer")
    message.reply(helpEmbed)
}