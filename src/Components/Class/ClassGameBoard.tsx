import { Fish } from "../../types-and-interfaces/types-and-interfaces";
import "./styles/game-board.css";
import { Component } from "react";

interface ClassGameBoardProps {
  incrementIncorrectCount: () => void;
  incrementCorrectCount: () => void;
  nextFishToName: Fish;
}

export class ClassGameBoard extends Component<ClassGameBoardProps> {
  state = {
    fishNameInput: "",
  };

  render() {
    const { incrementCorrectCount, nextFishToName, incrementIncorrectCount } =
      this.props;
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (
              this.state.fishNameInput.toLowerCase() === nextFishToName.name
            ) {
              incrementCorrectCount();
            } else {
              incrementIncorrectCount();
            }
            this.setState({ fishNameInput: "" });
          }}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={this.state.fishNameInput}
            onChange={(e) => {
              this.setState({ fishNameInput: e.target.value });
            }}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
