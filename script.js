// Sample quiz questions and answers
const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    // Add more questions here...
];

// Initialize variables
let currentQuestionIndex = 0;
let score = 0;

// Function to display a new question
function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const feedbackElement = document.getElementById("feedback");

    questionElement.textContent = quizQuestions[currentQuestionIndex].question;
    optionsElement.innerHTML = "";

    quizQuestions[currentQuestionIndex].options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.classList.add("option");
        optionButton.textContent = option;

        optionButton.addEventListener("click", () => {
            checkAnswer(option);
        });

        optionsElement.appendChild(optionButton);
    });

    feedbackElement.textContent = "";
}

// Function to check user's answer
function checkAnswer(selectedOption) {
    const feedbackElement = document.getElementById("feedback");

    if (selectedOption === quizQuestions[currentQuestionIndex].correctAnswer) {
        feedbackElement.textContent = "Correct!";
        score++;
    } else {
        feedbackElement.textContent = "Incorrect. The correct answer was: " + quizQuestions[currentQuestionIndex].correctAnswer;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

// Function to display the final result
function displayResult() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const feedbackElement = document.getElementById("feedback");
    const scoreElement = document.getElementById("score");

    questionElement.textContent = "Quiz completed!";
    optionsElement.innerHTML = "";
    feedbackElement.textContent = "Your final score: " + score + " out of " + quizQuestions.length;
    scoreElement.textContent = "Score: " + score;
}

// Load the first question when the page loads
window.addEventListener("load", () => {
    displayQuestion();
});
