const Discord = require('discord.js');
const bot = new Discord.Client();

const chalk = require('chalk'); 
const config = require('../config.json');

let commands_ran = 1;

console.log('Logging in');

bot.on('ready', () => { 
    console.clear();
    console.log('Logged in as ' + chalk.bgHex('#9090ff').black.visible('.'));
});

bot.on('message', async function (message) {
    if (message.author.id != bot.user.id) return;

    let command_prefix = config.prefix;
    let message_array = message.content.split(' ');
    let bot_command = message_array[0].replace(command_prefix, '');
    let command_args = message_array.slice(1);
    if (!message.content.startsWith(command_prefix)) return;

    if (bot_command == "ping") {
        console.log('[' + commands_ran++ + '] - Ping command executed');
        message.edit(Math.floor(bot.ping) + ' ms');
    }

    if (bot_command == "test") {
        console.log('[' + commands_ran++ + '] - Test command executed');
        message.edit('a');
    }
});

bot.login(config.token).catch(() => console.log('Incorrect token provided'));