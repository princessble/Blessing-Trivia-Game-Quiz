document.addEventListener("DOMContentLoaded", function () {
  const usernameContainer = document.getElementById("username-container");
  const startButton = document.getElementById("start-button");
  const quizContainer = document.getElementById("quiz-container");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const finalScoreElementContainer = document.getElementById("final-score-container");
  const finalScoreElement = document.getElementById("finalScore-value");
  const restartButton = document.getElementById("restart-button");

  let currentQuestionIndex = 0;
  let score = 0;

  const questions = [{
      question: "1. What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: 0,
    },
    {
      question: "2. Which planet is known as the 'Red Planet'?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1
    },
    {
      question: "3. Who wrote 'Romeo and Juliet'?",
      options: ["William Shakespeare", "George Orwell", "Charles Dickens", "Jane Austen"],
      correctAnswer: 0
    },
    {
      question: "4. What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
      correctAnswer: 2
    },
    {
      question: "5. What is the chemical symbol for water?",
      options: ["H2O", "O2", "CO2", "NaCl"],
      correctAnswer: 0
    },
    {
      question: "6. Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
      correctAnswer: 0
    },
    {
      question: "7. What is the smallest country in the world?",
      options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
      correctAnswer: 1
    },
    {
      question: "8. Which element has the atomic number 1?",
      options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
      correctAnswer: 2
    },
    {
      question: "9. What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Quartz"],
      correctAnswer: 2
    },
    {
      question: "10. Which planet is closest to the sun?",
      options: ["Venus", "Earth", "Mercury", "Mars"],
      correctAnswer: 2
    }
  ];

  function startQuiz() {
    const username = document.getElementById("username").value;
    if (username.trim() !== "") {
      usernameContainer.style.display = "none";
      quizContainer.classList.remove("hide");
      displayQuestion();
    } else {
      alert("Please enter a valid username.");
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
    }

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
    finalScoreElementContainer.classList.remove("hide");
    finalScoreElement.textContent = `${score}/${questions.length}`;
    restartButton.classList.remove("hide");
  }

  function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    finalScoreElementContainer.classList.add("hide");
    restartButton.classList.add("hide");
    displayQuestion();
  }

  startButton.addEventListener("click", startQuiz);
  restartButton.addEventListener("click", restartQuiz);
});