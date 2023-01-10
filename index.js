/*
*
* index.js : the entry point of the bot,
* where the bot is created and configured,
* and where the event listeners are set up.
*
**/

import TelegramBot from 'node-telegram-bot-api';

const bot = new TelegramBot('TOKEN', {polling: true})

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, 'Received message')
});