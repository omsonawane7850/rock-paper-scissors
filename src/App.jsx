import "./App.css";
import GameBoard from "./components/GameBoard";

function App() {
  const handlePlay = (choice) => {
    console.log(choice);
  };

  return (
    <main className="app">
      <div className="game-container">
        <h1>Rock Paper Scissors</h1>

        <p>Choose your move</p>

        <GameBoard onPlay={handlePlay} />
      </div>
    </main>
  );
}

export default App;
