document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const usernameContainer = document.getElementById("username-container");
  const quizContainer = document.getElementById("quiz-container");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const feedbackElement = document.getElementById("feedback");
  const finalScoreContainer = document.getElementById("final-score-container");
  const finalScoreElement = document.getElementById("final-score");
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
      question: "Who developed the theory of general relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
      correctAnswer: 1
    },
    {
      question: "What is the largest mammal on Earth?",
      options: ["Blue Whale", "Elephant", "Giraffe", "Lion"],
      correctAnswer: 0
    },
    {
      question: "Which country is known as the 'Land of the Rising Sun'?",
      options: ["China", "Japan", "South Korea", "Thailand"],
      correctAnswer: 1
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
      correctAnswer: 1
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "G", "Go"],
      correctAnswer: 0
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["William Shakespeare", "George Orwell", "Charles Dickens", "Jane Austen"],
      correctAnswer: 0
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 2
    },
    {
      question: "Which animal is known as the 'King of the Jungle'?",
      options: ["Lion", "Tiger", "Elephant", "Giraffe"],
      correctAnswer: 0
    }
  ];

  function startQuiz() {
    usernameContainer.style.display = "none";
    quizContainer.style.display = "block";
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
  }

  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    feedbackElement.style.display = "none"; // Hide feedback initially

    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => checkAnswer(index));
      optionsElement.appendChild(button);
    });
  }

  function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    feedbackElement.style.display = "block";
    if (selectedIndex === currentQuestion.correctAnswer) {
      feedbackElement.textContent = "Correct!";
      score++;
    } else {
      feedbackElement.textContent = `Wrong! The correct answer was ${currentQuestion.options[currentQuestion.correctAnswer]}.`;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      setTimeout(displayQuestion, 1000); // Show next question after a brief pause
    } else {
      setTimeout(endQuiz, 1000); // End the quiz after the last question
    }
  }

  function endQuiz() {
    quizContainer.style.display = "none";
    finalScoreContainer.style.display = "block";
    finalScoreElement.textContent = `You scored ${score} out of ${questions.length}`;
    restartButton.style.display = "block";
  }

  function restartQuiz() {
    finalScoreContainer.style.display = "none";
    restartButton.style.display = "none";
    startQuiz();
  }

  startButton.addEventListener("click", startQuiz);
  restartButton.addEventListener("click", restartQuiz);
});