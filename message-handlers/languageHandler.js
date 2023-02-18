import i18n from "i18n";

export const languageHandler = (bot) => {
  bot.on("callback_query", (msg) => {
    const lang = msg.data;

    switch (lang) {
      case "en":
        i18n.setLocale("en");
        break;

      case "ru":
        i18n.setLocale("ru");
        break;

      case "ukr":
        i18n.setLocale("ukr");
        break;
    }
  });
};
