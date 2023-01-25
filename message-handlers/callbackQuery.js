import { ask } from "../commands/ask.js";

export const callbackQUeryHAndler = async (
  bot,
  id,
  data,
  age,
  lowRange,
  highRange
) => {
  let personAnswer = data;

  let possibleGuesses = highRange + lowRange - 1;
  let yourGuess = Math.floor(Math.ceil(possibleGuesses / 2));

  switch (Number.parseInt(personAnswer)) {
    case 1:
      bot.sendMessage(id, "Win");
      break;

    case 2:
      highRange = yourGuess - 1;
      ask(bot, id, yourGuess, lowRange, highRange);
      break;

    case 3:
      lowRange = yourGuess + 1;
      ask(bot, id, yourGuess, lowRange, highRange);
      break;

    default:
      break;
  }
};
