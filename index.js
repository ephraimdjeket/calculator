function getOptionsValue() {
  let currentQuestion = quiz.viewQuestions();
  let currentOptions = currentQuestion.options;
  let result = Object.entries(currentOptions);

  result.forEach(([key, value]) => {
    const optionDiv = document.createElement("div");
    optionDiv.classList.add("option-list");

    optionDiv.innerHTML = `${key}: ${value}`;

    optionsContainer.appendChild(optionDiv);
  });
}
