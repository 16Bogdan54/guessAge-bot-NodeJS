import i18n from "i18n";

export const guessOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: `${i18n.__("yes_btn")}`, callback_data: "1" },
        { text: `${i18n.__("lower_btn")}`, callback_data: "2" },
        { text: `${i18n.__("higher_btn")}`, callback_data: "3" },
      ],
    ],
  }),
};
