
let startButton = document.getElementById("start-quiz-btn");
let score = 0;
let highScores = [];


function startQuiz() {
  removeLanding();
  questionOne();
  countdown();
};

let timerEL = document.getElementById("countdown")
function countdown() {
  var timeLeft = 100

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEL.textContent = timeLeft + ' seconds';

      timeLeft--;

    } else if (timeLeft === 1) {
      timerEL.textContent = timeLeft + ' seconds';
      timeLeft--;
    } else {
      timerEL.textContent = '';
      clearInterval(timerInterval);
    }
  }, 1000);
}


function removeLanding() {
  let landingPage = document.querySelector(".container");
  landingPage.setAttribute("class", "hide-landing-page");
}

function questionOne() {
  let divEl = document.createElement("div");
  divEl.setAttribute("id", "question-one");
  let h1El = document.createElement("h1");
  h1El.setAttribute("class", "headingquestion");
  h1El.textContent = "Commonly used data types DO NOT include:";
  divEl.appendChild(h1El);
  let optionsContainerEl = document.createElement("div");
  optionsContainerEl.setAttribute("id", "buttonlist-1");
  let btn1 = document.createElement("button");
  btn1.textContent = "1. strings";
  btn1.setAttribute("class", "optionbutton")
  let btn2 = document.createElement("button");
  btn2.textContent = "2. booleans";
  btn2.setAttribute("class", "optionbutton")
  let btn3 = document.createElement("button");
  btn3.textContent = "3. alerts";
  btn3.setAttribute("class", "optionbutton")
  let btn4 = document.createElement("button");
  btn4.textContent = "4. numbers";
  btn4.setAttribute("class", "optionbutton")
  optionsContainerEl.appendChild(btn1);
  optionsContainerEl.appendChild(btn2);
  optionsContainerEl.appendChild(btn3);
  optionsContainerEl.appendChild(btn4);
  divEl.appendChild(optionsContainerEl);
  let firstQuestion = document.querySelector("#question-container");
  firstQuestion.appendChild(divEl);
  btn1.addEventListener('click', questionOneOptionsClick);
  btn2.addEventListener('click', questionOneOptionsClick);
  btn3.addEventListener('click', questionOneOptionsClick);
  btn4.addEventListener('click', questionOneOptionsClick);

}
function questionOneOptionsClick(event) {
  console.log(event.target.textContent);
  if (event.target.textContent === "3. alerts") {
    score++;
  }

  questionTwo()
}

function questionTwo() {
  let divEl = document.createElement("div");
  divEl.setAttribute("id", "question-two")
  let h1El = document.createElement("h1");
  h1El.setAttribute("class", "headingquestion");
  h1El.textContent = "The condition in an if/else statement is enclosed with______.";
  divEl.appendChild(h1El);
  let optionsContainerEl = document.createElement("div");
  optionsContainerEl.setAttribute("id", "buttonlist-1");
  let btn1 = document.createElement("button");
  btn1.textContent = "1. quotes";
  btn1.setAttribute("class", "optionbutton")
  let btn2 = document.createElement("button");
  btn2.textContent = "2. curly brackets";
  btn2.setAttribute("class", "optionbutton")
  let btn3 = document.createElement("button");
  btn3.textContent = "3. parenthesis";
  btn3.setAttribute("class", "optionbutton")
  let btn4 = document.createElement("button");
  btn4.textContent = "4. square brackets";
  btn4.setAttribute("class", "optionbutton")
  optionsContainerEl.appendChild(btn1);
  optionsContainerEl.appendChild(btn2);
  optionsContainerEl.appendChild(btn3);
  optionsContainerEl.appendChild(btn4);
  divEl.appendChild(optionsContainerEl);
  let secondQuestion = document.getElementById("question-container");
  secondQuestion.appendChild(divEl);
  removeQuestionOne();
  btn1.addEventListener('click', questionThree);
  btn2.addEventListener('click', questionThree);
  btn3.addEventListener('click', questionThree);
  btn4.addEventListener('click', questionThree);
}

