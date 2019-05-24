import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const BtnNewGame = (props) => {
  const { onClick } = props;
  return (
    <Button
      style={{ marginTop: '15px' }}
      color="secondary"
      fullWidth
      onClick={onClick}
    >
      Play Again
    </Button>
  );
};

BtnNewGame.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default BtnNewGame;
