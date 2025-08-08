const quiz = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "Capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    answer: "Delhi"
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "C++", "JavaScript", "Java"],
    answer: "JavaScript"
  },
  {
    question: "Sun rises from?",
    options: ["West", "North", "East", "South"],
    answer: "East"
  },
  {
    question: "How many days in a week?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  }
];

let index = 0;
let score = 0;

function loadQuestion() {
  const q = quiz[index];
  document.getElementById("question").innerText = q.question;
  document.getElementById("btn1").innerText = q.options[0];
  document.getElementById("btn2").innerText = q.options[1];
  document.getElementById("btn3").innerText = q.options[2];
  document.getElementById("btn4").innerText = q.options[3];
  document.getElementById("result").innerText = "";
  document.getElementById("nextBtn").style.display = "none";
}

function checkAnswer(btn) {
  
let selected = btn.innerText;
  
let correct = quiz[index].answer;

  
if (selected === correct) {
document.getElementById("result").innerText = "Correct!";
score++;
} else {
  document.getElementById("result").innerText = "Wrong! Correct answer: " + correct;
}

document.getElementById("nextBtn").style.display = "inline";}

function nextQuestion() {
  index++;
  if (index < quiz.length) {
    loadQuestion();
  } else {
    document.body.innerHTML = `<h2>Quiz Over</h2><p>Your Score: ${score} / ${quiz.length}</p>`;
  }
}

loadQuestion();