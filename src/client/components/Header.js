import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import '../styles.css';

const Header = ({ lives }) => {
  const livesLabel = lives === 1 ? 'live' : 'lives';

  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <Typography variant="subtitle1" className="title">
          Feeling Lucky today? Try guessing the following word!
        </Typography>
        <Typography variant="h6" className="lives">
          You have {lives} {livesLabel}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  lives: PropTypes.number
};

export default Header;
