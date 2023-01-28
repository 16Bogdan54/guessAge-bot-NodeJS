import { languageOptions } from "../options/languageOptions.js";

export const language = async (bot, id) => {
  await bot.sendMessage(
    id,
    "Change language/Изменить язык/Змінити мову",
    languageOptions
  );
};
