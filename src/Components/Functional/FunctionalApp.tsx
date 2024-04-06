import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { initialFishes } from "../../initialData";

import { useState } from "react";

export function FunctionalApp() {
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const currentFish = incorrectCount + correctCount;
  const incrementIncorrectCount = (): void => {
    setIncorrectCount(incorrectCount + 1);
  };
  const incrementCorrectCount = (): void => {
    setCorrectCount(correctCount + 1);
  };
  const gameOver = incorrectCount + correctCount > 3;

  return (
    <>
      {gameOver || (
        <FunctionalScoreBoard
          incorrectCount={incorrectCount}
          correctCount={correctCount}
        />
      )}
      {gameOver || (
        <FunctionalGameBoard
          incrementIncorrectCount={incrementIncorrectCount}
          incrementCorrectCount={incrementCorrectCount}
          nextFishToName={initialFishes[currentFish]}
        />
      )}

      {gameOver && (
        <FunctionalFinalScore
          correctCount={correctCount}
          totalCount={correctCount + incorrectCount}
        />
      )}
    </>
  );
}
