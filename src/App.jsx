import "./App.css";

import GameBoard from "./components/GameBoard";
import useRockPaperScissors from "./hooks/useRockPaperScissors";

function App() {
  const {
    userChoice,
    playRound,
  } = useRockPaperScissors();

  return (
    <main className="app">
      <div className="game-container">
        <h1>Rock Paper Scissors</h1>

        <p>Choose your move</p>

        <GameBoard onPlay={playRound} />

        {userChoice && (
          <p>You selected: {userChoice}</p>
        )}
      </div>
    </main>
  );
}

export default App;