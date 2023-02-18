/*
 *
 * commands/ : this directory might contain individual files
 * for each command that the bot supports, such as /start and /help.
 *
 * */

export const start = (bot, id, msg) => {
  bot.sendSticker(
    id,
    "https://tlgrm.eu/_/stickers/a02/7f2/a027f2cb-1aa3-456c-910f-4d7245ba437c/1.webp"
  );
  // "Hi I can guess your age! /ask me😸"
  bot.sendMessage(id, msg);
};
