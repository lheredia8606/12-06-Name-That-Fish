import { Fish } from "../../types-and-interfaces/types-and-interfaces";
import "./styles/game-board.css";
import { Component } from "react";

interface ClassGameBoardProps {
  handleProperStateIncrement: (answer: string) => void;
  nextFishToName: Fish;
}

export class ClassGameBoard extends Component<ClassGameBoardProps> {
  state = {
    fishNameInput: "",
  };

  render() {
    const { handleProperStateIncrement, nextFishToName } = this.props;
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(`handler called`);
            handleProperStateIncrement(
              this.state.fishNameInput.toLocaleLowerCase()
            );
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
