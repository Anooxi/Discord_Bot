const fs = require('fs')
module.exports = (client,message) => {
    if(message.author.bot) return;
    if(message.content.indexOf(client.config.prefix) !== 0) return
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();
    fs.readFile('./defaultchannels.json','utf8',(err,data) => {
        if(err) console.log(err);
        if( "setchannel" != command.toString() || data[message.channel.guild.id] != message.channel.id) return;
        console.log("salut");
        const cmd = client.commands.get(command)
        if(!cmd) return
        cmd.run(client,message,args)
    })
}