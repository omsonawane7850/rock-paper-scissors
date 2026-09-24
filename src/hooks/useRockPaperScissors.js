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

  const playRound = (choice) => {
    const computer = getComputerChoice();
    const winner = getWinner(choice, computer);

    setUserChoice(choice);
    setComputerChoice(computer);
    setResult(winner);
  };

  return {
    userChoice,
    computerChoice,
    result,
    playRound,
  };
};

export default useRockPaperScissors;