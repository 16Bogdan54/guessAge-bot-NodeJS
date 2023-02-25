import TelegramBot from "node-telegram-bot-api";
import env from "dotenv";
import i18n from "i18n";
import { start } from "./commands/start.js";
import { ask } from "./commands/ask.js";
import { language } from "./commands/language.js";
import { ageHandler } from "./message-handlers/ageHandler.js";
import { languageHandler } from "./message-handlers/languageHandler.js";

env.config();

i18n.configure({
  locales: ["en", "ru", "ukr"],
  directory: "./locales",
});

const bot = new TelegramBot(process.env.TOKEN, { polling: true });
const botName = process.env.BOT_NAME_MENTION || "your bot name";

bot.on("message", async (message) => {
  const text = message.text;
  const id = message.chat.id;

  switch (text) {
    case `/start${botName}`:
      let msg = i18n.__("greeting");
      console.log(i18n.__("greeting"))
      await start(bot, id, msg);
      break;

    case `/ask${botName}`:
      let lowRange = 1,
        highRange = 100;
      let possibleGuesses = highRange + lowRange - 1;
      let yourGuess = Math.round(possibleGuesses / 2);

      await ask(bot, id, yourGuess);
      highRange /= 2;

      await ageHandler(bot, id, possibleGuesses, yourGuess, lowRange, highRange);
      break;

    case `/language${botName}`:
      await language(bot, id);
      languageHandler(bot);
      break;

    default:
      break;
  }
});
