import { guessOptions } from "../options/guessOptions.js";
import  i18n from "i18n"

export const ask = async (bot, id, age) => {
  // let age = Math.floor(Math.ceil(possibleGuesses / 2));
  await bot.sendMessage(
    id,
    `${i18n.__("ask")} ${age}?`,
    guessOptions
  );
};
