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
const botName = process.env.BOT_NAME_MENTION || "your bot name";

bot.on("message", async (message) => {
  const text = message.text;
  const id = message.chat.id;

  switch (text) {
    case `/start${botName}`:
      start(bot, id);
      break;

    case `/ask${botName}`:
      let lowRange = 1;
      let highRange = 100;
      let possibleGuesses = highRange + lowRange - 1;
      let yourGuess = Math.ceil(possibleGuesses / 2);

      ask(bot, id, yourGuess);
      highRange /= 2;

      callbackQueryHandler(
        bot,
        id,
        possibleGuesses,
        // yourGuess,
        lowRange,
        highRange
      );
      break;

    case `/language${botName}`:
      language(bot, id);
      break;

    default:
      break;
  }
});
