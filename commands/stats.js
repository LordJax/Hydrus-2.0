const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
const version = "1.0.0"  
let bicon = client.user.displayAvatarURL;
const Colors = require('../embeds/Colors/Colors.json');
let parseTime = function(msec) {
    var seconds = Math.floor(msec/1000); msec %= 1000;
    var minutes = Math.floor(seconds/60); seconds %= 60;
    var hours = Math.floor(minutes/60); minutes %= 60;
    var days = Math.floor(hours/24); hours %= 24;
    var written = false;
    return(days?(written=true,days+" days"):"")+(written?", ":"")
      +(hours?(written=true,hours+" hours"):"")+(written?", ":"")
      +(minutes?(written=true,minutes+" minutes"):"")+(written?", ":"")
      +(seconds?(written=true,seconds+" seconds"):"")+(written?" ":"");
};

let statsEmbed = new Discord.RichEmbed()
.setTitle(`Stats for ${client.user.username}`)
.addField(`❯ Mem Usage`,  `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
.addField("❯ Servers", `${client.guilds.size}`)
.addField(`❯ Owner`, `Official#0196`)
.addField(`❯ Version`, version)
.addField("❯ Users", `${client.users.size}`)
.addField("❯ Channels", `${client.channels.size}`)
.addField("❯ Uptime", parseTime(client.uptime))
.addField("❯ Commands", client.commands.size)
.addField("❯ Discord.js", `v${Discord.version}`)
.addField("❯ Node.js" , `${process.version}`)
.setColor(Colors.cyan)
.setTimestamp()
.setThumbnail(bicon);
 message.channel.send(statsEmbed);

}
module.exports.help = {
    name: "stats"
}