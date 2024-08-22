document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-button");
  const usernameContainer = document.getElementById("username-container");
  const quizContainer = document.getElementById("quiz-container");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const finalScoreContainer = document.getElementById("final-score-container");
  const finalScoreValue = document.getElementById("finalScore-value");
  const restartButton = document.getElementById("restart-button");
  const feedbackElement = document.createElement("p");

  let currentQuestionIndex = 0;
  let score = 0;

  const questions = [{
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: 0
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "Jane Austen", "Mark Twain", "Ernest Hemingway"],
      correctAnswer: 0
    },
    {
      question: "What is the largest ocean?",
      options: ["Atlantic", "Indian", "Pacific", "Arctic"],
      correctAnswer: 2
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "G", "Go"],
      correctAnswer: 0
    },
    {
      question: "Which artist painted the Mona Lisa?",
      options: ["Van Gogh", "Picasso", "Da Vinci", "Michelangelo"],
      correctAnswer: 2
    },
    {
      question: "Which planet is closest to the sun?",
      options: ["Earth", "Mars", "Venus", "Mercury"],
      correctAnswer: 3
    },
    {
      question: "What is the largest mammal?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Lion"],
      correctAnswer: 1
    },
    {
      question: "Who was the first President of the United States?",
      options: ["Thomas Jefferson", "George Washington", "John Adams", "James Madison"],
      correctAnswer: 1
    },
    {
      question: "Which country is known as the 'Land of the Rising Sun'?",
      options: ["China", "Japan", "South Korea", "Thailand"],
      correctAnswer: 1
    }
  ];

  function startQuiz() {
    const username = document.getElementById("username").value;
    if (username.trim() !== "") {
      usernameContainer.classList.add("hide");
      quizContainer.classList.remove("hide");
      showQuestion();
    } else {
      alert("Please enter your username.");
    }
  }

  function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => selectAnswer(index));
      optionsElement.appendChild(button);
    });
  }

  function resetState() {
    while (optionsElement.firstChild) {
      optionsElement.removeChild(optionsElement.firstChild);
    }
    feedbackElement.textContent = "";
    feedbackElement.className = "";
    quizContainer.appendChild(feedbackElement);
  }

  function selectAnswer(selectedIndex) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (selectedIndex === correctAnswer) {
      score++;
      feedbackElement.textContent = "Correct!";
      feedbackElement.className = "correct-feedback";
    } else {
      feedbackElement.textContent = `Incorrect! The correct answer was: ${questions[currentQuestionIndex].options[correctAnswer]}`;
      feedbackElement.className = "incorrect-feedback";
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      setTimeout(showQuestion, 1000);
    } else {
      setTimeout(showFinalScore, 1000);
    }
  }

  function showFinalScore() {
    quizContainer.classList.add("hide");
    finalScoreContainer.classList.remove("hide");
    finalScoreValue.textContent = `${score} out of ${questions.length}`;
    restartButton.classList.remove("hide");
  }

  function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    finalScoreContainer.classList.add("hide");
    restartButton.classList.add("hide");
    quizContainer.classList.remove("hide");
    showQuestion();
  }

  startButton.addEventListener("click", startQuiz);
  restartButton.addEventListener("click", restartQuiz);
});