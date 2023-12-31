import PropTypes from 'prop-types';
import "./styles/final-score.css";

export const FunctionalFinalScore = ({ correctCount, totalCount }) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctCount}</p>
      <hr />
      <p>{totalCount}</p>
    </div>
  </div>
);

FunctionalFinalScore.propTypes = {
  correctCount: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
};