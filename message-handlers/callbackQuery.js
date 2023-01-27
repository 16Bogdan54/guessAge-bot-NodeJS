import { ask } from "../commands/ask.js";

export const callbackQueryHandler = async (
  bot,
  id,
  data,
  lowRange,
  highRange
  // possibleGuesses,
  // yourGuess
) => {
  let personAnswer = Number.parseInt(data);

  // let lowRange = 1;
  // let highRange = 100;
  let possibleGuesses = 0;
  let yourGuess = 0;

  console.log(`lowRange ${lowRange} highRange ${highRange}`);

  switch (personAnswer) {
    case 1:
      bot.sendMessage(id, "Win");
      return;

    case 2:
      possibleGuesses = highRange + lowRange + 1;
      console.log("pg", possibleGuesses);
      yourGuess = Math.floor(Math.ceil(possibleGuesses / 2));
      console.count("lower");
      highRange = yourGuess - 1;
      console.log("hr", highRange);
      console.log(yourGuess);
      ask(bot, id, yourGuess);
      break;

    case 3:
      possibleGuesses = highRange + lowRange + 1;
      console.log("pg", possibleGuesses);
      yourGuess = Math.floor(Math.ceil(possibleGuesses / 2));
      console.count("more");
      lowRange = yourGuess + 1;
      console.log("lr", lowRange);
      console.log(yourGuess);
      ask(bot, id, yourGuess);
      break;

    default:
      break;
  }
};
