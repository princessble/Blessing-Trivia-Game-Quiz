document.addEventListener("DOMContentLoaded", () => {
  const usernameContainer = document.getElementById("username-container");
  const startButton = document.getElementById("start-button");
  const quizContainer = document.getElementById("quiz-container");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const feedbackElement = document.getElementById("feedback");
  const finalScoreContainer = document.getElementById("final-score-container");
  const finalScoreValue = document.getElementById("finalScore-value");
  const restartButton = document.getElementById("restart-button");

  let currentQuestionIndex = 0;
  let score = 0;

  const questions = [{
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: 0,
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1,
    },
    {
      question: "Which famous scientist developed the theory of general relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
      correctAnswer: 1,
    },
    // Add more questions as needed...
  ];

  startButton.addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    if (username) {
      usernameContainer.classList.add("hide");
      quizContainer.classList.remove("hide");
      displayQuestion();
    } else {
      alert("Please enter a valid username to start the quiz.");
    }
  });

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
    const buttons = optionsElement.querySelectorAll("button");

    if (selectedIndex === currentQuestion.correctAnswer) {
      buttons[selectedIndex].classList.add("correct");
      score++;
      feedbackElement.textContent = "Correct!";
    } else {
      buttons[selectedIndex].classList.add("incorrect");
      buttons[currentQuestion.correctAnswer].classList.add("correct");
      feedbackElement.textContent = "Incorrect!";
    }

    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        displayQuestion();
      } else {
        endQuiz();
      }
      feedbackElement.textContent = "";
    }, 1000);
  }

  function endQuiz() {
    questionElement.textContent = "Quiz Completed!";
    optionsElement.innerHTML = "";
    finalScoreValue.textContent = `${score}/${questions.length}`;
    finalScoreContainer.classList.remove("hide");
  }

  restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    finalScoreContainer.classList.add("hide");
    quizContainer.classList.remove("hide");
    displayQuestion();
  });

  // Display the first question on page load
  displayQuestion();
});