// game Stages
const mainScreen = document.getElementById("main-screen");
const makeChoiceScreen = document.getElementById("make-choice");
const displayOutcome = document.getElementById("outcome-display");
const gameSections = document.querySelectorAll(".game-section");

// Outcome
const WIN = "You WIN!";
const LOSE = "You LOSE!";
const DRAW = "Draw";
let outcome;

// Other
const gameChoices = document.querySelectorAll(".game-choice");
const outcomeDisplayHeader = document.getElementById("outcome");
const scoreDom = document.getElementById("score");
const startGameBtns = document.querySelectorAll("#start-game");
const homeBtn = document.getElementById("to-home");

// Store The score
let score = 0;

// Store the current game stage
let gameStage = mainScreen.id;

// Player choice
let playerChoice = undefined;

// Bot choice
let botChoice = undefined;

const makeBotChoice = () => {
  const botChoices = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * botChoices.length);
  botChoice = botChoices[randomNum];
  console.log(botChoice);
};

const startGame = () => {
  gameStage = makeChoiceScreen.id;
  renderGame();
  makeBotChoice();
};

const renderGame = () => {
  console.log(gameStage);
  gameSections.forEach((section) => {
    if (section.id !== gameStage) {
      section.style.display = "none";
    } else {
      section.style.display = "block";
    }
  });
  renderScore();
};

const makeChoice = (choice) => {
  playerChoice = choice;
  outcome = judgeChoice();
  if (outcome === WIN) {
    score += 1;
  }
  gameStage = displayOutcome.id;
  outcomeDisplayHeader.innerHTML = outcome;
  renderGame();
};

const judgeChoice = () => {
  if (botChoice === playerChoice) {
    return DRAW;
  } else if (playerChoice == "rock") {
    if (botChoice == "paper") {
      return LOSE;
    } else {
      return WIN;
    }
  } else if (playerChoice == "scissors") {
    if (botChoice == "rock") {
      return LOSE;
    } else {
      return WIN;
    }
  } else if (playerChoice == "paper") {
    if (botChoice == "scissors") {
      return LOSE;
    } else {
      return WIN;
    }
  }
};

const renderScore = () => {
  scoreDom.innerHTML = `score: ${score}`;
};

startGameBtns.forEach((items) => {
  items.addEventListener("click", () => {
    startGame();
  });
});

gameChoices.forEach((choice) => {
  choice.addEventListener("click", () => {
    makeChoice(choice.id);
  });
});

homeBtn.addEventListener("click", () => {
  gameStage = mainScreen.id;
  renderGame();
});

renderGame();
