import { initialFishes } from "../../initialData";

import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Component } from "react";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };
  render() {
    const { incorrectCount, correctCount } = this.state;
    const currentFish = incorrectCount + correctCount;
    const incrementIncorrectCount = (): void => {
      this.setState({ incorrectCount: incorrectCount + 1 });
    };
    const incrementCorrectCount = (): void => {
      this.setState({ correctCount: correctCount + 1 });
    };
    const gameOver = incorrectCount + correctCount > 3;
    return (
      <>
        {gameOver || (
          <ClassScoreBoard
            incorrectCount={incorrectCount}
            correctCount={correctCount}
          />
        )}
        {gameOver || (
          <ClassGameBoard
            incrementIncorrectCount={incrementIncorrectCount}
            incrementCorrectCount={incrementCorrectCount}
            nextFishToName={initialFishes[currentFish]}
          />
        )}

        {gameOver && (
          <ClassFinalScore
            incorrectCount={incorrectCount}
            correctCount={correctCount}
          />
        )}
      </>
    );
  }
}
