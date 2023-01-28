import { ask } from "../commands/ask.js";

export const callbackQueryHandler = async (
  bot,
  id,
  data
  // lowRange,
  // highRange
) => {
  let personAnswer = Number.parseInt(data);

  let lowRange = 1;
  let highRange = 50;
  let possibleGuesses = highRange + lowRange + 1;
  let yourGuess = Math.floor(Math.ceil(possibleGuesses / 2));
  console.count("not in switch");

  switch (personAnswer) {
    case 1:
      bot.sendMessage(id, "Win");
      return;

    case 2:
      highRange = yourGuess - 1;
      console.log(Math.floor(Math.ceil(possibleGuesses / 2)));
      console.log(highRange);
      ask(bot, id, yourGuess);
      break;

    case 3:
      lowRange = yourGuess + 1;
      ask(bot, id, yourGuess);
      break;

    default:
      break;
  }
};
