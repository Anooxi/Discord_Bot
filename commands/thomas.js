exports.run = async (client,message,args) => {
    if(message.author.id != 128579553378566144 && message.author.id != 273182362039222273){
        return
    } else {
        message.channel.send("THO-MAS! " + "<@273182362039222273>" )
    }
}