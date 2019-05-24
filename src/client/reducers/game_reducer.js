import {
  FETCH_WORDS,
  NEW_GAME,
  GUESSED_LETTER,
} from '../actions/types';


const INITIAL_STATE = {
  words: [],
  currentWord: '',
  lives: 6,
  wordArr: [],
  isWinner: false,
  gameOver: false,
  guessed: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_WORDS:
      return { ...state, words: action.payload };
    case GUESSED_LETTER:
      const { lives, isWinner, gameOver } = state;
      const newGuessed = [...state.guessed, action.payload];

      let livesLeft = lives;
      let newIsWinner = isWinner;
      let newGameOver = gameOver;

      const newGuess = state.wordArr.filter(i => i !== action.payload);
      // if length same means attempt was wrong
      if (state.wordArr.length === newGuess.length) {
        livesLeft = lives - 1;
      }

      if (livesLeft === 0) {
        newGameOver = !gameOver;
      }

      if (newGuess.length === 0 && livesLeft > 0) {
        newIsWinner = !isWinner;
      }

      return Object.assign(state, {
        wordArr: newGuess,
        lives: livesLeft,
        isWinner: newIsWinner,
        gameOver: newGameOver,
        guessed: newGuessed,
      });
    case NEW_GAME:
      const currentWord = state.words[Math.floor(Math.random() * state.words.length)];
      const wordArr = currentWord.split('');
      return Object.assign(state, {
        currentWord,
        wordArr,
        lives: 6,
        isWinner: false,
        gameOver: false,
        guessed: []
      });
    default:
      return state;
  }
};
