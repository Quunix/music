const { Player } = require('discord-player');
const { Client, Intents } = require('discord.js');
const config = require('./config.js')
const Discord = require('discord.js');

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
});


global.client.config = require('./config');


global.player = new Player(global.client, global.client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');



client.on('message', msg => {
const yanıt = new Discord.MessageEmbed()
.setAuthor(client.user.username, 'https://i8.ae/UVgsA')
.setDescription(`***Merhaba!***, ${msg.author} \n\n Prefixim : **${config.px}** \n\n Davet etmek için : [Tıkla](https://discord.com/oauth2/authorize?client_id=935257372526510092&scope=bot&permissions=305146897) `)
.setColor('BLUE');

    if (msg.content === `<@935257372526510092>`) {
      msg.reply({embeds : [yanıt]})
    }
  })



global.client.login(config.token)
