import { Component } from "react";
import PropTypes from 'prop-types';
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  static propTypes = {
    onGuess: PropTypes.func.isRequired,
    nextFishToName: PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    guess: '',
  };

  handleInputChange = (event) => {
    this.setState({ guess: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onGuess(this.state.guess);
    this.setState({ guess: '' });
  };

  render() {
    const { nextFishToName } = this.props;
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form id="fish-guess-form" onSubmit={this.handleSubmit}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input type="text" name="fish-guess" value={this.state.guess} onChange={this.handleInputChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}