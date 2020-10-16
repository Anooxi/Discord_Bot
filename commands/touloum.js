exports.run = async (client,message,args) => {
    if(message.member.voice != null){
        message.member.voice.setChannel(null);
    }
}