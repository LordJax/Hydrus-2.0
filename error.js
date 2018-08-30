const Discord = require("discord.js");
const fs = require("fs");
let config = require("./embeds/Colors/Colors.json");



module.exports.noPerms = (message, perm) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTitle("Insufficient Permission")
        .setColor(config.red)
        .addField("Permission needed", perm);

    message.channel.send(embed).then(m => m.delete(20000));
}

module.exports.equalPerms = (message, user, perms) => {

    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor(config.red)
        .setTitle("Error")
        .addField(`${user} has perms`, perms);

    message.channel.send(embed).then(m => m.delete(20000));

}
module.exports.run = async (client,message,args) => {

module.exports.botuser = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("You cannot ban a bot.")
        .setColor(config.red);

        message.send(embed).then(m => m.delete(20000));
}

module.exports.cantfindUser = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Could not find that user.")
        .setColor(config.red);

        message.send(embed).then(m => m.delete(20000));
}

module.exports.noReason = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Please supply a reason.")
        .setColor(config.red);

        message.send(embed).then(m => m.delete(20000));

}

module.exports.noEval = (message) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription("Please use a valid evaluation.")
    .setColor(config.red);
    message.send(embed).then(m => m.delete(20000));
}}