import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import '../styles.css';

const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');

const Keyboard = (props) => {
  const { onClick, game } = props;

  return (LETTERS.map(letter => (
    <Button
      className="btn-keyboard"
      key={letter}
      variant="outlined"
      color="secondary"
      disabled={game.guessed.includes(letter)}
      onClick={onClick(letter)}
    >
      {letter}
    </Button>
  )));
};

Keyboard.propTypes = {
  onClick: PropTypes.func.isRequired,
  game: PropTypes.object
};

export default Keyboard;
