import { Component } from "react";
import PropTypes from 'prop-types';
import "./styles/score-board.css";

export class ClassScoreBoard extends Component {
  static propTypes = {
    incorrectCount: PropTypes.number.isRequired,
    correctCount: PropTypes.number.isRequired,
    answersLeft: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string
    })).isRequired,
  };

  render() {
    const { incorrectCount, correctCount, answersLeft } = this.props;

    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {answersLeft.map((fish) => (
            <div key={fish.name} className="choice">
              {fish.name}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}