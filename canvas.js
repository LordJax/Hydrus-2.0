let Canvas = require("canvas-prebuilt");
let canvas = new Canvas(640, 314);
let ctx = canvas.getContext("2d");
new Promise(resolve => require("request")(msg.author.displayAvatarURL, { encoding: null }, (e,r,b) => resolve(b))).then(avatar => {
let avatarI = new Canvas.Image();
avatarI.src = avatar;
ctx.drawImage(avatarI, 52, 47, 76, 76);
let buffer = canvas.toBuffer();
msg.channel.send({files: [buffer]});
});