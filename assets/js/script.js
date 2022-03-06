
let startButton = document.getElementById("start-quiz-btn");




function startQuiz() {
  removeLanding();
  questionOne();
};

function removeLanding() {
  let landingEl = document.querySelector(".container");
  landingEl.remove();
}

function questionOne() {
  let divEl = document.createElement("div");
  divEl.setAttribute("id", "question-one");
  let h1El = document.createElement("h1");
  h1El.setAttribute("id", "headingquestion-1")
  h1El.textContent = "Commonly used data types DO NOT include:";
  divEl.appendChild(h1El);
  let btn1 = document.createElement("button");
  btn1.textContent = "1. strings";
  btn1.setAttribute("class", "firstbtn1")
  let btn2 = document.createElement("button");
  btn2.textContent = "2. booleans";
  btn2.setAttribute("class", "firstbtn2")
  let btn3 = document.createElement("button");
  btn3.textContent = "3. alerts";
  btn3.setAttribute("class", "firstbtn3")
  let btn4 = document.createElement("button");
  btn4.textContent = "4. numbers";
  btn4.setAttribute("class", "firstbtn4")
  divEl.appendChild(btn1);
  divEl.appendChild(btn2);
  divEl.appendChild(btn3);
  divEl.appendChild(btn4)
  let firstQuestion = document.querySelector("#question-container");
  firstQuestion.appendChild(divEl);
  btn1.addEventListener('click', questionTwo);
  btn2.addEventListener('click', questionTwo);
  btn3.addEventListener('click', questionTwo);
  btn4.addEventListener('click', questionTwo);

}

function questionTwo() {
  let divEl = document.createElement("div");
  divEl.setAttribute("id", "question-two")
  let h1El = document.createElement("h1");
  h1El.setAttribute("id", "headingquestion-2");
  h1El.textContent = "The condition in an if/else statement is enclosed with______.";
  divEl.appendChild(h1El);
  let btn1 = document.createElement("button");
  btn1.textContent = "1. quotes";
  btn1.setAttribute("id", "secondbtn1")
  let btn2 = document.createElement("button");
  btn2.textContent = "2. curly brackets";
  btn2.setAttribute("id", "secondbtn2")
  let btn3 = document.createElement("button");
  btn3.textContent = "3. parenthesis";
  btn3.setAttribute("id", "secondbtn3")
  let btn4 = document.createElement("button");
  btn4.textContent = "4. square brackets";
  btn4.setAttribute("id", "secondbtn4")
  divEl.appendChild(btn1);
  divEl.appendChild(btn2);
  divEl.appendChild(btn3);
  divEl.appendChild(btn4);
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

function questionThree() {
  let divEl = document.createElement("div");
  divEl.setAttribute("id", "question-three");
  let h1El = document.createElement("h1");
  h1El.setAttribute("id", "headingquestion-3");
  h1El.textContent = "Arrays in JavaScript can be used to store"
  divEl.appendChild(h1El);
  let btn1 = document.createElement("button");
  btn1.textContent = "1. numbers and strings";
  btn1.setAttribute("class", "thirdbtn1")
  let btn2 = document.createElement("button");
  btn2.textContent = "2. other arrays";
  btn2.setAttribute("class", "thirdbtn2")
  let btn3 = document.createElement("button");
  btn3.textContent = "3. booleans";
  btn3.setAttribute("class", "thirdbtn3")
  let btn4 = document.createElement("button");
  btn4.textContent = "4. all of the above";
  btn4.setAttribute("class", "thirdbtn4")
  divEl.appendChild(btn1);
  divEl.appendChild(btn2);
  divEl.appendChild(btn3);
  divEl.appendChild(btn4);
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

function questionFour() {
  let divEl = document.createElement("div");
  divEl.setAttribute("id", "question-four")
  let h1El = document.createElement("h1");
  h1El.setAttribute("id", "headingquestion-4");
  h1El.textContent = "String values must be enclosed within ______ when being assigned to variables"
  divEl.appendChild(h1El);
  let btn1 = document.createElement("button");
  btn1.textContent = "1. commas";
  btn1.setAttribute("id", "fourthbtn1")
  let btn2 = document.createElement("button");
  btn2.textContent = "2. curly brackets";
  btn2.setAttribute("id", "fourthbtn2")
  let btn3 = document.createElement("button");
  btn3.textContent = "3. quotes";
  btn3.setAttribute("id", "fourthbtn3")
  let btn4 = document.createElement("button");
  btn4.textContent = "4. parenthesis";
  btn4.setAttribute("id", "fourthbtn4")
  divEl.appendChild(btn1);
  divEl.appendChild(btn2);
  divEl.appendChild(btn3);
  divEl.appendChild(btn4);
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

function questionFive() {
  let divEL = document.createElement("div");
  divEL.setAttribute("id", "question-five");
  let h1El = document.createElement("h1");
  h1El.setAttribute("id", "headingquestion-5");
  h1El.textContent = "A very useful tool used during development and debugging for printing content to the debugger is";
  divEL.appendChild(h1El);
  let btn1 = document.createElement("button");
  btn1.textContent = "1. JavaScript";
  btn1.setAttribute("class", "fifthbtn1")
  let btn2 = document.createElement("button");
  btn2.textContent = "2. terminal/bash";
  btn2.setAttribute("class", "fifthbtn2")
  let btn3 = document.createElement("button");
  btn3.textContent = "3. for loops";
  btn3.setAttribute("class", "fifthbtn3")
  let btn4 = document.createElement("button");
  btn4.textContent = "4. console.log";
  btn4.setAttribute("class", "fifthbtn4")
  divEL.appendChild(btn1);
  divEL.appendChild(btn2);
  divEL.appendChild(btn3);
  divEL.appendChild(btn4);
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

function allDone() {
  let divEl = document.createElement("div");
  divEl.setAttribute("id", "done");
  let h1El = document.createElement("h1");
  h1El.setAttribute("id", "alldonequestion");
  h1El.textContent = "All done!";
  divEl.appendChild(h1El);
  let textEl = document.createElement("p");
  textEl.textContent = "Your final score is";
  let secondTextEl = document.createElement("p");
  secondTextEl.textContent = "Enter initials";
  let inputEl = document.createElement("input");
  let btn = document.createElement("button");
  btn.textContent = "submit";
  btn.setAttribute("id", "btnalldone");
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
  let divEl = document.createElement("div");
  let h1El = document.createElement("h1");
  h1El.setAttribute("id", "highscorequestion");
  h1El.textContent = "High Scores";
  divEl.appendChild(h1El);
  let inputEl = document.createElement("input");
  let btn1 = document.createElement("button");
  btn1.textContent = "Go back";
  btn1.setAttribute("class", "btnback");
  let btn2 = document.createElement("button");
  btn2.textContent = "Clear high scores";
  btn2.setAttribute("class", "btnscore");
  divEl.appendChild(inputEl);
  divEl.appendChild(btn1);
  divEl.appendChild(btn2);
  let questionContainerScore = document.getElementById("question-container");
  questionContainerScore.appendChild(divEl);
  removeAllDone();
}

function removeAllDone() {
  let allDonePage = document.getElementById("done");
  allDonePage.remove();
}


startButton.addEventListener('click', startQuiz);