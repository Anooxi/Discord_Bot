const fs = require('fs')

exports.run = async (client,message,args) => {
    let serv = message.channel.guild.id;
    let chan = message.channel.id

    fs.readFile('./defaultchannels.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data); //now it an object
        let bool = true;
        // console.log(obj.table)
        obj.table.forEach((line) => {
            if(line.serv == serv){
                line.chan = chan
                bool = false;
            }
        })
        if(bool){
            obj.table.push({
                serv: serv,
                chan: chan
            }); //add some data
        }
        
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFile('./defaultchannels.json', json, 'utf8', (err) => {
            if(err) console.log(err);
        }); // write it back 
    }});
    message.channel.send('k')
}