const Discord = require('discord.js');
const bot = new Discord.Client();

const gifs = require('./data/gifs.json');

bot.on('message', message => {
    if (message.content === '?giffany') {
        message.channel.send({
            files: [gifs[Math.floor(Math.random() * gifs.length)].url]
        });
    }
});

bot.login(process.env.DISCORD_TOKEN);
