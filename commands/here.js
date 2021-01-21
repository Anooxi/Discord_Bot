const discord = require('discord.js');

exports.run = async (client,message,args) => {
    let members = message.member.voiceChannel.members;
    let string = ``;
    members.forEach(element => {
        let id = element.user.id
        message.reply(`ICI CONNARD, <@${id}> !`);
    });
}