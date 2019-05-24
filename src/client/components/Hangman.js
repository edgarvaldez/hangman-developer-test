import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography
} from '@material-ui/core';
import Keyboard from './Keyboard';
import BtnNewGame from './BtnNewGame';
import Header from './Header';
import { guessedLetter, newGame } from '../actions/words_actions';
import '../styles.css';

class Hangman extends Component {
  state={
    userGuess: '',
    isLoading: true
  };

  componentDidMount = () => {
    this.props.newGame();
    this.setState({ isLoading: false });
  }

  inputLetter = (letter) => {
    const { userGuess } = this.state;
    this.setState({ userGuess: `${userGuess}${letter}` });
    this.props.guessedLetter(letter);
  }

  renderInputWord = () => {
    const { game } = this.props;
    const { userGuess } = this.state;
    const arrWord = game.currentWord.split('');
    const placeHolder = <div className="wordBox" />;

    return arrWord.map(letterToGuess => 
      userGuess.split('').includes(letterToGuess) ? 
        <div className="wordBox">{letterToGuess.toUpperCase()}</div> : 
        placeHolder);
  }

  getGameStatus = () => {
    const { game } = this.props;

    if (game.gameOver) {
      return <Typography variant="h4"> Aww, You Lost 😢</Typography>;
    }
    if (game.isWinner) {
      return <Typography variant="h4"> Hurray!!! You Won 😃</Typography>;
    }
    return <Keyboard onClick={props => this.inputLetter.bind(this, props)} game={game} />;
  };

  onNewGame = () => {
    this.props.newGame();
    this.setState({ userGuess: '' });
  }

  render() {
    const { game } = this.props;
    const { isLoading } = this.state;

    // Wait until newGame() finish changing the store
    if (isLoading) {
      return <div />;
    }
    return (
      <div>
        <Header lives={game.lives} />
        <Grid container spacing={24} className="wrapper">
          <Grid item xs={12}>
            <div className="wordContainter">
              {this.renderInputWord()}
            </div>
          </Grid>
          <Grid item xs={12}>
            {this.getGameStatus()}
          </Grid>
          <Grid item xs={12}>
            <BtnNewGame onClick={this.onNewGame} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = ({
  guessedLetter,
  newGame
});

Hangman.propTypes = {
  game: PropTypes.object,
  newGame: PropTypes.func.isRequired,
  guessedLetter: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Hangman);
