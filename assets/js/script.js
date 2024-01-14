document.addEventListener("DOMContentLoaded", function () {
  const elements = {
    usernameContainer: document.getElementById("username-container"),
    startButton: document.getElementById("start-button"),
    quizContainer: document.getElementById("quiz-container"),
    questionElement: document.getElementById("question"),
    optionsElement: document.getElementById("options"),
    finalScoreContainer: document.getElementById("final-score-container"),
    finalScoreValue: document.getElementById("final-score-value"),
    finalScoreElement: document.getElementById("final-score"),
    restartButton: document.getElementById("restart-button"),
  };

  let currentQuestionIndex = 0;
  let score = 0;

  const questions = [
    // Add your questions here
  ];

  function startQuiz() {
    const username = document.getElementById("username").value;
    if (username.trim() !== "") {
      elements.usernameContainer.style.display = "none";
      elements.quizContainer.classList.remove("hide");
      elements.restartButton.classList.remove("hide");
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

    elements.scoreValue.textContent = `Score: ${score}/${currentQuestionIndex + 1}`;
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
    elements.finalScoreContainer.classList.remove("hide");
    elements.finalScoreValue.textContent = score;
    elements.restartButton.style.display = "block";
  }

  function restartQuiz() {
    elements.finalScoreContainer.classList.add("hide");
    score = 0;
    currentQuestionIndex = 0;
    elements.finalScoreValue.textContent = "";
    elements.restartButton.style.display = "none";
    displayQuestion();
  }

  elements.startButton.addEventListener("click", startQuiz);
  elements.restartButton.addEventListener("click", restartQuiz);

  // Display the first question when the page loads
  displayQuestion();
});