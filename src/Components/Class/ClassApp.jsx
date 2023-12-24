import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Images } from "../../assets/Images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
    fishes: initialFishes,
  };

  handleGuess = (guess) => {
    const { fishes } = this.state;
    const isCorrect = guess.toLowerCase() === fishes[0].name.toLowerCase();

    this.setState((prevState) => ({
      fishes: prevState.fishes.slice(1),
      correctCount: prevState.correctCount + (isCorrect ? 1 : 0),
      incorrectCount: prevState.incorrectCount + (isCorrect ? 0 : 1),
    }));
  };

  render() {
    const { incorrectCount, correctCount, fishes } = this.state;
    const nextFishToName = fishes[0];
    const isGameOver = fishes.length === 0;

    if (isGameOver) {
      return <ClassFinalScore incorrectCount={incorrectCount} correctCount={correctCount} />;
    }

    return (
      <>
        <ClassScoreBoard incorrectCount={incorrectCount} correctCount={correctCount} answersLeft={fishes} />
        <ClassGameBoard onGuess={this.handleGuess} nextFishToName={nextFishToName} />
      </>
    );
  }
}