import { useState } from 'react';
import PropTypes from 'prop-types';
import './styles/game-board.css';

export function FunctionalGameBoard({ onGuess, nextFishToName }) {
  const [guess, setGuess] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onGuess(guess);
    setGuess('');
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          id="fish-guess"
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

FunctionalGameBoard.propTypes = {
  onGuess: PropTypes.func.isRequired,
  nextFishToName: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};