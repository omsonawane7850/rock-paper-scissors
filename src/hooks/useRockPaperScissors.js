import { useState } from "react";

const useRockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const playRound = (choice) => {
    setUserChoice(choice);
  };

  return {
    userChoice,
    computerChoice,
    result,
    playRound,
  };
};

export default useRockPaperScissors;
