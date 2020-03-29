kconst Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("692507870452908070")
setInterval(function() {
channel.send(`bost bots bots bots bots`);
}, 30)
})

client.login(process.env.BOT_TOKEN);