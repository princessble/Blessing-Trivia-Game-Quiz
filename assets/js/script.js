document.addEventListener("DOMContentLoaded", function () {
  const usernameContainer = document.getElementById("username-container");
  const startButton = document.getElementById("start-button");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const finalScoreElementContainer = document.getElementById("final-score-container");
  const scoreElement = document.getElementById("score-value");
  const feedbackElement = document.getElementById("feedback");
  const submitButton = document.getElementById("submit-button");
  const finalScoreElement = document.getElementById("final-score");
  const restartButton = document.getElementById("restartButton");

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
      question: "3. Which famous scientist developed the theory of general relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
      correctAnswer: 1
    },
    {
      question: "4. What is the largest mammal on Earth?",
      options: ["Blue Whale", "Elephant", "Giraffe", "Lion"],
      correctAnswer: 0
    },
    {
      question: "5. Which country is known as the 'Land of the Rising Sun'?",
      options: ["China", "Japan", "South Korea", "Thailand"],
      correctAnswer: 1
    },
    {
      question: "6. Which famous artist painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
      correctAnswer: 1
    },
    {
      question: "7. What is the chemical symbol for gold?",
      options: ["Au", "Ag", "G", "Go"],
      correctAnswer: 0
    },
    {
      question: "8. Which famous playwright wrote 'Romeo and Juliet'?",
      options: ["William Shakespeare", "George Orwell", "Charles Dickens", "Jane Austen"],
      correctAnswer: 0
    },
    {
      question: "9. What is the largest planet in our solar system?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 2
    },
    {
      question: "10. Which animal is known as the 'King of the Jungle'?",
      options: ["Lion", "Tiger", "Elephant", "Giraffe"],
      correctAnswer: 0
    },

    {
      question: "11. Which gas do plants use for photosynthesis?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correctAnswer: 1
    },
    {
      question: "12. In which year did the Titanic sink?",
      options: ["1905", "1912", "1921", "1930"],
      correctAnswer: 1
    },
    {
      question: "13. What is the largest species of shark?",
      options: ["Hammerhead Shark", "Great White Shark", "Tiger Shark", "Bull Shark"],
      correctAnswer: 1
    },
    {
      question: "14. Which planet is known as the 'Morning Star' or 'Evening Star'?",
      options: ["Venus", "Mars", "Mercury", "Saturn"],
      correctAnswer: 0
    },
    {
      question: "15. Who wrote the novel 'Pride and Prejudice'?",
      options: ["Jane Austen", "Emily Brontë", "Charlotte Brontë", "Agatha Christie"],
      correctAnswer: 0
    },
  ];

  function startQuiz() {
    const username = document.getElementById("username").value;
    if (username.trim() !== "") {
      usernameContainer.style.display = "none";
      quizContainer.classList.remove("hide"),
        restartButton.classList.remove("hide"),
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

  /**
   * Calculate final score, display results, etc.
   * Customize this function based on your requirements
   * For now, let's display the final score
   */
  function submitQuiz() {
    finalScoreElementContainer.classList.remove("hide");
    finalScoreElement.innerHTML = score;
    submitButton.style.display = "none";
    restartButton.style.display = "block";
  }

  function restartQuiz() {
    finalScoreElementContainer.classList.add("hide");
    score = 0;
    currentQuestionIndex = 0;
    finalScoreElement.textContent = "";
    restartButton.style.display = "";
    displayQuestion();
  }

  elements.startButton.addEventListener("click", startQuiz);
  elements.submitButton.addEventListener("click", submitQuiz);
  elements.restartButton.addEventListener("click", restartQuiz);

  // Display the first question when the page loads
  displayQuestion();
});