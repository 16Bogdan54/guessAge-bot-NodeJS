export const guessOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: "✅", callback_data: "1" },
        { text: "<", callback_data: "2" },
        { text: ">", callback_data: "3" },
      ],
    ],
  }),
};
