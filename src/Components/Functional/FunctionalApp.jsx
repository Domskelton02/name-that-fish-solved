import { useState } from 'react';
import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
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

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [remainingFishes, setRemainingFishes] = useState(initialFishes);
  const [nextFishToName, setNextFishToName] = useState(initialFishes[0]);

  const onGuess = (guess) => {
    if (guess === nextFishToName.name) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }

    const newRemainingFishes = remainingFishes.filter(fish => fish.name !== nextFishToName.name);
    setRemainingFishes(newRemainingFishes);
    setNextFishToName(newRemainingFishes[0]);
  };

  return (
    <>
      <FunctionalScoreBoard incorrectCount={incorrectCount} correctCount={correctCount} answersLeft={remainingFishes.map(fish => fish.name)} />
      {remainingFishes.length > 0 ? (
        <FunctionalGameBoard onGuess={onGuess} nextFishToName={nextFishToName} />
      ) : (
        <FunctionalFinalScore correctCount={correctCount} totalCount={initialFishes.length} />
      )}
    </>
  );
}