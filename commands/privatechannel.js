const Discord = require('discord.js')
exports.run = async (client,message,args) => {
    if(args.length < 1){
        message.channel.send("Il manque le nom!")
        return;
    }
    let role = {
        name: args[0],
    }
    message.guild.createRole(role)
        .then(role => {
            let embed = new Discord.RichEmbed();
            embed.setAuthor(message.author.username);
            embed.setTitle(args[0]);
            embed.setDescription("👍 pour rejoindre/partir")
            embed.setFooter(role.id)
            embed.setColor(Math.floor(Math.random() * 16777214) + 1);
            message.channel.send(embed)
                .then((message) => message.react('👍'))
                .catch((error) => console.log(error));
            message.guild.createChannel(args[0],{
                type: 'text',
                permissionOverwrites: [{
                    id: message.guild.id,
                    deny: ['READ_MESSAGES']
                },{
                    id: role.id,
                    allow: ['READ_MESSAGES']
                }]
            })
                .catch(console.error)
        })
        .catch(console.error);


}