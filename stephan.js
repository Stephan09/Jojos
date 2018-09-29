const client = new Discord.Client();
const Discord = require('discord.js');


client.on('message', message => {
   if(message.content.toLowerCase() === 'test'){
	   message.channel.send('hallo');
   }
});

client.login(process.env.BOT_TOKEN);
