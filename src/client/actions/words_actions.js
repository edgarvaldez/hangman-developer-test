import axios from 'axios';
import {
  FETCH_WORDS,
} from './types';

export const fetchWords = () => dispatch => axios.get('https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt')
  .then((response) => {
    if (response.status === 200) {
      // filtering out words with less than 3 letters
      const data = response.data.split(/\r?\n/);
      const payload = data.filter(word => word.length > 3);
      dispatch({ type: FETCH_WORDS, payload });
      return response.status;
    }
    return { error: 'ok' };
  });