function removeQuestionOne() {
  let one = document.getElementById("question-one");
  one.remove();
}

function questionThree(event) {
  if (event.target.textContent === "2. curly brackets") {
    score++
  }
  let divEl = document.createElement("div");
  divEl.setAttribute("id", "question-three");
  let h1El = document.createElement("h1");
  h1El.setAttribute("class", "headingquestion");
  h1El.textContent = "Arrays in JavaScript can be used to store"
  divEl.appendChild(h1El);
  let optionsContainerEl = document.createElement("div");
  optionsContainerEl.setAttribute("id", "buttonlist-1");
  let btn1 = document.createElement("button");
  btn1.textContent = "1. numbers and strings";
  btn1.setAttribute("class", "optionbutton")
  let btn2 = document.createElement("button");
  btn2.textContent = "2. other arrays";
  btn2.setAttribute("class", "optionbutton")
  let btn3 = document.createElement("button");
  btn3.textContent = "3. booleans";
  btn3.setAttribute("class", "optionbutton")
  let btn4 = document.createElement("button");
  btn4.textContent = "4. all of the above";
  btn4.setAttribute("class", "optionbutton")
  optionsContainerEl.appendChild(btn1);
  optionsContainerEl.appendChild(btn2);
  optionsContainerEl.appendChild(btn3);
  optionsContainerEl.appendChild(btn4);
  divEl.appendChild(optionsContainerEl);
  let thirdQuestion = document.getElementById("question-container");
  thirdQuestion.appendChild(divEl);
  removeQuestionTwo();
  btn1.addEventListener('click', questionFour);
  btn2.addEventListener('click', questionFour);
  btn3.addEventListener('click', questionFour);
  btn4.addEventListener('click', questionFour);
}

function removeQuestionTwo() {
  let two = document.getElementById("question-two");
  two.remove();
}

function questionFour(event) {
  if (event.target.textContent === "4. all of the above") {
    score++
  }
  let divEl = document.createElement("div");
  divEl.setAttribute("id", "question-four")
  let h1El = document.createElement("h1");
  h1El.setAttribute("class", "headingquestion");
  h1El.textContent = "String values must be enclosed within ______ when being assigned to variables"
  divEl.appendChild(h1El);
  let optionsContainerEl = document.createElement("div");
  optionsContainerEl.setAttribute("id", "buttonlist-1");
  let btn1 = document.createElement("button");
  btn1.textContent = "1. commas";
  btn1.setAttribute("class", "optionbutton")
  let btn2 = document.createElement("button");
  btn2.textContent = "2. curly brackets";
  btn2.setAttribute("class", "optionbutton")
  let btn3 = document.createElement("button");
  btn3.textContent = "3. quotes";
  btn3.setAttribute("class", "optionbutton")
  let btn4 = document.createElement("button");
  btn4.textContent = "4. parenthesis";
  btn4.setAttribute("class", "optionbutton")
  optionsContainerEl.appendChild(btn1);
  optionsContainerEl.appendChild(btn2);
  optionsContainerEl.appendChild(btn3);
  optionsContainerEl.appendChild(btn4);
  divEl.appendChild(optionsContainerEl);
  let fourthQuestion = document.getElementById("question-container");
  fourthQuestion.appendChild(divEl);
  removeQuestionThree();
  btn1.addEventListener("click", questionFive);
  btn2.addEventListener("click", questionFive);
  btn3.addEventListener("click", questionFive);
  btn4.addEventListener("click", questionFive);


}

function removeQuestionThree() {
  let three = document.getElementById("question-three")
  three.remove();
}

