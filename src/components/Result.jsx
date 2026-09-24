const Result = ({ userChoice, computerChoice, result }) => {
  if (!result) {
    return <h2>Make your move!</h2>;
  }

  const messages = {
    user: "You Win! 🎉",
    computer: "Computer Wins! 🤖",
    draw: "It's a Draw! 🤝",
  };

  return (
    <div>
      <h2>{messages[result]}</h2>

      <p>
        You: {userChoice} | Computer: {computerChoice}
      </p>
    </div>
  );
};

export default Result;
