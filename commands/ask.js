import { options } from "../options/options.js";

export const ask = async (bot, id, age) => {
  await bot.sendMessage(id, `Your age is less or bigger than ${age}?`, options);
};
