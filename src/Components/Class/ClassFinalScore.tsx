import { Component } from "react";
import "./styles/final-score.css";
import { CurrentResult } from "../../types-and-interfaces/types-and-interfaces";
import { initialFishes } from "../../initialData";

export class ClassFinalScore extends Component<CurrentResult> {
  render() {
    const { correctCount } = this.props;

    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctCount}</p>
          <hr />
          <p>{initialFishes.length}</p>
        </div>
      </div>
    );
  }
}
