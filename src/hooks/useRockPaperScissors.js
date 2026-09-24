import { useState } from "react";

const CHOICES = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * CHOICES.length);

  return CHOICES[randomIndex];
};

const getWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "draw";
  }

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "user";
  }

  return "computer";
};

const useRockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const [score, setScore] = useState({
    user: 0,
    computer: 0,
    draws: 0,
  });

  const [round, setRound] = useState(0);

  const playRound = (choice) => {
    const computer = getComputerChoice();
    const winner = getWinner(choice, computer);

    setUserChoice(choice);
    setComputerChoice(computer);
    setResult(winner);

    setRound((prev) => prev + 1);

    if (winner === "user") {
      setScore((prev) => ({
        ...prev,
        user: prev.user + 1,
      }));
    }

    if (winner === "computer") {
      setScore((prev) => ({
        ...prev,
        computer: prev.computer + 1,
      }));
    }

    if (winner === "draw") {
      setScore((prev) => ({
        ...prev,
        draws: prev.draws + 1,
      }));
    }
  };

  const newRound = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);

    setScore({
      user: 0,
      computer: 0,
      draws: 0,
    });

    setRound(0);
  };

  return {
    userChoice,
    computerChoice,
    result,
    score,
    round,
    playRound,
    newRound,
    resetGame,
  };
};

export default useRockPaperScissors;