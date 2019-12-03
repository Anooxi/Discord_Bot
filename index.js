const botconfig = require("./token.json")
const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require("fs")
const Enmap = require('enmap')

client.config = botconfig;

fs.readdir('./events/', (err,files) => {
    if(err){
        return console.log(err)
    }

    files.forEach(file => {
        if(!file.endsWith('.js')){
            return
        }
        const event = require('./events/' + file)
        let eventName = file.split('.')[0]
        console.log("Succesfully loaded event : " + file)
        client.on(eventName, event.bind(null, client))
        delete require.cache[require.resolve(`./events/${file}`)]
    })
})

client.commands = new Enmap();

fs.readdir('./commands/', (err,files) => {
    if(err){
        return console.log(err)
    }

    files.forEach(file => {
        if(!file.endsWith('.js')){
            return
        }
        let props = require('./commands/' + file)
        console.log("Succesfully loaded command : " + file)
        let commandName = file.split('.')[0]
        client.commands.set(commandName, props)
    })
})

client.login(botconfig.token)