const fs = require('fs')

module.exports = (client, messageReaction, user) => {
    if(user.bot) return;
    if(messageReaction.emoji == '🆒'){
        fs.readFile('./quotes.json', 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
            } else {
            obj = JSON.parse(data); //now it an object
            //console.log(obj);
            let quote = messageReaction.message.content;
            let year = messageReaction.message.createdAt.getFullYear();
            let nickname;
            if(messageReaction.message.member.nickname == undefined){
                nickname = messageReaction.message.author.username
            } else {
                nickname = messageReaction.message.member.nickname
            }
            
            obj.numberofquotes = obj.numberofquotes + 1;
            obj.table.push({
                quote: quote,
                year: year,
                nickname: nickname
            });

            json = JSON.stringify(obj);

            fs.writeFile('./quotes.json', json, 'utf8', (err) => {
                if(eff) console.log(err);
            });

            }
        });
    }
    if(!messageReaction.message.embeds[0]) return;
    if(messageReaction.emoji != '👍') return;
    messageReaction.message.guild.fetchMember(user)
        .then(member => {
            member.addRole(messageReaction.message.embeds[0].footer.text)
        })
        .catch(console.error)
}