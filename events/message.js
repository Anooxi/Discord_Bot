const fs = require('fs')
module.exports = (client,message) => {
    if(message.author.bot) return;
    if(message.content.indexOf(client.config.prefix) !== 0) return
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();
    let promise = new Promise(function(resolve,reject) {
        fs.readFile("./defaultchannels.json",'utf8', (err,data)=> {
            if(err) reject(err);
            let obj = JSON.parse(data)
            obj.table.forEach((test) => {
                console.log(test);
            })
            resolve(data)
        })
    })
    const cmd = client.commands.get(command);
    promise.then(
        function (result){
            if(!cmd) return;
            cmd.run(client,message,args);
        },
        function (error){
            console.log(error)
        }
    )
    // const cmd = client.commands.get(command)
    // if(!cmd) return
    // cmd.run(client,message,args)

}