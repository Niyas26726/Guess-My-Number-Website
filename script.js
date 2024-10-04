// Random no. Generator
let secreteNumber;
startGame()
function startGame() {
  console.log('SecreteNumber Updated');

  secreteNumber = Math.trunc(Math.random() * 20 + 1)
  console.log(secreteNumber);
}

// Score
let score = 20;
let heighScore = 0;

//                             DOM manipulation code

// displayMessage function
const displayMessage = function (text) {
  document.querySelector('.message').textContent = text;
};

// displayMessage function
const updateScore = function (Score) {
  score = Score;
  document.querySelector('.score').textContent = Score;
};

// displayMessage function
const updateHeighScore = function (heighscore) {
  heighScore = heighscore;
  document.querySelector('.highscore').textContent = heighscore;
};

// check btn click
document.querySelector('.check').addEventListener('click', function () {
  let guessValue = document.querySelector('.guess').value;
  console.log("guessValue => ", guessValue ? guessValue : "No Value");
  if (!guessValue && score >= 1) {
    displayMessage("⛔ NO Number")
  } else {
    if (guessValue && score === 0) {

      displayMessage("💥 Game Over")
      updateScore(score)

    } else if (guessValue > secreteNumber) {

      displayMessage("📈 Too High")
      score--;
      updateScore(score);

    } else if (guessValue < secreteNumber) {

      displayMessage("📉 Too Low");
      score--;
      updateScore(score);

    } else {

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secreteNumber;
      displayMessage("🎉 You Win");
      score > heighScore ? updateHeighScore(score) : updateHeighScore(heighScore);

    }
  }
});

//again btn click
document.querySelector('.again').addEventListener('click', function () {

  updateScore(20);
  startGame();
  updateHeighScore(heighScore);
  displayMessage("Start guessing...");
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = "";
  document.querySelector('.number').textContent = "?";

});
