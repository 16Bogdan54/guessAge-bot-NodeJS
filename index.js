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
import { callbackQUeryHAndler } from "./message-handlers/callbackQuery.js";

env.config();

const bot = new TelegramBot(process.env.TOKEN, { polling: true });

bot.on("message", async (message) => {
  const text = message.text;
  const id = message.chat.id;

  switch (text) {
    case "/start":
      start(bot, id);
      break;

    case "/ask":
      let lowRange = 1;
      let highRange = 100;
      let possibleGuesses = highRange + lowRange - 1;

      ask(bot, id, yourGuess);
      bot.on("callback_query", async (msg) => {
        const data = msg.data;
        callbackQUeryHAndler(
          bot,
          id,
          data,
          possibleGuesses,
          lowRange,
          highRange
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
