document.addEventListener("DOMContentLoaded", function () {
  const usernameContainer = document.getElementById("username-container");
  const startButton = document.getElementById("start-button");
  const quizContainer = document.getElementById("quiz-container");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const scoreElement = document.getElementById("score-value");
  const feedbackElement = document.getElementById("feedback");
  const submitButton = document.getElementById("submit-button");
  const finalScoreElement = document.getElementById("final-score-value");
  const restartButton = document.getElementById("restartButton");

  let currentQuestionIndex = 0;
  let score = 0;

  const questions = [ /* Your array of questions here */ ];

  function startQuiz() {
    const username = document.getElementById("username").value;
    if (username.trim() !== "") {
      usernameContainer.style.display = "none";
      quizContainer.classList.remove("hide");
      restartButton.classList.remove("hide");
      displayQuestion();
    } else {
      // Display an error message or prompt the user to enter a valid username
    }
  }

  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => checkAnswer(index));
      optionsElement.appendChild(button);
    });
  }

  function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
      score++;
      feedbackElement.textContent = "Correct!";
    } else {
      feedbackElement.textContent = "Incorrect!";
    }

    scoreElement.textContent = `Score: ${score}/${currentQuestionIndex + 1}`;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }

  function endQuiz() {
    questionElement.textContent = "Quiz Completed!";
    optionsElement.innerHTML = "";
    submitButton.style.display = "block";
  }

  function submitQuiz() {
    finalScoreElement.textContent = `Your final score is: ${score}`;
    submitButton.style.display = "none";
    restartButton.style.display = "block";
  }

  function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    finalScoreElement.textContent = "";
    restartButton.style.display = "none";
    displayQuestion();
  }

  startButton.addEventListener("click", startQuiz);
  submitButton.addEventListener("click", submitQuiz);
  restartButton.addEventListener("click", restartQuiz);

  displayQuestion();
});