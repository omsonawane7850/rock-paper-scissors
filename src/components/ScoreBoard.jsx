const ScoreBoard = ({ score }) => {
  return (
    <div className="score-board">
      <div>
        <span>You</span>
        <strong>{score.user}</strong>
      </div>

      <div>
        <span>Draws</span>
        <strong>{score.draws}</strong>
      </div>

      <div>
        <span>Computer</span>
        <strong>{score.computer}</strong>
      </div>
    </div>
  );
};

export default ScoreBoard;
