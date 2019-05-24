import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchWords } from '../actions/words_actions';
// import Hangman from './Hangman';

class App extends React.Component {
  state = {
    isLoading: true,
  }

  componentDidMount = () => {
    // Fetching data from API
    this.props.fetchWords().then(() => {
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <div style={{
          width: '90vw',
          height: '60vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <CircularProgress size={100} />
        </div>
      );
    }

    // const { game } = this.props;
    return (
      <div>hello</div>
    );
  }
}

const mapStateToProps = ({ game }) => ({
  game
});

App.propTypes = {
  fetchWords: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { fetchWords })(App);
