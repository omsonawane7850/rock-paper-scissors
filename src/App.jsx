import "./App.css";

import GameBoard from "./components/GameBoard";
import Result from "./components/Result";
import useRockPaperScissors from "./hooks/useRockPaperScissors";

function App() {
  const { userChoice, computerChoice, result, playRound } =
    useRockPaperScissors();

  return (
    <main className="app">
      <div className="game-container">
        <h1>Rock Paper Scissors</h1>

        <Result
          userChoice={userChoice}
          computerChoice={computerChoice}
          result={result}
        />

        <GameBoard onPlay={playRound} />
      </div>
    </main>
  );
}

export default App;
