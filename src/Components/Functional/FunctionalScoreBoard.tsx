import { initialFishes } from "../../initialData";
import "./styles/score-board.css";
//  Where the score is presented

const possibleAnswers = initialFishes.map((fish) => fish.name);

export function FunctionalScoreBoard({
  incorrectCount,
  correctCount,
}: {
  incorrectCount: number;
  correctCount: number;
}) {
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
