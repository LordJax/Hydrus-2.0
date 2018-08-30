const Discord = require('discord.js');
const fs = require('fs');
const prefix = "h." || "H."

const client = new Discord.Client();
const http = require('http');
const express = require('express');
const records = require('./utils/records');
const errors = require('./error.js');
const TOKEN = process.env.TOKEN;


client.commands = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    client.commands.set(props.help.name, props);
  });
});





client.on('warn', console.warn);
client.on('error', console.error);
client.on('ready', () => console.log(`${client.user.username} is online`));
  client.on('ready', () => {
	client.user.setActivity(`${client.commands.size} Commands`, { type: "PLAYING" });
});



client.on('message', async message => { 
	if (message.author.bot)return;
  if (message.content.startsWith(prefix) && message.channel.type !== "text")return mesage.reply("Please use my commands in a server");												 
  if(!message.content.startsWith(prefix))return; 
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0].toUpperCase();
  let args = messageArray.slice(1);
  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client,message,args); 









});



client.login(TOKEN);
