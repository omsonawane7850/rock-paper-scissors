import "./App.css";
import GameBoard from "./components/GameBoard";
import Result from "./components/Result";
import ScoreBoard from "./components/ScoreBoard";
import useRockPaperScissors from "./hooks/useRockPaperScissors";

function App() {
  const {
    userChoice,
    computerChoice,
    result,
    score,
    round,
    playRound,
    newRound,
    resetGame,
  } = useRockPaperScissors();

  return (
    <main className="app">
      <div className="game-container">
        <h1>Rock Paper Scissors</h1>

        <p>Round: {round}</p>

        <ScoreBoard score={score} />

        <Result
          userChoice={userChoice}
          computerChoice={computerChoice}
          result={result}
        />

        <GameBoard onPlay={playRound} disabled={Boolean(result)} />

        {result && <button onClick={newRound}>New Round</button>}

        <button onClick={resetGame}>Reset Game</button>
      </div>
    </main>
  );
}

export default App;
