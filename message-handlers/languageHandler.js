import i18n from "i18n";

export const languageHandler = (bot) => {
  bot.on("callback_query", (msg) => {
    const lang = msg.data;
    i18n.setLocale(lang);
  });
};
