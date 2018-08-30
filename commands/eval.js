const Discord = require("discord.js");
const client = new Discord.Client();
const Colors = require('../embeds/Colors/Colors.json');
const rn = require('random-number')
const reallyRandom = require('really-random');
const errors = require('../error.js');
const aliases = require('aliases');
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

module.exports.run = async (client,message,args) => {


let randomRGB = function(){
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return r + ', ' + g + ', ' + b
  
}


let randomHex = function(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
 }



//module.exports.run = async (client,message,args) => {

    const clean = text => {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }


    try{
        const code = args.join(" ");
        if(!code) return errors.noEval(message.channel)
        let evaled = eval(code);
  
        if (typeof evaled !== "string"){
          evaled = require("util").inspect(evaled);
        }

         

          if (evaled.includes(client.token)){
              evaled = evaled.replace(client.token, "Nice try");
          } 
          
          let embed = new Discord.RichEmbed() .addField(`Input`, "***```" + code + "```***", true) .addField(`Output`, `\`\`\`js\n${evaled}\`\`\``) .setColor(Colors.cyan)  .setTimestamp();
                                            


    var Official = message.guild.members.find("id", "314165916264955904");
    if (message.member !== Official)return errors.noPerms(message, "BOT_OWNER")




    const words = ["--", "---", "----"];
    if( words.some(word => message.content.includes(word)) ) {
      
      
         message.author.send(embed).then(message.reply("Check Your Dms!"));
        return;


};

        

await message.channel.send(embed);

    } catch (err) {
       
    let errorEmbed = new Discord.RichEmbed()
    .addField(`Error`, "**```" + (err) + "```**", true)
    .setColor(Colors.red);
    message.channel.send(errorEmbed);
    }    
}
module.exports.help = {
    name: "eval"
    
}
