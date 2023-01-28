import { guessOptions } from "../options/guessOptions.js";

export const ask = async (bot, id, age) => {
  // let age = Math.floor(Math.ceil(possibleGuesses / 2));
  await bot.sendMessage(
    id,
    `Your age is less or bigger than ${age}?`,
    guessOptions
  );
};
