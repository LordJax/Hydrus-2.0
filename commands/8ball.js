const Discord = require(`discord.js`);
const errors = require('../error.js');
exports.run = async (client, message, [args]) => {
    if (!args) return errors.noReason();
    let response = ["Yes", "Maybe", "No", "Try again later", "Possibly", "Absolutely"];
    let text = (`${response[~~(Math.random() * response.length)]}, ${message.author.username}.`);
    var Canvas = require('canvas-prebuilt');
    Image = Canvas.Image
    canvas = new Canvas(1250, 200)
    ctx = canvas.getContext('2d');
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
};
exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: ["ball"],
    permLevel: 0,
    botPerms: [],
    requiredFuncs: [],
};  
exports.help = {
    name: "8ball",
};