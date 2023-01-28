import { ask } from "../commands/ask.js";

export const callbackQueryHandler = async (
  bot,
  id,
  possibleGuesses,
  // yourGuess,
  lowRange,
  highRange
) => {
  bot.on("callback_query", async (msg) => {
    const personAnswer = msg.data;

    possibleGuesses = highRange + lowRange - 1;
    let yourGuess = Math.round(possibleGuesses / 2);

    switch (personAnswer) {
      case "1":
        await bot.sendMessage(id, "Win");
        return;

      case "2":
        highRange = yourGuess - 1;
        await ask(bot, id, yourGuess);
        break;

      case "3":
        lowRange = yourGuess + 1;
        await ask(bot, id, yourGuess);
        break;

      default:
        break;
    }
  });
};
