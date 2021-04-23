const fs = require('fs')
module.exports = (client,message) => {
    if(message.author.bot) return;
    if(message.content.includes("<@!273182362039222273>") && message.content.includes("<@!174243306887184384>") ){
        message.react('🇹')
            .then(() => message.react('🇭'))
            .then(() => message.react('😂'))
            .then(() => message.react('➖'))
            .then(() => message.react('🇲'))
            .then(() => message.react('🇦'))
            .then(() => message.react('🇸'))
    } else if(message.content.includes("<@!273182362039222273>")){
        message.react('🇹')
            .then(() => message.react('🇭'))
            .then(() => message.react('🇴'))
            .then(() => message.react('➖'))
            .then(() => message.react('🇲'))
            .then(() => message.react('🇦'))
            .then(() => message.react('🇸'))
    } else if(message.content.includes("<@!174243306887184384>")){
        message.react('😂');
    } else if(message.content.includes("<@128579553378566144>")){
        message.author.send("https://freetrial.finalfantasyxiv.com/fr/");
    }
    if(message.content.indexOf(client.config.prefix) !== 0) return
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();
    let promise = new Promise(function(resolve,reject) {
        fs.readFile("./defaultchannels.json",'utf8', (err,data)=> {
            if(err) reject(err);
            let obj = JSON.parse(data)
            obj.table.forEach((line) => {
                if(line.chan == message.channel.id || command === "setchannel" || message.author.id == 128579553378566144 || message.author.id == 112649141418516480 || message.content == "!quote" || message.content == "!lastquote" || message.content == "!here"){
                    resolve(true)
                }
            })
            resolve(false)
        })
    })
    const cmd = client.commands.get(command);
    promise.then(
        function (result){
            if(result == true){
                if(!cmd) return;
                cmd.run(client,message,args);
            } else {
                // console.log("???")
            }
        },
        function (error){
            console.error(error)
        }
    )
    // const cmd = client.commands.get(command)
    // if(!cmd) return
    // cmd.run(client,message,args)

}
