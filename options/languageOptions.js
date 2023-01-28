export const languageOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: "English", callback_data: "eng" },
        { text: "Русский", callback_data: "ru" },
        { text: "Українська", callback_data: "ukr" },
      ],
    ],
  }),
};
