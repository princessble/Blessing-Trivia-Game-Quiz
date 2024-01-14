document.addEventListener("DOMContentLoaded", function () {
  const elements = {
    usernameContainer: document.getElementById("username-container"),
    startButton: document.getElementById("start-button"),
    questionElement: document.getElementById("question"),
    optionsElement: document.getElementById("options"),
    finalScoreElementContainer: document.getElementById("final-score-container"),
    scoreElement: document.getElementById("score-value"),
    feedbackElement: document.getElementById("feedback"),
    submitButton: document.getElementById("submit-button"),
    finalScoreElement: document.getElementById("final-score"),
    restartButton: document.getElementById("restartButton"),
  };

  let currentQuestionIndex = 0;
  let score = 0;

  const questions = [{
      question: "1. What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: 0,
    },
    // ... (rest of the questions)
  ];

  function startQuiz() {
    const username = document.getElementById("username").value;
    if (username.trim() !== "") {
      elements.usernameContainer.style.display = "none";
      quizContainer.classList.remove("hide"),
        restartButton.classList.remove("hide"),
        displayQuestion();
    } else {
      // Display an error message or prompt the user to enter a valid username
    }
  }

  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    elements.questionElement.textContent = currentQuestion.question;
    elements.optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => checkAnswer(index));
      elements.optionsElement.appendChild(button);
    });
  }

  function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
      score++;
      elements.feedbackElement.textContent = "Correct!";
    } else {
      elements.feedbackElement.textContent = "Incorrect!";
    }

    elements.scoreElement.textContent = `Score: ${score}/${currentQuestionIndex + 1}`;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }

  function endQuiz() {
    elements.questionElement.textContent = "Quiz Completed!";
    elements.optionsElement.innerHTML = "";
    elements.submitButton.style.display = "block";
  }

  function submitQuiz() {
    elements.finalScoreElementContainer.classList.remove("hide");
    elements.finalScoreElement.innerHTML = score;
    elements.submitButton.style.display = "none";
    elements.restartButton.style.display = "block";
  }

  function restartQuiz() {
    elements.finalScoreElementContainer.classList.add("hide");
    score = 0;
    currentQuestionIndex = 0;
    elements.finalScoreElement.textContent = "";
    elements.restartButton.style.display = "none";
    displayQuestion();
  }

  elements.startButton.addEventListener("click", startQuiz);
  elements.submitButton.addEventListener("click", submitQuiz);
  elements.restartButton.addEventListener("click", restartQuiz);

  // Display the first question when the page loads
  displayQuestion();
});