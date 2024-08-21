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

  // Array of trivia questions
  const questions = [{
      question: "What is the capital city of Japan?",
      options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
      correctAnswer: 2,
    },
    {
      question: "Which planet is closest to the Sun?",
      options: ["Earth", "Mars", "Mercury", "Venus"],
      correctAnswer: 2,
    },
    {
      question: "In which year did World War II end?",
      options: ["1942", "1945", "1939", "1948"],
      correctAnswer: 1,
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Oxygen", "Osmium", "Oganesson", "Ozone"],
      correctAnswer: 0,
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
      correctAnswer: 2,
    },
    {
      question: "Who wrote the play 'Hamlet'?",
      options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Leo Tolstoy"],
      correctAnswer: 2,
    },
    {
      question: "Which country hosted the 2016 Summer Olympics?",
      options: ["China", "Brazil", "Greece", "Japan"],
      correctAnswer: 1,
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswer: 3,
    },
    {
      question: "Which scientist is known for the theory of evolution?",
      options: ["Albert Einstein", "Charles Darwin", "Isaac Newton", "Galileo Galilei"],
      correctAnswer: 1,
    },
    {
      question: "Which country is famous for the Great Wall?",
      options: ["India", "China", "Egypt", "Mexico"],
      correctAnswer: 1,
    },
  ];

  // Function to start the quiz
  startButton.addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    if (username) {
      // Hide the username container and start button
      usernameContainer.classList.add("hide");
      // Show the quiz container
      quizContainer.classList.remove("hide");
      // Display the first question
      displayQuestion();
    } else {
      alert("Please enter a valid username to start the quiz.");
    }
  });

  // Function to display the current question
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

  // Function to check the selected answer
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

  // Function to end the quiz
  function endQuiz() {
    questionElement.textContent = "Quiz Completed!";
    optionsElement.innerHTML = "";
    finalScoreValue.textContent = `${score}/${questions.length}`;
    finalScoreContainer.classList.remove("hide");
  }

  // Function to restart the quiz
  restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    finalScoreContainer.classList.add("hide");
    quizContainer.classList.remove("hide");
    displayQuestion();
  });

  // Display the first question on page load (optional)
  displayQuestion();
});