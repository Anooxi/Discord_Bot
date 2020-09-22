const fs = require('fs')

exports.run = async (client,message,args) => {
    fs.readFile('./quotes.json', 'utf8', function readFileCallback(err, data){
        if(err){
            console.log(err);
            message.channel.send("oskur y'a une erreur :(");
        } else {
            obj = JSON.parse(data);
            let quotenumber = Math.floor(Math.random() * obj.numberofquotes);

            message.channel.send("> " + obj.table[quotenumber].quote + "\n" + "**" + obj.table[quotenumber].nickname + "**" + " - " + obj.table[quotenumber].year);
        }
    });
    message.delete();
}