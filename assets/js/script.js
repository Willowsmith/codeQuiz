var timing = document.querySelector(".timer");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var questions = document.querySelector("#questions");
var startButton = document.querySelector("#start");
var result = document.querySelector("#results");
var answer = document.querySelector("#answer");

var Highscore = [];
var timerCount;
var index = 0;
var isCorrect;

var QA = [
    {
        question: "Who is the greatest of them all?",
        bt1: "1: me",
        bt2: "2: myself",
        bt3: "3: i",
        bt4: "4: what?",
        correct: "4: what?"
    },
    {
        question: "What is the meaning of Life, the Universe, and Everything?",
        bt1: "1: Life",
        bt2: "2: 42",
        bt3: "3: Money!",
        bt4: "4: Nuttin",
        correct: "2: 42"
    },
    {
        question: "What is the smallest planet in the Sol system?",
        bt1: "1: Mars",
        bt2: "2: Potato",
        bt3: "Pluto",
        bt4: "Huh?",
        correct: "3: Pluto"
    }
]

function init() {
    getScores();
}

function startQuiz() {
    timerCount = 75;
    startTimer()
    renderStuff()
}

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timing.textContent = timerCount;
      if (timerCount >= 0) {

      }

          // Tests if time has run out
    if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }

  function renderStuff() {
    if (QA[index] > QA.length) {
        
    } else {
    questions.textContent = QA[index].question;
    btn1.textContent = QA[index].bt1;
    btn2.textContent = QA[index].bt2;
    btn3.textContent = QA[index].bt3;
    btn4.textContent = QA[index].bt4;
    }
  }

function checkAnswer(event) {
    if (QA[index].correct == event.target.textContent) {
        answer.textContent = "Correct!"
    } else {
        timerCount -= 5;
        answer.textContent = "Wrong."
    }
    index++
    renderStuff();
}

btn1.addEventListener("click", checkAnswer);
btn2.addEventListener("click", checkAnswer);
btn3.addEventListener("click", checkAnswer);
btn4.addEventListener("click", checkAnswer);

function getScores() {

}

  startButton.addEventListener("click", startQuiz);

  //var resetButton = document.querySelector(".reset-button");

  function resetHighscore() {
    // Resets win and loss counts
    highscore = 0;
    // Renders win and loss counts and sets them into client storage
    setScore()
  }
  // Attaches event listener to button
  //resetButton.addEventListener("click", resetHighscore);
  