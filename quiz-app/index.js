const questionContainerEl = document.querySelector(".quiz-content-2");
const questionHeaderEl = document.querySelector(".question");
const nextBtnEl = document.querySelector(".next-btn");

const questions = [
  {
    question: "What’s the most popular drink in the world that is not alcohol?",
    answers: [
      { text: "Water", correct: false },
      { text: "Coca-cola", correct: false },
      { text: "Coffee", correct: true },
      { text: "Orange-juice", correct: false },
    ],
  },
  {
    question: "What does “HTTP” stand for?",
    answers: [
      { text: "Hyper Text Transfer Protocol", correct: true },
      { text: "Hyper Transfer Text Protocol", correct: false },
      { text: "Hyper Test Transit Protocol", correct: false },
      { text: "Hyper Trans Test Protocol", correct: false },
    ],
  },
  {
    question: "Which country invented tea?",
    answers: [
      { text: "India", correct: false },
      { text: "England", correct: false },
      { text: "China", correct: true },
      { text: "Vietnam", correct: false },
    ],
  },
  {
    question: "How many ribs are in a human body?",
    answers: [
      { text: "20", correct: false },
      { text: "24", correct: true },
      { text: "12", correct: false },
      { text: "28", correct: false },
    ],
  },
];

let currentQuestionIndex = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  nextBtnEl.textContent = "Next";
  nextBtnEl.style.display = "none"; // Hide the next button initially
  showQuestion();
}

function showQuestion() {
  resetState(); // Clear previous answers
  let currentQuestion = questions[currentQuestionIndex];
  questionHeaderEl.textContent = currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    questionContainerEl.append(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextBtnEl.style.display = "none"; // Hide next button when resetting
  while (questionContainerEl.firstChild) {
    questionContainerEl.removeChild(questionContainerEl.firstChild); // Clear all answer buttons
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    nextBtnEl.style.display = "block";
  } else {
    selectedBtn.classList.add("incorrect");
  }
}

function setStatusClass(element, isCorrect) {
  clearStatusClass(element); // Clear any existing classes
  if (isCorrect) {
    element.classList.add("correct"); // Add correct class
  } else {
    element.classList.add("incorrect"); // Add incorrect class
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("incorrect");
}

nextBtnEl.addEventListener("click", () => {
  currentQuestionIndex++; // Move to the next question
  if (currentQuestionIndex < questions.length) {
    showQuestion(); // Show the next question
  } else {
    alert("Quiz Completed!"); // Show a message when the quiz is done
    startQuiz(); // Restart the quiz
  }
});

startQuiz(); // Start the quiz initially

function getOptionsValue() {
  let currentQuestion = quiz.viewQuestions();
  let currentOptions = currentQuestion.options;
  let result = Object.entries(currentOptions);

  result.forEach(([key, value]) => {
    const span = document.createElement("span");
    span.textContent = `${key}: ${value}`;

    option.appendChild(span);
  });
}
