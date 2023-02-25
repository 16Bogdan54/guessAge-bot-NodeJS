import { ask } from "../commands/ask.js";
import i18n from "i18n";

export const ageHandler = async (
  bot,
  id,
  possibleGuesses,
  yourGuess,
  lowRange,
  highRange
) => {
  bot.on("callback_query", async (msg) => {
    const personAnswer = msg.data;

    console.log("hr", highRange, "lr", lowRange);

    possibleGuesses = highRange + lowRange - 1;
    yourGuess = Math.round(possibleGuesses / 2);

    switch (personAnswer) {
      case "1":
        await bot.sendMessage(id, i18n.__("win"));
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
