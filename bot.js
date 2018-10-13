const Discord = require('discord.js');



const client = new Discord.Client();


const prefix = '!';

 



client.on('ready', () => {



    console.log('I am ready!');



});



 



client.on('message', message => {



    if (message.content === 'ping') {



       message.reply('pong');



       }



});




client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'Creativerse',
            type: "PLAYING",
        }
    });
});    





client.on('message', message => {
	
	if(message.content.toLowerCase() === '<@498113087765872646>') { if(message.author.bot) { return; }
	 
	         var embed = new Discord.RichEmbed()
			 
			 .addField('Hello! I am JoJos Bot:smile:  ', 'At the moment I am a beta bot and will be programmed by Stephan. I dont have many commands yet, but some will come later:wink: .')
			 .setColor('GREEN')
			 
			message.channel.sendEmbed(embed);
	
	}
	
});





client.on('guildMemberAdd', member => {
		const channel = member.guild.channels.find(ch => ch.name === 'chat');
        if (!channel) return;
		channel.send(`${member} Welcome to Jojo's World Discord server:grinning:`);
});







 
client.on('message', message => {
	
	if(message.content.toLowerCase() === prefix + 'help') { if(message.author.bot) { return; }
	 
	         var embed = new Discord.RichEmbed()
			 
			 .addField('here is my list with commands: ', '!help -gives help commands.')
			 .setColor('GREEN')
			 
			message.channel.sendEmbed(embed);
	
	}
	
});







// THIS  MUST  BE  THIS  WAY



client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
