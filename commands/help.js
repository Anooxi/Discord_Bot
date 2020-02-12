const Discord = require('discord.js')
exports.run = async (client,message,args) => {
    let helpEmbed = new Discord.RichEmbed()
        .setTitle("Liste des commandes")
        .addField("!help", "Donne ce message d'aide")
        .addField("!setchannel", "Permet de faire les commandes dans 1 seul et unique channel")
        .addField("!thomas", ":)")
        .addField("!privatechannel", "Créer un channel privé avec un nom et un role associer")
        .addField("!code", "Entre un code")
        .addField("!ajoutcode", "[Maximou et Charlimou] Ajoute un code avec une récompense")
        .addField("!deletecode", "[Maximou et Charlimou] Supprime un code")
        .addField("!getcodes","[Maximou et Charlimou] Récupère la liste des codes (details,query)")

    message.reply(helpEmbed)
}