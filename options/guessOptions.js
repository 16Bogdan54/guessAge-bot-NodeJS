export const guessOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: "Yes", callback_data: "1" },
        { text: "Lower", callback_data: "2" },
        { text: "Higher", callback_data: "3" },
      ],
    ],
  }),
};
