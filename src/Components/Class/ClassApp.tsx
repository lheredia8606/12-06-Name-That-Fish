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
  handleProperStateIncrement = (answer: string): void => {
    const currentFish = this.state.incorrectCount + this.state.correctCount;
    answer === initialFishes[currentFish].name
      ? this.setState({ correctCount: this.state.correctCount + 1 })
      : this.setState({ incorrectCount: this.state.incorrectCount + 1 });
  };
  render() {
    const currentFish = this.state.incorrectCount + this.state.correctCount;
    const { correctCount, incorrectCount } = this.state;
    const gameOver = currentFish >= initialFishes.length;
    return (
      <>
        {!gameOver && (
          <>
            <ClassScoreBoard
              incorrectCount={this.state.incorrectCount}
              correctCount={correctCount}
            />

            <ClassGameBoard
              handleProperStateIncrement={this.handleProperStateIncrement}
              nextFishToName={initialFishes[currentFish]}
            />
          </>
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
