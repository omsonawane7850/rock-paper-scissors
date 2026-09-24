import ChoiceButton from "./ChoiceButton";

const GameBoard = ({ onPlay, disabled }) => {
  const choices = [
    {
      name: "rock",
      icon: "🪨",
    },
    {
      name: "paper",
      icon: "📄",
    },
    {
      name: "scissors",
      icon: "✂️",
    },
  ];

  return (
    <div className="game-board">
      {choices.map((choice) => (
        <ChoiceButton
          key={choice.name}
          choice={choice.name}
          icon={choice.icon}
          onClick={onPlay}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default GameBoard;
