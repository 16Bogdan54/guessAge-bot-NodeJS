/*
 *
 * index.js : the entry point of the bot,
 * where the bot is created and configured,
 * and where the event listeners are set up.
 *
 **/

import TelegramBot from "node-telegram-bot-api";
import env from "dotenv";
import { start } from "./commands/start.js";
import { ask } from "./commands/ask.js";
import { language } from "./commands/language.js";
import { callbackQueryHandler } from "./message-handlers/callbackQuery.js";

env.config();

const bot = new TelegramBot(process.env.TOKEN, { polling: true });

// let lowRange = 1;
// let highRange = 100;
let firstTime = 0;
// let possibleGuesses = 0;
// let yourGuess = 0;

console.count("index1");

bot.on("message", async (message) => {
  const text = message.text;
  const id = message.chat.id;

  switch (text) {
    case "/start":
      start(bot, id);
      break;

    case "/ask":
      console.count("index2");
      // if (possibleGuesses === 0) {
      // lowRange = 1;
      // highRange = 100;
      if (firstTime === 0) ask(bot, id, 50);
      //   console.log("in if ");
      // }

      bot.on("callback_query", async (msg) => {
        firstTime = 1;
        const data = msg.data;
        callbackQueryHandler(
          bot,
          id,
          data
          // lowRange,
          // highRange
          // possibleGuesses,
          // yourGuess
        );
      });
      break;

    case "/language":
      language(bot, id);
      break;

    default:
      break;
  }
});
