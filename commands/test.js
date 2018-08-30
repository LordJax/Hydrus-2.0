const rn = require('random-number')
const Discord = require("discord.js");
const fs = require('fs');
module.exports.run = async (client,message,args) => {
    let target = message.mentions.users.first() || message.author;
    var Canvas = require('canvas-prebuilt');

    Image = Canvas.Image
    canvas = new Canvas(1250, 200)
    
    ctx = canvas.getContext('2d');
    text = args.join(" ");

    
       
    
  ctx.font = '140px Juiceline';
  ctx.rotate();
  
  ctx.fillText(text, 10, 160,);


  var te = ctx.measureText(text);
  ctx.strokeStyle = 'rgba(0,255,237)';
  ctx.beginPath();
  ctx.lineTo(50, 102);
  ctx.lineTo(50 + te.width, 102);
  ctx.stroke();

  let buffer = canvas.toBuffer();
  message.channel.send({files: [buffer]})

   
}
module.exports.help = {
    name: "test"
} 