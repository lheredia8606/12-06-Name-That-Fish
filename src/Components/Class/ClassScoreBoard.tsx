import { Component } from "react";
import "./styles/score-board.css";
import { CurrentResult } from "../../types-and-interfaces/types-and-interfaces";
//  Where the score is presented

const possibleAnswers = ["trout", "salmon", "tuna", "shark"];

export class ClassScoreBoard extends Component<CurrentResult> {
  render() {
    const { incorrectCount, correctCount } = this.props;
    const answersLeft = possibleAnswers.slice(incorrectCount + correctCount);

    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {answersLeft.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}
