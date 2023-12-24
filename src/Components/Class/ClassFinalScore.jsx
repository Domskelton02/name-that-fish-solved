import { Component } from "react";
import PropTypes from 'prop-types';

export class ClassFinalScore extends Component {
  static propTypes = {
    correctCount: PropTypes.number.isRequired,
    incorrectCount: PropTypes.number.isRequired,
  };

  render() {
    const { correctCount, incorrectCount } = this.props;
    const totalCount = correctCount + incorrectCount;

    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctCount}</p>
          <hr />
          <p>{totalCount}</p>
        </div>
      </div>
    );
  }
}