function questionFive(event) {
  if (event.target.textContent === "3. quotes") {
    score++
  }
  let divEL = document.createElement("div");
  divEL.setAttribute("id", "question-five");
  let h1El = document.createElement("h1");
  h1El.setAttribute("class", "headingquestion");
  h1El.textContent = "A very useful tool used during development and debugging for printing content to the debugger is";
  divEL.appendChild(h1El);
  let optionsContainerEl = document.createElement("div");
  optionsContainerEl.setAttribute("id", "buttonlist-1");
  let btn1 = document.createElement("button");
  btn1.textContent = "1. JavaScript";
  btn1.setAttribute("class", "optionbutton")
  let btn2 = document.createElement("button");
  btn2.textContent = "2. terminal/bash";
  btn2.setAttribute("class", "optionbutton")
  let btn3 = document.createElement("button");
  btn3.textContent = "3. for loops";
  btn3.setAttribute("class", "optionbutton")
  let btn4 = document.createElement("button");
  btn4.textContent = "4. console.log";
  btn4.setAttribute("class", "optionbutton")
  optionsContainerEl.appendChild(btn1);
  optionsContainerEl.appendChild(btn2);
  optionsContainerEl.appendChild(btn3);
  optionsContainerEl.appendChild(btn4);
  divEL.appendChild(optionsContainerEl);
  btn1.addEventListener("click", allDone);
  btn2.addEventListener("click", allDone);
  btn3.addEventListener("click", allDone);
  btn4.addEventListener("click", allDone);
  let fifthQuestion = document.getElementById("question-container");
  fifthQuestion.appendChild(divEL);
  removeQuestionFour();

}

function removeQuestionFour() {
  let four = document.getElementById("question-four");
  four.remove();

}

function allDone(event) {
  if (event.target.textContent === "4. console.log") {
    score++
  }
  let divEl = document.createElement("div");
  divEl.setAttribute("id", "done");
  let h1El = document.createElement("h1");
  h1El.setAttribute("class", "headingquestion");
  h1El.textContent = "All done!";
  divEl.appendChild(h1El);
  let textEl = document.createElement("p");
  textEl.textContent = "Your final score is";
  let secondTextEl = document.createElement("p");
  secondTextEl.textContent = "Enter initials";
  let inputEl = document.createElement("input");
  let btn = document.createElement("button");
  btn.textContent = "submit";
  btn.setAttribute("class", "optionbutton");
  divEl.appendChild(textEl);
  divEl.appendChild(secondTextEl);
  divEl.appendChild(inputEl);
  divEl.appendChild(btn);
  btn.addEventListener('click', highScore);
  let questionContainer = document.getElementById("question-container");
  questionContainer.appendChild(divEl);
  removeQuestionFive();
}

function removeQuestionFive() {
  let five = document.getElementById("question-five");
  five.remove();
}

function highScore() {
  let initialsInput = document.querySelector("input").value;
  let divEl = document.createElement("div");
  divEl.setAttribute("id", "highscore")
  let h1El = document.createElement("h1");
  h1El.setAttribute("class", "headingquestion");
  h1El.textContent = "High Scores";
  divEl.appendChild(h1El);
  highScores.push(initialsInput + ' - ' + score);
  let olEl = document.createElement("ol");
  for (let i = 0; i < highScores.length; i++) {
    let liEl = document.createElement("li");
    liEl.textContent = highScores[i];
    olEl.appendChild(liEl);
  }
  let btn1 = document.createElement("button");
  btn1.textContent = "Go back";
  btn1.setAttribute("class", "optionbutton");
  let btn2 = document.createElement("button");
  btn2.textContent = "Clear high scores";
  btn2.setAttribute("class", "optionbutton");
  divEl.appendChild(olEl);
  divEl.appendChild(btn1);
  divEl.appendChild(btn2);
  let questionContainerScore = document.getElementById("question-container");
  questionContainerScore.appendChild(divEl);
  removeAllDone();
  btn1.addEventListener('click', restart);
}



function removeAllDone() {
  let allDonePage = document.getElementById("done");
  allDonePage.remove();
}

function removeHighScore() {
  let highScorePage = document.getElementById("highscore");
  highScorePage.remove();
}

function restart() {
  removeHighScore();
  let startPage = document.querySelector(".hide-landing-page");
  startPage.setAttribute("class", "container");

}

startButton.addEventListener('click', startQuiz);

