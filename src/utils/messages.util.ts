import { GuessLetter } from './../models/game.model';

const NORMAL_MODE_EMOJIS = {
  'right': '🐍',
  'displaced': '🌪',
  'wrong': '🟥',
  'typing': '',
  'disabled': '',
  'wordlistError': '',
}

export function getNormalEndGameMessage(
  edition: string,
  guesses: GuessLetter[][],
  isGameWon: boolean,
): string {
  let message = `joguei mariaaa ${edition} (${isGameWon ? guesses.length : 'X'}/6)\n\n`;

  message += guesses.map(guess => {
    return guess.map(letter => NORMAL_MODE_EMOJIS[letter.state]).join('') + '\n';
  }).join('');

  message += '\njogue agora em https://mariaaa.moutella.com';

  return message;
}
