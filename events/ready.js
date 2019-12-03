module.exports = (client) => {
    console.log("Connected as : " + client.user.tag);
    console.log("Servers :")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)

        // guild.channels.forEach((channel) => {
        //     console.log(" -- " + channel.type + " : " +channel.name + " --- " + channel.id)
        // })
        // guild.members.forEach((member) => {
        //     console.log(" - " + member.id + " : " + member.nickname )
        // })

    })
    client.user.setActivity("avec du JS!")
}