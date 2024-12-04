import { useState } from "react";
import styles from "./Game.module.css";

const GameFunction = () => {
  const [choice, setChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const options = [
    {
      name: "Rock",
      icon: "https://cdn-icons-png.flaticon.com/512/3562/3562093.png",
    },
    {
      name: "Paper",
      icon: "https://cdn-icons-png.flaticon.com/512/12355/12355903.png",
    },
    {
      name: "Scissors",
      icon: "https://cdn-icons-png.flaticon.com/512/9534/9534501.png",
    },
  ];

  const handleChoice = (playerChoice) => {
    setChoice(playerChoice);

    const computerPick = options[Math.floor(Math.random() * 3)];
    setComputerChoice(computerPick);

    if (playerChoice.name === computerPick.name) {
      setResult("It's a tie!");
    } else if (
      (playerChoice.name === "Rock" && computerPick.name === "Scissors") ||
      (playerChoice.name === "Paper" && computerPick.name === "Rock") ||
      (playerChoice.name === "Scissors" && computerPick.name === "Paper")
    ) {
      setResult("You win!");
      setUserScore(userScore + 1);
    } else {
      setResult("You lose!");
      setComputerScore(computerScore + 1);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Choose your move:</h2>
      <div className={styles.buttonsContainer}>
        {options.map((option) => (
          <button
            key={option.name}
            onClick={() => handleChoice(option)}
            className={styles.button}
          >
            <img src={option.icon} alt={option.name} />
            <p>{option.name}</p>
          </button>
        ))}
      </div>
      {choice && computerChoice && (
        <div className={styles.choiceContainer}>
          <h3>Your choice:</h3>
          <img src={choice.icon} alt={choice.name} />
          <h3>Computers choice:</h3>
          <img src={computerChoice.icon} alt={computerChoice.name} />
          <h3>{result}</h3>
        </div>
      )}
      <div className={styles.scoreboard}>
        <h3>Scoreboard</h3>
        <p className={styles.userScore}>You: {userScore}</p>
        <p className={styles.computerScore}>Computer: {computerScore}</p>
      </div>
    </div>
  );
};

export default GameFunction;
