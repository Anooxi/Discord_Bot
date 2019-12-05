module.exports = (client, messageReaction, user) => {
    if(user.bot) return;
    if(!messageReaction.message.embeds[0]) return;
    if(messageReaction.emoji != '👍') return;
    messageReaction.message.guild.fetchMember(user)
        .then(member => {
            member.removeRole(messageReaction.message.embeds[0].footer.text)
        })
        .catch(console.error)
}