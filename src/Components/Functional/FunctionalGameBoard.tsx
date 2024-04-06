import { Fish } from "../../types-and-interfaces/types-and-interfaces";
import "./styles/game-board.css";
import { useState } from "react";

export function FunctionalGameBoard({
  incrementIncorrectCount,
  incrementCorrectCount,
  nextFishToName,
}: {
  incrementIncorrectCount: () => void;
  incrementCorrectCount: () => void;
  nextFishToName: Fish;
}) {
  const [fishNameInput, setFishNameInput] = useState("");
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (fishNameInput.toLowerCase() === nextFishToName.name) {
            incrementCorrectCount();
          } else {
            incrementIncorrectCount();
          }
          setFishNameInput("");
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={fishNameInput}
          onChange={(e) => {
            setFishNameInput(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
