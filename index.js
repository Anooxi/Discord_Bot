const botconfig = require("./token.json")
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    console.log("Servers :")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name);

        guild.channels.forEach((channel) => {
            console.log(" -- " + channel.type + " : " +channel.name + " --- " + channel.id)
        })

    })
    client.user.setActivity("avec du JS!")
})

client.on('message', (receivedMessage) => {
    // Empeche le bot de repondre a ses propres messages
    if ( receivedMessage.author == client.user || receivedMessage.author.bot || receivedMessage.channel.type == "dm"){
        return
    }
    let prefix = botconfig.prefix
    if(!receivedMessage.content.startsWith(prefix)) return;
    let messageArray = receivedMessage.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
})

client.login(botconfig.token)