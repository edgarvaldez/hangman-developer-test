import {
  FETCH_WORDS,
} from '../actions/types';


const INITIAL_STATE = {
  words: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_WORDS:
      return { ...state, words: action.payload };
    default:
      return state;
  }
};
