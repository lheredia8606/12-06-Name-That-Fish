import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { initialFishes } from "../../initialData";

import { useState } from "react";

export function FunctionalApp() {
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const currentFish = incorrectCount + correctCount;

  const handleProperStateIncrement = (answer: string) => {
    if (answer === initialFishes[currentFish].name) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
  };
  const gameOver = incorrectCount + correctCount >= initialFishes.length;

  return (
    <>
      {gameOver || (
        <>
          <FunctionalScoreBoard
            incorrectCount={incorrectCount}
            correctCount={correctCount}
          />
          <FunctionalGameBoard
            handleProperStateIncrement={handleProperStateIncrement}
            nextFishToName={initialFishes[currentFish]}
          />
        </>
      )}
      {gameOver && (
        <FunctionalFinalScore
          correctCount={correctCount}
          totalCount={initialFishes.length}
        />
      )}
    </>
  );
}
