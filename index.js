/*
 *
 * index.js : the entry point of the bot,
 * where the bot is created and configured,
 * and where the event listeners are set up.
 *
 **/

import TelegramBot from "node-telegram-bot-api";
import env from "dotenv";

env.config();

const bot = new TelegramBot(process.env.TOKEN, { polling: true });

bot.on("message", async (message) => {
  const text = message.text;
  const id = message.chat.id;

  switch (text) {
    case "/start":
      await bot.sendSticker(
        id,
        "https://tlgrm.eu/_/stickers/a02/7f2/a027f2cb-1aa3-456c-910f-4d7245ba437c/1.webp"
      );
      await bot.sendMessage(id, "Hi I can guess your age, just enter /start");
      break;

    case "/ask":
      await bot.sendMessage(id, "Your age is less or bigger than 50?");
      break;

    case "/changeLang":
      await bot.sendMessage(
        id,
        "Change language/Змінити мову/Изменить язык  /changeLang"
      );
      break;

    default:
      await bot.sendMessage(
        id,
        `Oops! You've entered wrong command or plain text`
      );
      break;
  }
});
